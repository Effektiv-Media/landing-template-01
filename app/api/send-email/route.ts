import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const contactEmailTo = process.env.CONTACT_EMAIL_TO

    if (!contactEmailTo) {
      console.error("[v0] CONTACT_EMAIL_TO environment variable not set")
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1f2e;">{{ contact_form_notification_subject }}</h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>{{ form_name_label }}:</strong> ${escapeHtml(name)}</p>
          <p><strong>{{ form_email_label }}:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>{{ form_phone_label }}:</strong> ${escapeHtml(phone)}</p>` : ""}
          ${address ? `<p><strong>{{ form_address_label }}:</strong> ${escapeHtml(address)}</p>` : ""}
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #1a1f2e;">{{ form_message_label }}</h3>
          <p style="white-space: pre-wrap; color: #555;">${escapeHtml(message)}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="font-size: 12px; color: #999;">{{ contact_form_auto_reply_notice }}</p>
      </div>
    `

    const response = await resend.emails.send({
      from: "forfragning@effektivmedia.nu",
      to: contactEmailTo,
      subject: `{{ contact_form_email_subject }} - ${escapeHtml(name)}`,
      html: emailHtml,
      reply_to: email,
    })

    if (response.error) {
      console.error("[v0] Resend error:", response.error)
      return Response.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return Response.json(
      { success: true, message: "{{ contact_form_success_backend }}" },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Email API error:", error)
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }
  return text.replace(/[&<>"']/g, (char) => htmlEscapeMap[char])
}
