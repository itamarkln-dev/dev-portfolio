import { GithubMark, LinkedinMark, MailIcon, SendIcon } from './icons'
import Typewriter from './Typewriter'

import { SITE } from '../../config'

type Project = { n: string; cat: string; title: string; desc: string; tags: string[] }

// No public projects to show yet — repopulate this array to bring the project
// cards back automatically. Shape:
//   { n: '01', cat: 'web app', title: '…', desc: '…', tags: ['React', 'Node'] }
const PROJECTS: Project[] = []

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const SKILLS: { group: string; items: { name: string; icon?: string }[] }[] = [
  {
    group: 'Languages & Frontend',
    items: [
      { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
      { name: 'Sass', icon: `${DEVICON}/sass/sass-original.svg` },
      { name: 'Vue.js', icon: `${DEVICON}/vuejs/vuejs-original.svg` },
      { name: 'Nuxt.js', icon: `${DEVICON}/nuxtjs/nuxtjs-original.svg` },
      { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
      { name: 'Angular', icon: `${DEVICON}/angularjs/angularjs-original.svg` },
      { name: 'Tailwind', icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: 'Vite', icon: `${DEVICON}/vitejs/vitejs-original.svg` },
    ],
  },
  {
    group: 'Backend & Data',
    items: [
      { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'NestJS', icon: `${DEVICON}/nestjs/nestjs-original.svg` },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'GraphQL', icon: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: 'OpenAPI / Swagger', icon: `${DEVICON}/swagger/swagger-original.svg` },
      { name: 'WebSockets' },
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: 'TypeORM' },
      { name: 'Redis', icon: `${DEVICON}/redis/redis-original.svg` },
      { name: 'MongoDB', icon: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    group: 'Architecture & Tools',
    items: [
      { name: 'Microservices' },
      { name: 'WebRTC' },
      { name: 'Streaming Media' },
      { name: 'Docker', icon: `${DEVICON}/docker/docker-original.svg` },
      { name: 'Kubernetes', icon: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
      { name: 'Linux', icon: `${DEVICON}/linux/linux-original.svg` },
      { name: 'Nginx', icon: `${DEVICON}/nginx/nginx-original.svg` },
      { name: 'CI/CD' },
      { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
    ],
  },
]

const EXPERIENCE = [
  {
    dt: '2024 — Present',
    role: 'Senior Software Engineer',
    points: [
      'Build full-stack features for AI-driven fintech products in the Israeli pension and retirement space.',
      'Lead backend infrastructure and API design — owning service architecture, API contracts, and engineering standards across the platform.',
      'Backend in NestJS with PostgreSQL and TypeORM; frontends in Vue, Nuxt, and Tailwind.',
    ],
  },
  {
    dt: '2022 — 2024',
    role: 'Software Team Leader',
    points: [
      'Led a team of ~8 engineers building an on-premise platform for debriefing multimedia and telemetry data.',
      'Designed and implemented a microservice architecture focused on scaling and deployment.',
      'Owned hiring, technical planning, and mentoring.',
    ],
  },
  {
    dt: '2021 — 2022',
    role: 'Technical Lead',
    points: [
      'Tech lead across frontend and backend, driving architecture design and code standards.',
      'Led a system-wide transition to a stateless, horizontally scalable architecture.',
      'Established clean-code practices and owned the codebase from code review to merge.',
    ],
  },
  {
    dt: '2019 — 2021',
    role: 'Software Engineer',
    points: [
      'Designed and built a multimedia streaming application on a microservices, 3-tier architecture.',
      'MEAN stack (MongoDB, Express, Angular, Node/NestJS) with media servers (Wowza, Kurento, Janus).',
      'Streaming over WebRTC, HLS, MPEG-DASH, and RTSP.',
    ],
  },
  {
    dt: '2018 — 2019',
    role: 'Full-Stack Developer',
    points: ['Built web applications with React and Angular (part-time).'],
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
            <span className="v">7+ years</span>
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
          {PROJECTS.length
            ? 'A curated selection of projects that made me confident building software.'
            : 'Public case studies are on the way — here is what to expect.'}
        </p>
      </div>

      {PROJECTS.length ? (
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
      ) : (
        <div className="pcard pbuilding reveal">
          <span className="cat">in progress</span>
          <h3>Public case studies are on the way</h3>
          <p>
            Most of my work lives in private, production codebases. I'm putting together a few
            public projects and write-ups — check back soon, new work is on the way.
          </p>
        </div>
      )}

      {PROJECTS.length > 0 && (
        <a className="allbtn reveal" href={SITE.githubReposUrl} target="_blank" rel="noopener">
          Explore all on GitHub ↗
        </a>
      )}
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
                  {s.icon && <img src={s.icon} alt="" />}
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
          <a href={SITE.githubUrl} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
            <GithubMark />
          </a>
          <a
            href={SITE.linkedinUrl}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinMark />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Gmail" title="Gmail">
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
      <span>© {new Date().getFullYear()} Itamar Klein</span>
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
