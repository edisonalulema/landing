import { Link } from 'react-router-dom'
import { 
  Smartphone, 
  Code, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  Download
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Comprehensive Problem Library",
      description: "Access thousands of carefully curated coding problems covering algorithms, data structures, and system design."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalized Learning Paths",
      description: "AI-powered recommendations based on your skill level and target companies."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and performance insights."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community & Mentorship",
      description: "Connect with other developers and get guidance from industry experts."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Interview Simulations",
      description: "Practice with realistic interview scenarios and get instant feedback."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Practice anywhere, anytime with our optimized mobile experience."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>
            Transform Your Interview Prep Into
            <br />
            <span>Success</span>
          </h1>
          <p>
            Build, practice, and master your software engineering interviews with Algopop's powerful mobile platform. Join thousands of developers who trust us to land their dream jobs.
          </p>
          <div className="btns">
            <Link to="/download" className="btn-primary">Get Started</Link>
            <a href="#demo" className="btn-secondary">Watch Demo</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Algopop?</h2>
            <p className="section-subtitle">
              Everything you need to succeed in software engineering interviews, 
              all in one mobile app.
            </p>
          </div>
          
          <div style={{padding: '0 50px'}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div style={{margin: '10px'}} key={index} className="card">
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Ace Your Interview?</h2>
        <p>Join thousands of developers who have successfully landed their dream jobs.</p>
        <Link to="/download" className="btn-primary">Get Started Today</Link>
      </section>
    </div>
  )
}

export default Home 