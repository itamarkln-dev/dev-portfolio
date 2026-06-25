import { useEffect, useState } from 'react'
import Background from './components/portfolio/Background'
import Navbar from './components/portfolio/Navbar'
import Sections from './components/portfolio/Sections'
import Terminal from './components/portfolio/Terminal'

function App() {
  const [term, setTerm] = useState(false)

  // toggle the global terminal-mode class (hides GUI, shows terminal)
  useEffect(() => {
    document.body.classList.toggle('term', term)
  }, [term])

  // TEMP DIAGNOSTIC (only when URL has ?debug=1): prints the exit-tap event
  // timeline on-screen so we can see where the delay is on a real iPhone.
  useEffect(() => {
    if (!/[?&]debug=1/.test(location.search)) return
    const box = document.createElement('div')
    box.style.cssText =
      'position:fixed;top:0;left:0;right:0;z-index:99999;background:rgba(0,0,0,.88);' +
      'color:#0f0;font:12px/1.5 monospace;padding:8px;white-space:pre-wrap;pointer-events:none'
    box.textContent = 'debug on — open terminal, tap "exit GUI"'
    document.body.appendChild(box)
    const log: string[] = []
    let t0 = 0
    let watching = false
    const push = (s: string) => {
      log.push(s)
      if (log.length > 12) log.shift()
      box.textContent = log.join('\n')
    }
    const onEvt = (e: Event) => {
      if (!(e.target instanceof Element) || !e.target.closest('.exit')) return
      const now = performance.now()
      if (!t0) t0 = now
      push(`${e.type} +${Math.round(now - t0)}ms`)
      if (!watching && (e.type === 'pointerdown' || e.type === 'touchstart')) {
        watching = true
        const w = () => {
          const term = document.querySelector('.terminal')
          if (term && getComputedStyle(term).display === 'none') {
            push(`HIDDEN +${Math.round(performance.now() - t0)}ms`)
            watching = false
            return
          }
          requestAnimationFrame(w)
        }
        requestAnimationFrame(w)
      }
    }
    const types = ['touchstart', 'pointerdown', 'pointerup', 'click']
    types.forEach((t) => document.addEventListener(t, onEvt, true))
    return () => {
      types.forEach((t) => document.removeEventListener(t, onEvt, true))
      box.remove()
    }
  }, [])

  // scroll-reveal animation for .reveal elements
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), (i % 3) * 70)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Background />
      <Navbar onOpenTerm={() => setTerm(true)} />
      <Sections />
      <Terminal open={term} onClose={() => setTerm(false)} />
    </>
  )
}

export default App
