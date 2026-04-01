"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
  duration?: number
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.65,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  // All directions use only y + opacity — no x — to avoid horizontal overflow on mobile
  const yOffset = direction === "none" ? 0 : 36
  const initial = { opacity: 0, y: yOffset }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0 } : initial}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
