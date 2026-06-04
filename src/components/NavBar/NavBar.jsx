import './NavBar.css'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NavBar = () => {
  const navigate  = useNavigate()
  const location  = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  /* ── Scroll: add .scrolled class ── */
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Close menu on route change ── */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Close menu on Escape ── */
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const handleNav = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  const isActive = (path) => location.pathname === path

  const navItems = [
    { label: 'Home',     path: '/'        },
    { label: 'Projects', path: '/projects' },
    { label: 'Models',   path: '/models'   },
    { label: 'About',    path: '/about'    },
  ]

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img
          src="/Logo.jpg"
          alt="TechnaDiligens Logo"
          onClick={() => handleNav('/')}
        />
      </div>

      {/* Nav links */}
      <ul className={`nav-links-container ${menuOpen ? 'menu-open' : ''}`}>
        {navItems.map(({ label, path }) => (
          <li key={path}>
            <button
              className={`nav-link ${isActive(path) ? 'active-link' : ''}`}
              onClick={() => handleNav(path)}
            >
              {label}
            </button>
          </li>
        ))}

        {/* CTA inside mobile overlay */}
        <li>
          <button className="nav-btn-mobile" onClick={() => handleNav('/contact')}>
            Contact
          </button>
        </li>
      </ul>

      {/* Desktop CTA */}
      <button className="nav-btn" onClick={() => handleNav('/contact')}>
        Contact
      </button>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

    </nav>
  )
}

export default NavBar