import { GithubMark, LinkedinMark, MailIcon, SendIcon } from './icons'
import Typewriter from './Typewriter'

const GITHUB_USER = 'https://github.com/itamarkln-dev'
const GITHUB_REPOS = 'https://github.com/itamarkln-dev?tab=repositories'
const LINKEDIN_URL = 'https://www.linkedin.com/in/itamar-klein-8b56971a1/'

const PROJECTS = [
  {
    n: '01',
    cat: 'web app',
    title: 'Real-time Data Platform',
    desc: 'A live dashboard that turns streaming data into an instant, clear picture — ↓ 80% reporting time.',
    tags: ['React', 'WebSockets', 'Node', 'D3'],
  },
  {
    n: '02',
    cat: 'open source',
    title: 'Developer Toolkit',
    desc: 'A free, zero-config CLI that scaffolds, tests, and deploys apps in minutes — 40+ contributors.',
    tags: ['Go', 'CLI', 'DX'],
  },
  {
    n: '03',
    cat: 'ai / tooling',
    title: 'AI Review Assistant',
    desc: 'Automatically reviews new work for issues and suggests improvements — ~6 hrs/week saved.',
    tags: ['Python', 'LLM', 'APIs'],
  },
  {
    n: '04',
    cat: 'mobile',
    title: 'Privacy-first Finance App',
    desc: 'Helps people understand their spending with clear visuals — local-first, no sign-up, no tracking.',
    tags: ['Next.js', 'SQLite', 'PWA'],
  },
]

const SKILLS = [
  {
    group: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    group: 'Data & Platform',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    ],
  },
]

const EXPERIENCE = [
  {
    dt: '2024 — Present',
    role: 'Senior Software Engineer',
    points: [
      'Lead product and platform work end to end, partnering across design and product.',
      'Drove performance and reliability improvements reaching a large user base.',
      'Mentor engineers and set the standards other teams build on.',
    ],
  },
  {
    dt: '2021 — 2024',
    role: 'Full-Stack Developer',
    points: [
      'Built and ran core services used by millions of people.',
      'Led behind-the-scenes upgrades that made products faster and more dependable.',
    ],
  },
  {
    dt: '2019 — 2021',
    role: 'Software Engineer',
    points: [
      'First engineering hire — shipped a product from zero to thousands of daily users.',
      'Owned features across the entire stack, front to back.',
    ],
  },
]

function Hero() {
  return (
    <header id="home" className="hero">
      <div className="watermark">
        <span>IK</span>
      </div>
      <div className="hero-left">
        <span className="status">
          <span className="ping">
            <i className="a" />
            <i />
          </span>{' '}
          Open for collaboration
        </span>
        <h1 className="name">
          Itamar Klein
          <span className="role">
            <Typewriter
              phrases={[
                'Senior software engineer',
                'Full-stack developer',
                'Building products that last',
              ]}
            />
          </span>
        </h1>
        <p className="desc">
          I turn hard problems into <b>scalable, production-ready products</b> — clean, modular,
          built to last. From first sketch to launch.
        </p>
        <div className="actions">
          <a href="#projects" className="btn btn-white">
            View My Work
          </a>
          <a href="#contact" className="btn btn-blue">
            Let's Talk
            <SendIcon />
          </a>
        </div>
      </div>
      <div className="avatar-wrap">
        <div className="corner tl" />
        <div className="corner br" />
        <div className="avatar-glow" />
        <div className="avatar">
          <img src="https://avatars.githubusercontent.com/u/293653803?v=4" alt="Itamar Klein" />
          <div className="ov" />
        </div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="block wrap">
      <div className="shead reveal">
        <div className="kick">About</div>
        <h2 className="title">Who I am.</h2>
      </div>
      <div className="about">
        <div className="reveal">
          <p>
            I'm a <b>senior software engineer</b> who enjoys building the whole picture — the
            foundations underneath, the logic in the middle, and the interface people actually touch.
          </p>
          <p>
            I build software that's <b>clean, reliable, and made to last</b>, and I own it end to
            end — from system design down to the details users actually feel. I move fast without
            cutting corners, and I deliver code that's easy to trust, extend, and scale as a product
            grows.
          </p>
          <p>
            I'm also genuinely easy to work with: <b>clear communication, honest scoping, and
            dependable delivery</b>. I stay calm under pressure, keep you in the loop at every step,
            and turn an idea or a rough brief into a product that ships — and keeps working long
            after launch.
          </p>
        </div>
        <div className="facts reveal">
          <div className="r">
            <span className="k">Role</span>
            <span className="v">Senior Software Engineer</span>
          </div>
          <div className="r">
            <span className="k">Focus</span>
            <span className="v">Full-stack</span>
          </div>
          <div className="r">
            <span className="k">Experience</span>
            <span className="v">8+ years</span>
          </div>
          <div className="r">
            <span className="k">Status</span>
            <span className="v ok">
              <span className="ping">
                <i className="a" />
                <i />
              </span>
              Open to collaborate
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="block wrap">
      <div className="shead reveal">
        <div className="kick">Portfolio</div>
        <h2 className="title">Selected works.</h2>
        <p className="sub">
          A curated selection of projects that made me confident building software.
        </p>
      </div>
      <div className="pgrid">
        {PROJECTS.map((p) => (
          <div key={p.n} className="pcard reveal">
            <span className="pn">{p.n}</span>
            <span className="cat">{p.cat}</span>
            <h3>
              {p.title} <a href="#">↗</a>
            </h3>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a className="allbtn reveal" href={GITHUB_REPOS} target="_blank" rel="noopener">
        Explore all on GitHub ↗
      </a>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="block wrap">
      <div className="shead reveal">
        <div className="kick">Tech Stack</div>
        <h2 className="title">Skills.</h2>
      </div>
      <div className="reveal">
        {SKILLS.map((g) => (
          <div key={g.group} className="skg">
            <h4>{g.group}</h4>
            <div className="skrow">
              {g.items.map((s) => (
                <span key={s.name} className="sk">
                  <img src={s.icon} alt="" />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="block wrap">
      <div className="shead reveal">
        <div className="kick">Experience</div>
        <h2 className="title">My journey.</h2>
      </div>
      <div className="reveal">
        {EXPERIENCE.map((x) => (
          <div key={x.dt} className="xp-item">
            <div className="dt">{x.dt}</div>
            <h3>{x.role}</h3>
            <ul>
              {x.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="block wrap">
      <div className="shead reveal" style={{ textAlign: 'center' }}>
        <div className="kick" style={{ justifyContent: 'center' }}>
          Contact
        </div>
        <h2 className="title">Let's build together.</h2>
      </div>
      <div className="reveal" style={{ textAlign: 'center' }}>
        <p className="sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          I'm always up for interesting challenges and good people to build with. Tell me what
          you're working on — I usually reply within a day or two.
        </p>
        <div className="csoc" style={{ justifyContent: 'center', marginTop: '28px' }}>
          <a href={GITHUB_USER} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
            <GithubMark />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinMark />
          </a>
          <a href="mailto:itamarkln.dev@gmail.com" aria-label="Gmail" title="Gmail">
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="wrap">
      <span>© 2026 Itamar Klein</span>
      <span>built with care</span>
    </footer>
  )
}

export default function Sections() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}
