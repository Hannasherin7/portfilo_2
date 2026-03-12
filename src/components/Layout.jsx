import { NavLink, Outlet } from 'react-router-dom'
import { profile } from '../portfolioData'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
]

function Layout() {
  return (
    <div className="site-shell">
      <div className="floating-orb orb-one" aria-hidden="true" />
      <div className="floating-orb orb-two" aria-hidden="true" />
      <div className="floating-orb orb-three" aria-hidden="true" />
      <div className="floating-orb orb-four" aria-hidden="true" />
      <div className="floating-grid" aria-hidden="true" />
      <div className="floating-grid secondary-grid" aria-hidden="true" />
      <div className="floating-line line-one" aria-hidden="true" />
      <div className="floating-line line-two" aria-hidden="true" />
      <div className="floating-dots" aria-hidden="true" />

      <header className="topbar">
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

      <Outlet />

      <footer className="footer">
        <p>{profile.name}</p>
        <p>{profile.email}</p>
        <p>Built with React and Vite.</p>
      </footer>
    </div>
  )
}

export default Layout
