import { Users, Target, Award, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our product quality to user experience."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We believe in the power of community and fostering connections between developers."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously innovate to provide the best learning experience for our users."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Empathy",
      description: "We understand the challenges of tech interviews and design solutions with empathy."
    }
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Google engineer with 8+ years of experience in software engineering and product development."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Microsoft architect with expertise in AI/ML and scalable systems. Led teams at multiple tech companies."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Education",
      bio: "PhD in Computer Science from Stanford. Former professor and curriculum designer for coding bootcamps."
    },
    {
      name: "Alex Kim",
      role: "Head of Product",
      bio: "Product leader with experience at Facebook and Airbnb. Passionate about user-centered design."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title">About Algopop</h1>
            <p className="section-subtitle">
              We're on a mission to democratize access to software engineering education 
              and help developers land their dream jobs through innovative mobile learning.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{padding: '0 100px'}} className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-text-secondary mb-6">
                Algopop was born from a simple observation: the traditional way of preparing 
                for software engineering interviews was broken. Expensive courses, outdated 
                materials, and limited accessibility were preventing talented developers from 
                reaching their full potential.
              </p>
              <p className="text-lg text-text-secondary mb-6">
                Our founders, having gone through the grueling interview process themselves, 
                decided to create a solution that would make interview preparation accessible, 
                effective, and enjoyable. We built Algopop as a mobile-first platform that 
                combines cutting-edge AI technology with proven learning methodologies.
              </p>
              <p className="text-lg text-text-secondary">
                Today, we're proud to have helped thousands of developers land jobs at 
                top tech companies, and we're just getting started.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Users Helped</span>
                  <span className="font-bold">10,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Companies Reached</span>
                  <span className="font-bold">500+</span>
                </div>
                <div className="flex justify-between">
                  <span>Problems Solved</span>
                  <span className="font-bold">2M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{padding: '0 100px'}} className="section bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at Algopop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div style={{margin: '10px'}} key={index} className="card text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The passionate individuals behind Algopop's mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-text-secondary text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto">
            To democratize access to software engineering education and help every developer 
            reach their full potential, regardless of their background or resources.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About 