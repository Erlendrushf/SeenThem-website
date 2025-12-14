import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '🏆',
      title: 'Earn Badges & Climb Leaderboards',
      description: 'Compete with other fans, challenge your friends, and earn badges for your concert attendances.',
      comingSoon: false
    },
    {
      icon: '📊',
      title: 'Data Insights',
      description: 'Get detailed stats on your concerts and festivals, plus personalized recommendations based on your music taste.',
      comingSoon: false
    },
    {
      icon: '👥',
      title: 'Social Features',
      description: 'Connect with friends, share concert experiences, and find new music together.',
      comingSoon: false
    },
    {
      icon: '⭐',
      title: 'Personal History',
      description: 'Build your concert history, rate shows, and relive your favorite music memories.',
      comingSoon: false
    },
    {
      icon: '🎯',
      title: 'Concert Recommendations',
      description: 'Discover shows you\'ll love based on your listening history and concert attendance patterns. Never miss artists you should see.',
      comingSoon: true
    },
    {
      icon: '💎',
      title: 'Premium Features',
      description: 'Unlock advanced analytics, exclusive badges, priority support, and early access to new features.',
      comingSoon: true
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to enhance your concert-going experience
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card ${feature.comingSoon ? 'coming-soon' : ''}`}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.comingSoon && (
                <div className="coming-soon-badge">Coming Soon</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
