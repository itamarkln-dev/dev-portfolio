import { ArrowUpRight } from 'lucide-react'

type ViewProjectButtonProps = {
  className?: string
  href?: string
}

/** Ghost/outline pill used on project cards. */
export default function ViewProjectButton({
  className = '',
  href = '#',
}: ViewProjectButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`}
    >
      View Project
      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
    </a>
  )
}
