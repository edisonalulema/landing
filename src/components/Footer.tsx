import { Link } from 'react-router-dom'
import { Smartphone, Mail, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <Smartphone style={{height: 24, width: 24}} />
            <span style={{fontWeight: 700, fontSize: '1.2rem'}}>Algopop</span>
          </div>
          <p style={{maxWidth: 320, color: 'var(--text-light)', marginBottom: '1rem'}}>
            Master software engineering interviews with our comprehensive mobile app. Practice algorithms, system design, and coding challenges on the go.
          </p>
          <div style={{display: 'flex', gap: '1rem'}}>
            <a href="#" aria-label="Twitter"><Twitter style={{height: 20, width: 20}} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin style={{height: 20, width: 20}} /></a>
            <a href="#" aria-label="GitHub"><Github style={{height: 20, width: 20}} /></a>
          </div>
        </div>
        <div>
          <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Quick Links</h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{fontWeight: 600, marginBottom: '0.5rem'}}>Contact</h4>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)'}}>
            <Mail style={{height: 18, width: 18}} />
            <span>hello@algopop.com</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2024 Algopop. All rights reserved.</div>
        <div>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 