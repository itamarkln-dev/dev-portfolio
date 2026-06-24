import { useEffect, useRef, useState } from 'react'
import { SITE } from '../../config'

const PROMPT = 'itamar@portfolio:~$'

function escapeHtml(s: string) {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string)
}

// strip protocol + trailing slash for compact terminal display
const short = (url = '') => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

const CMDS: Record<string, () => string> = {
  help: () =>
    'Available commands:\n  <span class="accent">about</span>      who I am\n  <span class="accent">skills</span>     tech stack\n  <span class="accent">projects</span>   what I\'m building\n  <span class="accent">contact</span>    how to reach me\n  <span class="accent">clear</span>      clear screen\n  <span class="accent">gui</span>        exit to the visual site',
  about: () =>
    'Senior software engineer building clean, reliable software\nend to end. I lead backend infrastructure and API design,\nand ship AI-driven fintech products. Easy to work with,\nhonest about scope, and dependable from first sketch to launch.',
  skills: () =>
    'languages : TypeScript, JavaScript, HTML/CSS, Sass\nfrontend  : Vue, Nuxt, React, Angular, Tailwind, Vite\nbackend   : Node.js, NestJS, Express, REST, GraphQL, WebSockets\ndata      : PostgreSQL, TypeORM, MongoDB, Redis\nplatform  : Docker, Kubernetes, Linux, Nginx, CI/CD, Git',
  projects: () =>
    'Most of my work lives in private, production codebases,\nso there\'s not much to show publicly — yet.',
  contact: () =>
    `email    : <span class="accent">${SITE.email}</span>\ngithub   : ${short(SITE.githubUrl)}\nlinkedin : ${short(SITE.linkedinUrl)}`,
  whoami: () => 'itamar-klein',
}

const BOOT_LINES = [
  '<span class="accent">Itamar Klein</span> — Senior Software Engineer',
  '<span class="muted">Welcome to the terminal. Type <span class="accent">help</span> to see commands, or <span class="accent">gui</span> to go back.</span>',
  '&nbsp;',
]

export default function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [value, setValue] = useState('')
  const [booted, setBooted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && !booted) {
      setLines(BOOT_LINES)
      setBooted(true)
    }
    // Only auto-focus on desktop (fine pointer). On touch devices this would
    // pop the on-screen keyboard, whose dismissal makes "exit" feel laggy.
    if (open && window.matchMedia('(pointer: fine)').matches) {
      setTimeout(() => inputRef.current?.focus(), 60)
    }
  }, [open, booted])

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  function run(raw: string) {
    const c = raw.toLowerCase().trim()
    const echo = `<span class="pr">${PROMPT}</span> <span class="cmd">${escapeHtml(raw)}</span>`

    if (c === '') {
      setLines((p) => [...p, echo])
      return
    }
    if (c === 'clear') {
      setLines([])
      return
    }
    if (c === 'gui' || c === 'exit') {
      setLines((p) => [...p, echo])
      onClose()
      return
    }
    const out = CMDS[c]
      ? CMDS[c]().replace(/\n/g, '<br>')
      : `<span class="muted">command not found: ${escapeHtml(raw)} — type <span class="accent">help</span></span>`
    setLines((p) => [...p, echo, out, '&nbsp;'])
  }

  return (
    <div className="terminal">
      <div className="term-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="ttl">itamar@portfolio: ~</span>
        <button
          type="button"
          className="exit"
          aria-label="Exit terminal"
          onPointerDown={() => {
            // Hide the overlay synchronously for an instant close, rather than
            // waiting for React's state -> effect -> class-toggle cycle.
            document.body.classList.remove('term')
            inputRef.current?.blur()
            onClose()
          }}
          onClick={onClose}
        >
          exit GUI ✕
        </button>
      </div>
      <div className="term-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
        {lines.map((html, i) => (
          <div key={i} className="ln" dangerouslySetInnerHTML={{ __html: html }} />
        ))}
        <div className="term-line">
          <span className="pr">{PROMPT}</span>
          <input
            ref={inputRef}
            autoComplete="off"
            spellCheck={false}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                run(value)
                setValue('')
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
