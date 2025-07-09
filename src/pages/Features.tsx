import { 
  Code, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Smartphone,
  Zap,
  BookOpen,
  MessageSquare,
  BarChart3,
  Download
} from 'lucide-react'

const Features = () => {
  const mainFeatures = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Comprehensive Problem Library",
      description: "Access over 500 carefully curated coding problems covering algorithms, data structures, system design, and behavioral questions.",
      details: [
        "Problems from top tech companies",
        "Multiple difficulty levels",
        "Detailed solutions and explanations",
        "Regular updates with new problems"
      ]
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "AI-Powered Learning Paths",
      description: "Get personalized recommendations based on your skill level, target companies, and learning goals.",
      details: [
        "Adaptive difficulty adjustment",
        "Company-specific preparation",
        "Skill gap analysis",
        "Progress-based recommendations"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Advanced Analytics",
      description: "Track your progress with detailed analytics, performance insights, and improvement recommendations.",
      details: [
        "Performance tracking over time",
        "Strength and weakness analysis",
        "Comparison with peers",
        "Detailed progress reports"
      ]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Community & Mentorship",
      description: "Connect with other developers, share solutions, and get guidance from industry experts.",
      details: [
        "Discussion forums",
        "Expert mentorship sessions",
        "Peer study groups",
        "Code review system"
      ]
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Interview Simulations",
      description: "Practice with realistic interview scenarios that mimic actual tech company interviews.",
      details: [
        "Timed coding challenges",
        "System design interviews",
        "Behavioral question practice",
        "Real-time feedback"
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile-First Experience",
      description: "Practice anywhere, anytime with our optimized mobile experience designed for on-the-go learning.",
      details: [
        "Offline mode support",
        "Touch-optimized interface",
        "Quick problem access",
        "Seamless sync across devices"
      ]
    }
  ]

  const additionalFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quick Practice Mode",
      description: "Solve problems in 5-15 minute sessions perfect for busy schedules."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning Resources",
      description: "Access to comprehensive study materials, cheat sheets, and concept explanations."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Real-time Feedback",
      description: "Get instant feedback on your solutions with detailed explanations and optimization tips."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Performance Insights",
      description: "Understand your strengths and areas for improvement with detailed analytics."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title">App Features</h1>
            <p className="section-subtitle">
              Everything you need to ace your software engineering interviews, 
              all packed into one powerful mobile app.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-text-secondary mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl ${
                  index % 2 === 1 ? 'lg:col-start-1' : ''
                }`}>
                  <div className="w-full h-64 bg-white/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <p className="text-text-secondary font-medium">Feature Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">More Great Features</h2>
            <p className="section-subtitle">
              Additional tools and features to enhance your learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">See It in Action</h2>
            <p className="section-subtitle">
              Take a look at how Algopop makes interview preparation easy and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-64 h-96 bg-gradient-to-br from-primary to-secondary rounded-3xl mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
              <p className="text-text-secondary">Clean, intuitive interface for coding challenges</p>
            </div>
            <div className="text-center">
              <div className="w-64 h-96 bg-gradient-to-br from-secondary to-accent rounded-3xl mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-text-secondary">Visual analytics and performance insights</p>
            </div>
            <div className="text-center">
              <div className="w-64 h-96 bg-gradient-to-br from-accent to-primary rounded-3xl mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-text-secondary">Connect with peers and mentors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Download Algopop today and start your journey to interview success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn btn-secondary btn-large">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </a>
            <a href="#" className="btn btn-secondary btn-large">
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features 