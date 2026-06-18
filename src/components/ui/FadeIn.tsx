import { motion } from 'framer-motion'
import type { CSSProperties, ElementType, ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  as?: ElementType
  delay?: number
  duration?: number
  x?: number
  y?: number
  className?: string
  style?: CSSProperties
}

/**
 * Reveal-on-scroll wrapper. Fades/slides its children into place the first
 * time they enter the viewport. Uses motion.create() so it can render any
 * element type passed via `as`.
 */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  // motion.create() builds a motion component for an arbitrary element type.
  // Typed as any because the resulting component accepts the motion props below.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion.create(as) as any

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
