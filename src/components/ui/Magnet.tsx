import { useEffect, useRef, useState, type ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  /** Distance (px) beyond the element edge where the magnetic pull kicks in. */
  padding?: number
  /** Higher = weaker pull (the cursor offset is divided by this). */
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

/**
 * Magnetic hover effect: the wrapped element follows the cursor when it comes
 * within `padding` of the element's edges, easing back to center otherwise.
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const within =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding
      if (within) {
        setActive(true)
        setPos({ x: dx / strength, y: dy / strength })
      } else {
        setActive(false)
        setPos({ x: 0, y: 0 })
      }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [padding, strength])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
