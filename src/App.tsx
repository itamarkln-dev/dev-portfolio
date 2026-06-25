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
