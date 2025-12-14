import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Hero Story Section */}
        <div className="about-hero">
          <h2 className="section-title">
            About <span className="gradient-text">SeenThem</span>
          </h2>
          <p className="about-tagline">
            "Oh yeah, I've seen them live!" — but when? Where? With who?
          </p>
          <p className="about-intro">
            Born from a simple frustration—losing track of hundreds of concerts over the years—SeenThem 
            transforms scattered ticket stubs and fading memories into a comprehensive digital archive. 
            Whether you've been to 10 shows or 1,000, we help you preserve every moment, from intimate 
            club gigs to massive festival stages.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mission-vision-grid">
          <div className="mission-card">
            <span className="card-icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              We help music lovers track every concert, compete with friends through stats and leaderboards, 
              and discover new live music together. By combining memory preservation with social gamification, 
              we inspire people to attend more concerts and connect deeper with their music community.
            </p>
          </div>
          <div className="vision-card">
            <span className="card-icon">✨</span>
            <h3>Our Vision</h3>
            <p>
              A world where live music memories are never lost and friendships are strengthened through 
              shared concert experiences. We believe that concerts are more than just entertainment—they're 
              milestone moments that deserve to be remembered, celebrated, and shared.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="values-title">Our Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-emoji">🎵</span>
              <h4>Live Music Is Magic</h4>
              <p>
                Concerts create irreplaceable memories. We exist to capture and celebrate those moments, 
                whether it's your local venue or Europe's biggest festival stages.
              </p>
            </div>
            <div className="value-card">
              <span className="value-emoji">🤝</span>
              <h4>Better Together</h4>
              <p>
                Music connects people. Our leaderboards create friendly competition, but our real goal is 
                bringing friends closer through shared experiences and discovering who else was at that 
                unforgettable show.
              </p>
            </div>
            <div className="value-card">
              <span className="value-emoji">⚡</span>
              <h4>Effortlessly Simple</h4>
              <p>
                Concert tracking should take 30 seconds, not 30 minutes. We make logging shows so easy 
                you'll never skip recording a memory. Focus on the music, not the admin work.
              </p>
            </div>
            <div className="value-card">
              <span className="value-emoji">🏆</span>
              <h4>Celebrate Progress</h4>
              <p>
                Whether you've been to 5 shows or 500, every concert counts. We celebrate the journey, 
                not just the destination. Your first club show matters as much as your 100th festival.
              </p>
            </div>
            <div className="value-card">
              <span className="value-emoji">📊</span>
              <h4>Your Data, Your Story</h4>
              <p>
                You own your concert history completely. Share it proudly, export it anytime, or keep it 
                private—you decide. No lock-in, no strings attached.
              </p>
            </div>
            <div className="value-card">
              <span className="value-emoji">🌍</span>
              <h4>Built by Concert-Goers</h4>
              <p>
                We're music lovers first, developers second. Every feature is built to solve real problems 
                we've experienced at shows, festivals, and venues across the world.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <h3 className="story-title">Made by Fans, For Fans</h3>
          <p className="story-intro">
            Created by <strong>Erlend</strong>, a Norwegian developer who attended 200+ shows at festivals 
            like <strong>Wacken Open Air</strong> and <strong>Tons of Rock</strong>—but couldn't remember 
            half of them. After years of losing track, he built the solution he wished existed.
          </p>
          <p className="story-tagline">
            We're music lovers first, developers second. Every feature is tested at real shows.
          </p>
        </div>

        {/* Why SeenThem Section */}
        <div className="why-section">
          <h3 className="why-title">Why "SeenThem"?</h3>
          <div className="why-content">
            <p className="why-text">
              The name captures that quintessential music lover's moment:
            </p>
            <div className="conversation-box">
              <div className="conversation-line">
                <span className="speaker">Friend:</span> "Have you heard of [band]?"
              </div>
              <div className="conversation-line you">
                <span className="speaker">You:</span> "Yeah! I've seen them live!"
              </div>
              <div className="conversation-line uncertain">
                But then... when did I see them? Was it once or twice? Which venue?
              </div>
            </div>
            <p className="why-text">
              SeenThem turns that vague <em>"I've seen them"</em> into a confident answer: 
              <strong> "Yes, I've seen them three times—Rockefeller in 2019, Tons of Rock 2022, 
              and that amazing Sentrum Scene show last year."</strong>
            </p>
          </div>
        </div>

        {/* Differentiators */}
        <div className="different-section">
          <h3 className="different-title">What Makes Us Different</h3>
          <div className="different-grid">
            <div className="different-card">
              <span className="different-icon">🎸</span>
              <p>We help you <strong>remember the shows that mattered</strong>, not just discover the next one.</p>
            </div>
            <div className="different-card">
              <span className="different-icon">🤝</span>
              <p>Turn your concert history into <strong>friendly competition</strong> with stats and leaderboards.</p>
            </div>
            <div className="different-card">
              <span className="different-icon">⚡</span>
              <p>Built by someone <strong>actually in the pit</strong>, not a corporate boardroom.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3 className="cta-title">Join the Journey</h3>
          <p className="cta-text">
            Whether you're a casual concert-goer or a festival veteran, whether you've attended 10 shows 
            or 1,000, SeenThem is built for you.
          </p>
          <p className="cta-tagline">
            Next time someone mentions a band, you won't just say "I've seen them"—you'll know exactly 
            when, where, and how incredible it was.
          </p>
          <p className="cta-motto">
            <strong>Because live music memories are too precious to lose.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
