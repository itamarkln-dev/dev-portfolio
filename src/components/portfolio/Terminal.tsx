import { useEffect, useRef, useState } from 'react'

const PROMPT = 'itamar@portfolio:~$'

function escapeHtml(s: string) {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] as string)
}

const CMDS: Record<string, () => string> = {
  help: () =>
    'Available commands:\n  <span class="accent">about</span>      who I am\n  <span class="accent">skills</span>     tech stack\n  <span class="accent">projects</span>   selected work\n  <span class="accent">experience</span> career timeline\n  <span class="accent">contact</span>    how to reach me\n  <span class="accent">socials</span>    links\n  <span class="accent">neofetch</span>   system info\n  <span class="accent">clear</span>      clear screen\n  <span class="accent">gui</span>        exit to the visual site',
  about: () =>
    'Senior software engineer who builds the whole picture — clean,\ndependable systems, end to end. I turn hard problems into\nscalable, production-ready products. Clean, modular, built to last.',
  skills: () =>
    'languages   : TypeScript, JavaScript, Python, Go\nframeworks  : React, Next.js, Node.js, Tailwind\ndata        : PostgreSQL, MongoDB, Redis, GraphQL\nplatform    : Docker, AWS, Git, Linux',
  projects: () =>
    '01 Real-time Data Platform   <span class="muted">react · websockets · node</span>\n02 Developer Toolkit         <span class="muted">go · cli · oss</span>\n03 AI Review Assistant       <span class="muted">python · llm · apis</span>\n04 Privacy-first Finance App <span class="muted">next.js · sqlite · pwa</span>\ntype <span class="accent">gui</span> to view them visually.',
  experience: () =>
    '2024 — now   Senior Software Engineer\n2021 — 2024  Full-Stack Developer\n2019 — 2021  Software Engineer',
  contact: () =>
    'email   : itamar.klein@example.com\ngithub  : github.com/itamarkln-dev\nlinkedin: /in/itamar-klein',
  socials: () => 'github.com/itamarkln-dev\nlinkedin.com/in/itamar-klein\nx.com/itamar',
  neofetch: () =>
    '<span class="accent">itamar@portfolio</span>\n-----------------\n<span class="accent">OS</span>: PortfolioOS\n<span class="accent">Role</span>: Senior Software Engineer\n<span class="accent">Stack</span>: TS · React · Node · Cloud\n<span class="accent">Uptime</span>: 5+ years\n<span class="accent">Status</span>: open to work',
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
    if (open) setTimeout(() => inputRef.current?.focus(), 60)
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
        <span className="exit" onClick={onClose}>
          exit GUI ✕
        </span>
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
