import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const navItems = [
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ]
  return (
    <nav>
      <div style={{maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', padding: '0 2rem'}}>
        {/* Logo */}
        <Link to="/" className="logo">Algopop</Link>
        {/* Nav Links */}
        <div style={{display: 'flex', alignItems: 'center'}}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{marginLeft: '2rem', fontWeight: 500, color: location.pathname === item.path ? 'var(--primary)' : 'var(--text-primary)'}}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/download"
            className="cta"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 