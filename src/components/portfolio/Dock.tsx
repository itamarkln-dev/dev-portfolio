import { useEffect, useState } from 'react'
import { ChatIcon, GridIcon, HomeIcon, LayersIcon, UserIcon } from './icons'

const ITEMS = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'about', label: 'About', Icon: UserIcon },
  { id: 'projects', label: 'Work', Icon: GridIcon },
  { id: 'skills', label: 'Skills', Icon: LayersIcon },
  { id: 'contact', label: 'Contact', Icon: ChatIcon },
]

export default function Dock() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="dock">
      {ITEMS.map(({ id, label, Icon }) => (
        <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>
          <Icon />
          <span>{label}</span>
        </a>
      ))}
    </div>
  )
}
