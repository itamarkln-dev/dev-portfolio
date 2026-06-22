import { useEffect, useState } from 'react'

const TYPE_MS = 65
const DELETE_MS = 30
const HOLD_MS = 1700
const GAP_MS = 450

export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = phrases[index]

    // finished typing -> hold (cursor blinks), then start deleting
    if (!deleting && text === current) {
      setPaused(true)
      const t = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, HOLD_MS)
      return () => clearTimeout(t)
    }
    // finished deleting -> brief pause, then move to next phrase
    if (deleting && text === '') {
      setPaused(true)
      const t = setTimeout(() => {
        setPaused(false)
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }, GAP_MS)
      return () => clearTimeout(t)
    }

    // actively typing/deleting -> cursor stays solid
    setPaused(false)
    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        ),
      deleting ? DELETE_MS : TYPE_MS,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, phrases])

  return (
    <>
      {text}
      <span className={`cursor${paused ? ' blink' : ''}`} aria-hidden="true" />
    </>
  )
}
