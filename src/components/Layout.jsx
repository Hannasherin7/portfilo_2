import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../portfolioData'

const introGreetings = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ciao', 'Hallo']

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

function Layout() {
  const location = useLocation()
  const [introDone, setIntroDone] = useState(false)
  const [introPhase, setIntroPhase] = useState('greeting')
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const greetingTimer = window.setInterval(() => {
      setGreetingIndex((current) => (current + 1) % introGreetings.length)
    }, 240)

    const smileTimer = window.setTimeout(() => {
      setIntroPhase('smile')
    }, 1700)

    const infoTimer = window.setTimeout(() => {
      setIntroPhase('info')
    }, 2550)

    const timer = window.setTimeout(() => {
      setIntroDone(true)
    }, 3600)

    return () => {
      window.clearInterval(greetingTimer)
      window.clearTimeout(smileTimer)
      window.clearTimeout(infoTimer)
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  return (
    <div className={`site-shell${introDone ? ' intro-done' : ''}${isHome ? ' site-shell-home' : ''}`}>
      <div className={`site-intro${introDone ? ' is-leaving' : ''}`} aria-hidden="true">
        <div className="site-intro-core">
          <div className={`intro-stage intro-stage-${introPhase}`}>
            <div className="intro-greeting-stack">
              <p className="intro-greeting-current">{introGreetings[greetingIndex]}</p>
            </div>

            <div className="intro-smiley" role="presentation">
              <svg viewBox="0 0 220 220" className="intro-smiley-svg" aria-hidden="true">
                <circle cx="110" cy="110" r="82" pathLength="100" className="intro-smiley-ring" />
                <circle cx="84" cy="95" r="4.5" className="intro-smiley-eye" />
                <circle cx="136" cy="95" r="4.5" className="intro-smiley-eye" />
                <path d="M82 130C92 142 102 147 110 147C118 147 128 142 138 130" className="intro-smiley-mouth" />
              </svg>
            </div>

            <div className="intro-name-lockup">
              <h2>{profile.shortName}</h2>
              <p className="intro-text">Software developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-orb orb-one" aria-hidden="true" />
      <div className="floating-orb orb-two" aria-hidden="true" />
      <div className="floating-orb orb-three" aria-hidden="true" />
      <div className="floating-orb orb-four" aria-hidden="true" />
      <div className="floating-grid" aria-hidden="true" />
      <div className="floating-grid secondary-grid" aria-hidden="true" />
      <div className="floating-line line-one" aria-hidden="true" />
      <div className="floating-line line-two" aria-hidden="true" />
      <div className="floating-dots" aria-hidden="true" />

      <header className={`topbar${isHome ? ' topbar-home' : ''}${isScrolled ? ' is-scrolled' : ''}`}>
        <NavLink className="brand" to="/">
          {profile.name}
        </NavLink>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to={item.href}
              end={item.href === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <div key={location.pathname} className="page-stage">
        <Outlet />
      </div>

      <footer className="footer footer-shared">
        <div className="footer-shared-grid">
          <div>
            <p className="footer-label">Contact</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          </div>

          <div>
            <p className="footer-label">Location</p>
            <p>{profile.location}</p>
            <p>Open to software roles and collaborative product work.</p>
          </div>

          <div>
            <p className="footer-label">Socials</p>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
