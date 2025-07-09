import { 
  Users, 
  Heart, 
  Zap, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign,
  Send
} from 'lucide-react'

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Flexible Work",
      description: "Remote-first culture with flexible hours and unlimited PTO."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and mentorship programs."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Great Team",
      description: "Work with passionate, talented individuals who care about education and technology."
    }
  ]

  const openPositions = [
    {
      title: "Senior Mobile Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $180k",
      description: "Lead the development of our iOS and Android apps, working with React Native and native technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130k - $200k",
      description: "Drive product strategy and execution for our mobile learning platform."
    },
    {
      title: "Content Creator",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "Create high-quality coding problems, solutions, and educational content."
    },
    {
      title: "Data Scientist",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $160k",
      description: "Build AI/ML models to personalize learning experiences and improve user outcomes."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $140k",
      description: "Design intuitive and engaging user experiences for our mobile learning platform."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$85k - $130k",
      description: "Develop and execute marketing strategies to grow our user base and brand awareness."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title">Join Our Team</h1>
            <p className="section-subtitle">
              Help us democratize software engineering education and empower developers 
              worldwide to achieve their career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Work at Algopop?</h2>
              <p className="text-lg text-text-secondary mb-6">
                We're building the future of software engineering education. Our mission 
                is to make high-quality interview preparation accessible to every developer, 
                regardless of their background or resources.
              </p>
              <p className="text-lg text-text-secondary mb-6">
                As a fast-growing edtech startup, we offer the opportunity to work on 
                meaningful problems that impact thousands of developers' careers. You'll 
                be part of a passionate team that values innovation, learning, and making 
                a real difference in people's lives.
              </p>
              <p className="text-lg text-text-secondary">
                We believe in creating an inclusive, supportive environment where everyone 
                can thrive and grow both personally and professionally.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Empowering developers through education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Innovation in learning technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Inclusive and diverse workplace</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Continuous learning and growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Benefits & Perks</h2>
            <p className="section-subtitle">
              We take care of our team with comprehensive benefits and a great work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Join our mission to revolutionize software engineering education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <p className="text-primary font-medium">{position.department}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-text-secondary text-sm">{position.salary}</p>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">{position.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Clock className="h-4 w-4" />
                    <span>{position.type}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <DollarSign className="h-4 w-4" />
                    <span>{position.salary}</span>
                  </div>
                </div>
                
                <button className="btn btn-primary w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Culture</h2>
            <p className="section-subtitle">
              We believe in fostering a culture of learning, collaboration, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
              <p className="text-text-secondary">
                We work together as a team, sharing knowledge and supporting each other's growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative</h3>
              <p className="text-text-secondary">
                We encourage creative thinking and experimentation to solve complex problems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-text-secondary">
                We strive for excellence in everything we do, from product quality to user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl mb-8 text-white/90">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let's start a conversation.
          </p>
          <button className="btn btn-secondary btn-large">
            <Send className="h-5 w-5 mr-2" />
            Send General Application
          </button>
        </div>
      </section>
    </div>
  )
}

export default Careers 