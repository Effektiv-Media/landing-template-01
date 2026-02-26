import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucas Bygger AB – Byggfirma & Snickare',
  description:
    'Lucas Bygger AB erbjuder professionella bygg- och snickeritjänster. Renovering, nybyggnation, köksrenovering, altanbyggen och mer. Kontakta oss för en kostnadsfri offert.',
  keywords: 'byggfirma, snickare, renovering, nybyggnation, Lucas Bygger AB, byggtjänster',
  openGraph: {
    title: 'Lucas Bygger AB – Byggfirma & Snickare',
    description: 'Professionella bygg- och snickeritjänster av högsta kvalitet.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
