import { useEffect, useRef, useState } from 'react'
import { CloseIcon, LogoCode, MenuIcon, MoonIcon, SunIcon, TerminalIcon } from './icons'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function initialTheme(): 'dark' | 'light' {
  return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
}

export default function Navbar({ onOpenTerm }: { onOpenTerm: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let cur = 'home'
      LINKS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  // close the mobile menu when clicking outside the navbar
  useEffect(() => {
    if (!menuOpen) return
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [menuOpen])

  return (
    <nav ref={navRef} className={scrolled ? 'scrolled' : ''}>
      <div className="navbar">
        <div className="navbar-inner">
          <a href="#home" className="logo">
            <span className="box">
              <LogoCode />
            </span>
            <span className="wm">
              IK<small>LEIN</small>
            </span>
          </a>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${active === id ? ' on' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="nav-ctrls">
            <button
              className="nav-btn"
              onClick={onOpenTerm}
              title="Terminal mode"
              style={{ color: 'var(--muted)' }}
            >
              <TerminalIcon />
            </button>
            <button
              className="nav-btn"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
              style={{ color: 'var(--muted)' }}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="nav-btn nav-toggle"
              onClick={() => setMenuOpen((o) => !o)}
              title="Menu"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ color: 'var(--muted)' }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
