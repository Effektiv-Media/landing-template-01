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

  const initial = {
    opacity: 0,
    y: direction === "up" ? 36 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
