import FadeIn from './ui/FadeIn'

type Service = { num: string; name: string; desc: string }

const SERVICES: Service[] = [
  {
    num: '01',
    name: 'Backend Engineering',
    desc: 'Designing and building reliable server-side systems, data models, and services that stay fast and correct as load and complexity grow.',
  },
  {
    num: '02',
    name: 'API Design',
    desc: 'Crafting clean, well-documented REST and event-driven APIs that are a pleasure to integrate with and built to evolve without breaking consumers.',
  },
  {
    num: '03',
    name: 'Cloud & DevOps',
    desc: 'Shipping to the cloud with confidence — containers, CI/CD pipelines, observability, and infrastructure that is reproducible and easy to operate.',
  },
  {
    num: '04',
    name: 'System Architecture',
    desc: 'Turning ambiguous requirements into clear, modular architectures: sensible boundaries, honest trade-offs, and decisions that hold up over time.',
  },
  {
    num: '05',
    name: 'Full-Stack Delivery',
    desc: 'Owning features end to end, from database to polished UI, with attention to performance, accessibility, and developer experience.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="stack"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Expertise
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-start gap-5 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(12, 12, 12, 0.15)',
              ...(i === SERVICES.length - 1
                ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                : {}),
            }}
          >
            <span
              className="text-[#0C0C0C] font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>
            <div className="flex flex-col gap-3 pt-1 sm:pt-2">
              <h3
                className="text-[#0C0C0C] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
