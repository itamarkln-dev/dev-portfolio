import { Github, Linkedin } from 'lucide-react'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ContactButton from './components/ui/ContactButton'

const GITHUB_URL = 'https://github.com/itamarkln-dev'
const LINKEDIN_URL = 'https://www.linkedin.com/in/itamar-klein-8b56971a1/'

function App() {
  return (
    <main style={{ overflowX: 'clip', background: '#0C0C0C' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      <footer
        id="contact"
        className="bg-[#0C0C0C] px-6 md:px-10 py-20 sm:py-24 flex flex-col items-center gap-8 text-center"
      >
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          Let&apos;s talk
        </h2>
        <ContactButton />
        <div className="flex items-center gap-8">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm transition-opacity duration-200 hover:opacity-70"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-[#D7E2EA] uppercase tracking-widest text-sm transition-opacity duration-200 hover:opacity-70"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
        <p className="text-[#D7E2EA]/40 text-xs tracking-wide">
          © {new Date().getFullYear()} Itamar Klein
        </p>
      </footer>
    </main>
  )
}

export default App
