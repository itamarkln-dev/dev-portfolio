import { useEffect, useState } from 'react'
import { GithubMark, LogoCode, TerminalIcon } from './icons'

const GITHUB_USER = 'https://github.com/itamarkln-dev'
const STARS_REPO = 'https://api.github.com/repos/itamarkln-dev/itamarkln-dev'

export default function Navbar({ onOpenTerm }: { onOpenTerm: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [stars, setStars] = useState('·')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
          <div className="nav-ctrls">
            <a className="nav-btn" href={GITHUB_USER} target="_blank" rel="noopener" title="GitHub">
              <GithubMark size={20} />
              <b>
                <span className="star">★</span> <span>{stars}</span>
              </b>
            </a>
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
