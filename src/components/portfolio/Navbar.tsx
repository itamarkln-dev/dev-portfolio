import { useEffect, useState } from 'react'
import {
  ChatIcon,
  GithubMark,
  GridIcon,
  HomeIcon,
  LayersIcon,
  LogoCode,
  MoonIcon,
  SunIcon,
  TerminalIcon,
  UserIcon,
} from './icons'

const GITHUB_USER = 'https://github.com/itamarkln-dev'
const STARS_REPO = 'https://api.github.com/repos/itamarkln-dev/itamarkln-dev'

const LINKS = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'about', label: 'About', Icon: UserIcon },
  { id: 'projects', label: 'Work', Icon: GridIcon },
  { id: 'skills', label: 'Skills', Icon: LayersIcon },
  { id: 'contact', label: 'Contact', Icon: ChatIcon },
]

function initialTheme(): 'dark' | 'light' {
  return localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
}

export default function Navbar({ onOpenTerm }: { onOpenTerm: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [stars, setStars] = useState('·')
  const [active, setActive] = useState('home')
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme)

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
    fetch(STARS_REPO)
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.stargazers_count === 'number') setStars(String(d.stargazers_count))
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
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

          <div className="nav-links">
            {LINKS.map(({ id, label, Icon }) => (
              <a key={id} href={`#${id}`} className={`nav-link${active === id ? ' on' : ''}`}>
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="nav-ctrls">
            <a className="nav-btn" href={GITHUB_USER} target="_blank" rel="noopener" title="GitHub">
              <GithubMark size={20} />
              <b>
                <span className="star">★</span> <span>{stars}</span>
              </b>
            </a>
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
              className="nav-btn"
              onClick={onOpenTerm}
              title="Terminal mode"
              style={{ color: 'var(--muted)' }}
            >
              <TerminalIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
