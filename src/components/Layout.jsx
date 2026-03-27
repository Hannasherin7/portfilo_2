import { useEffect, useRef, useState } from 'react'
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
  const auraRef = useRef(null)
  const auraSecondaryRef = useRef(null)
  const [introDone, setIntroDone] = useState(false)
  const [introPhase, setIntroPhase] = useState('greeting')
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const primary = auraRef.current
    const secondary = auraSecondaryRef.current

    if (!primary || !secondary) {
      return undefined
    }

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let currentX = mouseX
    let currentY = mouseY
    let currentSecondaryX = mouseX
    let currentSecondaryY = mouseY
    let frameId = 0

    const interactiveSelector =
      'a, button, .nav-link, .site-editorial-highlights article, .site-editorial-note-list article, .site-editorial-work-row, .site-editorial-project-row, .site-editorial-contact-grid article, .about-editorial-row, .about-editorial-skill-group, .about-editorial-panel, .site-editorial-detail-grid article, .site-editorial-detail-features, .site-editorial-more-link, .site-editorial-resume-frame, .footer-shared-grid > div'

    const render = () => {
      currentX += (mouseX - currentX) * 0.16
      currentY += (mouseY - currentY) * 0.16
      currentSecondaryX += (mouseX - currentSecondaryX) * 0.08
      currentSecondaryY += (mouseY - currentSecondaryY) * 0.08

      primary.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      secondary.style.transform = `translate3d(${currentSecondaryX}px, ${currentSecondaryY}px, 0)`

      frameId = window.requestAnimationFrame(render)
    }

    const handleMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY

      const interactiveTarget = event.target.closest(interactiveSelector)
      document.documentElement.classList.toggle('pointer-hovering', Boolean(interactiveTarget))
    }

    const handleLeave = () => {
      document.documentElement.classList.remove('pointer-hovering')
    }

    frameId = window.requestAnimationFrame(render)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseout', handleLeave)
      document.documentElement.classList.remove('pointer-hovering')
    }
  }, [])

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
      <div ref={auraRef} className="pointer-aura" aria-hidden="true" />
      <div ref={auraSecondaryRef} className="pointer-aura pointer-aura-secondary" aria-hidden="true" />

      <header className={`topbar${isHome ? ' topbar-home' : ''}${isScrolled ? ' is-scrolled' : ''}`}>
        <div className={`nav-shell${menuOpen ? ' is-open' : ''}`}>
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-menu${menuOpen ? ' is-open' : ''}`}>
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
        </div>
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
