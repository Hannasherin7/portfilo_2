import { useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../portfolioData'

const introGreetings = ['Hello', 'Bonjour', 'Hola', 'Namaste', 'Ciao', 'Hallo']
const introBurstOffsets = [
  { x: -52, y: 18, rotate: -18 },
  { x: -28, y: -26, rotate: -10 },
  { x: 0, y: 20, rotate: 0 },
  { x: 30, y: -24, rotate: 12 },
  { x: 56, y: 14, rotate: 20 },
  { x: 76, y: -10, rotate: 26 },
  { x: 96, y: 18, rotate: 32 },
  { x: 118, y: -18, rotate: 38 },
]

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
  const [introPhase, setIntroPhase] = useState('smile')
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const greetingPhaseTimer = window.setTimeout(() => {
      setGreetingIndex(0)
      setIntroPhase('greeting')
    }, 2200)

    const burstPhaseTimer = window.setTimeout(() => {
      setGreetingIndex(0)
      setIntroPhase('burst')
    }, 3750)

    const timer = window.setTimeout(() => {
      setIntroDone(true)
    }, 4550)

    return () => {
      window.clearTimeout(greetingPhaseTimer)
      window.clearTimeout(burstPhaseTimer)
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (introPhase !== 'greeting') {
      return undefined
    }

    const greetingCycleTimer = window.setInterval(() => {
      setGreetingIndex((current) => (current + 1) % introGreetings.length)
    }, 240)

    return () => {
      window.clearInterval(greetingCycleTimer)
    }
  }, [introPhase])

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

  const currentGreeting = introGreetings[greetingIndex]
  const greetingLetters = currentGreeting.split('')

  return (
    <div className={`site-shell${introDone ? ' intro-done' : ''}${isHome ? ' site-shell-home' : ''}`}>
      <div className={`site-intro${introDone ? ' is-leaving' : ''}`} aria-hidden="true">
        <div className="site-intro-core">
          <div className={`intro-stage intro-stage-${introPhase}`}>
            <div className="intro-greeting-stack">
              <p className="intro-greeting-current" aria-label={currentGreeting}>
                {greetingLetters.map((letter, index) => {
                  const burstOffset = introBurstOffsets[index] ?? introBurstOffsets[introBurstOffsets.length - 1]

                  return (
                  <span
                    key={`${currentGreeting}-${index}-${letter === ' ' ? 'space' : letter}`}
                    className="intro-greeting-letter"
                    style={{
                      '--intro-letter-index': index,
                      '--intro-burst-x': `${burstOffset.x}px`,
                      '--intro-burst-y': `${burstOffset.y}px`,
                      '--intro-burst-rotate': `${burstOffset.rotate}deg`,
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                  )
                })}
              </p>
            </div>

            <div className="intro-smiley" role="presentation">
              <svg viewBox="0 0 220 220" className="intro-smiley-svg" aria-hidden="true">
                <defs>
                  <path id="intro-smiley-arc-top" d="M 34 110 A 76 76 0 0 1 186 110" />
                  <path id="intro-smiley-arc-bottom" d="M 186 110 A 76 76 0 0 1 34 110" />
                </defs>
                <text className="intro-smiley-copy intro-smiley-copy-top">
                  <textPath href="#intro-smiley-arc-top" startOffset="50%" textAnchor="middle">
                    {`${profile.shortName.toUpperCase()}  PORTFOLIO`}
                  </textPath>
                </text>
                <text className="intro-smiley-copy intro-smiley-copy-bottom">
                  <textPath href="#intro-smiley-arc-bottom" startOffset="50%" textAnchor="middle">
                    SOFTWARE DEVELOPER
                  </textPath>
                </text>
                <circle cx="84" cy="98" r="7.5" className="intro-smiley-eye" />
                <circle cx="136" cy="98" r="7.5" className="intro-smiley-eye" />
                <path d="M92 124H101V133C101 139 105 143 110 143C115 143 119 139 119 133V124H128V133C128 144 120 152 110 152C100 152 92 144 92 133V124Z" className="intro-smiley-mouth" />
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
