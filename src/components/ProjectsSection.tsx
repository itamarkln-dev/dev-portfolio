import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import ViewProjectButton from './ui/ViewProjectButton'
import { PROJECTS, type Project } from '../data/projects'

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'
const TOP_RADIUS = 'rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]'

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  // Cards stack and shrink as later cards scroll over them.
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div
      className="h-[85vh] flex items-start justify-center sticky"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className={`w-full border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        {/* Top row: number, label, name, CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5 sm:mb-7 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.num}
            </span>
            <div>
              <p className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </p>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <ViewProjectButton href={project.href} />
        </div>

        {/* Bottom row: 40/60 image grid */}
        <div className="flex gap-3 sm:gap-4">
          <div className="w-2/5 flex flex-col gap-3 sm:gap-4">
            <img
              src={project.col1[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className={`w-full object-cover ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-3/5">
            <img
              src={project.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`w-full h-full object-cover ${RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="work"
      className={`relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-20 ${TOP_RADIUS}`}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Work
      </h2>

      <div ref={containerRef}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
