import './Hero.css'
import NotifyForm from './NotifyForm'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="coming-soon-badge">
            <span className="badge-pulse"></span>
            Coming Soon to iOS
          </div>
          <h1 className="hero-title">
            Never Forget a <span className="gradient-text">Concert</span> Again
          </h1>
          <p className="hero-subtitle">
            Track every show, compete with friends, and turn your concert memories into stats you'll 
            actually want to share. SeenThem is your personal concert archive.
          </p>
          
          <NotifyForm />
          
          <div className="hero-buttons">
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🎵</span>
              <span>Track Every Show</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Stats & Leaderboards</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <span>Compete With Friends</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
