import { useRef, type CSSProperties } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

function Char({
  char,
  range,
  progress,
}: {
  char: string
  range: [number, number]
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* Invisible placeholder reserves layout space. */}
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

/**
 * Character-by-character scroll reveal. Each character fades from 0.2 to full
 * opacity as the paragraph scrolls through the viewport.
 */
export default function AnimatedText({
  text,
  className,
  style,
}: {
  text: string
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        // Render spaces as plain text so the paragraph can wrap between words.
        if (char === ' ') return <span key={i}> </span>
        const start = i / chars.length
        const end = start + 1 / chars.length
        return (
          <Char
            key={i}
            char={char}
            range={[start, end]}
            progress={scrollYProgress}
          />
        )
      })}
    </p>
  )
}
