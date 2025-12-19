import { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is SeenThem?",
      answer: "SeenThem is a mobile concert tracking app that helps you build a comprehensive digital archive of every concert you've attended. Track shows, compete with friends through stats and leaderboards, earn badges, and never lose track of your live music memories. Whether you've been to 10 shows or 1,000, SeenThem preserves every moment from intimate club gigs to massive festival stages."
    },
    {
      question: "When will SeenThem be available?",
      answer: "SeenThem is coming soon to iOS! Sign up on our homepage to get notified when we launch. We're currently in development and excited to bring you a concert tracking experience that's effortless, social, and built by concert-goers for concert-goers."
    },
    {
      question: "How much does SeenThem cost?",
      answer: "SeenThem offers a free version with core features including tracking concerts, building your concert history, connecting with friends, and accessing basic stats. Premium features are available through a one-time purchase (not a subscription) that unlocks advanced analytics, exclusive badges, priority support, and early access to new features."
    },
    {
      question: "What is the refund policy for premium features?",
      answer: "You can request a refund within 48 hours of purchasing premium features. Refunds are processed by Apple through the App Store. After 48 hours, all sales are final unless required by applicable law. Contact Apple Support directly or submit a refund request through your App Store purchase history."
    },
    {
      question: "How old do I need to be to use SeenThem?",
      answer: "You must be at least 13 years old to create an account and use SeenThem. We take children's privacy seriously and comply with applicable age verification laws."
    },
    {
      question: "How do I create an account?",
      answer: "Creating an account is simple and secure. You'll need a valid email address, and authentication is handled through Microsoft Azure CIAM using email-based one-time password (OTP) verification. No complicated passwords to remember—just check your email for a code each time you log in."
    },
    {
      question: "How do I track concerts?",
      answer: "Logging a concert takes just 30 seconds! Search for the artist or event, select the concert details, and mark it as attended. You can add notes, rate your experience, and include photos to build your personal concert history. We use the Ticketmaster Discovery API to provide accurate band and venue information."
    },
    {
      question: "What data does SeenThem collect?",
      answer: "We collect your email address, username, display name, optional profile photo and location, concert data (shows attended, reviews, ratings), and friend connections. We automatically collect anonymized usage analytics through Apple App Analytics. All data is stored securely on servers in Sweden (within the EU/EEA). For complete details, read our Privacy Policy."
    },
    {
      question: "Who can see my concert data?",
      answer: "You control your privacy! By default, your concert activity, reviews, ratings, and detailed stats are visible only to your friends. You can optionally make some information public (username, profile picture, total concert count). Your profile is friends-only by default, giving you full control over who sees your concert history."
    },
    {
      question: "How does the social feature work?",
      answer: "Connect with friends to see shared concert experiences, mutual friends, and compare your concert stats. You can view who else attended that unforgettable show, discover concerts your friends are going to, and compete on leaderboards. Friendly competition brings music lovers together!"
    },
    {
      question: "What are badges and leaderboards?",
      answer: "Earn badges for concert milestones and compete with friends on leaderboards! Whether you've been to 5 shows or 500, every concert counts. We celebrate your progress and make concert-going more engaging through gamification. Premium users get access to exclusive badges."
    },
    {
      question: "Do you sell tickets?",
      answer: "No, SeenThem is a concert tracking app, not a ticketing platform. We don't sell tickets or handle ticket purchases. For tickets, refunds, or ticketing issues, please contact the venue or ticketing provider directly (like Ticketmaster, AXS, or the venue's box office)."
    },
    {
      question: "How do I delete my account and data?",
      answer: "You can delete your account anytime through the App settings. When you delete your account: it's immediately hidden from other users, your data is retained for 90 days to allow account recovery, and after 90 days, all your personal data and concert data are permanently deleted. You own your data completely."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes! We take security seriously. All data is stored on secure servers in Sweden (EU/EEA), transmitted via encrypted HTTPS/TLS, and we use secure PostgreSQL database storage. We're fully GDPR compliant and follow Norwegian data protection laws. We never sell your personal information to third parties."
    },
    {
      question: "What are my rights under GDPR?",
      answer: "Under GDPR, you have the right to access your data, correct inaccurate information, request deletion (right to be forgotten), restrict processing, data portability, object to processing, and withdraw consent anytime. Contact us at support@seenthem.app to exercise these rights, and we'll respond within 30 days. You can also lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet)."
    },
    {
      question: "Can I export my concert data?",
      answer: "Yes! You own your concert history completely. You can request your data in a structured, machine-readable format (data portability under GDPR Article 20). Share it proudly, export it anytime, or keep it private—you decide. No lock-in, no strings attached."
    },
    {
      question: "What third-party services does SeenThem use?",
      answer: "We integrate with Microsoft Azure CIAM for authentication, Ticketmaster Discovery API for band and venue data, Apple App Analytics for usage insights (anonymized), Google Ads for advertising, and Apple StoreKit for premium purchases. Each service has its own terms and privacy policies."
    },
    {
      question: "Will there be ads in the app?",
      answer: "Yes, the free version displays advertisements through Google Ads to help support the app. We don't control third-party ad content, but we ensure ads are relevant and non-intrusive. Premium users may have a different ad experience."
    },
    {
      question: "Can I use SeenThem on Android?",
      answer: "SeenThem is launching first on iOS. We're focused on delivering an amazing iOS experience, but we're considering Android in the future based on user feedback and demand. Join our Discord community to share your thoughts!"
    },
    {
      question: "How can I provide feedback or report bugs?",
      answer: "We love hearing from our users! Join our Discord community at discord.gg/eRUM6gK3R9 to suggest features, report bugs, and help shape the future of SeenThem. You can also reach us on X (Twitter) @SeenThemApp or Instagram @seenthemapp. Your feedback is invaluable to us."
    },
    {
      question: "How can I stay updated on new features and launch news?",
      answer: "Follow us on X (Twitter) @SeenThemApp and Instagram @seenthemapp for updates, feature announcements, and music news. Join our Discord community at discord.gg/eRUM6gK3R9 for in-depth discussions, early access, and direct communication with the team. Sign up on our homepage to get notified when we launch!"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-page">
      <div className="container">
        <div className="faq-header">
          <h1 className="faq-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="faq-subtitle">
            Find answers to common questions about SeenThem. Can't find what you're looking for? 
            Join our <a href="https://discord.gg/eRUM6gK3R9" target="_blank" rel="noopener noreferrer">Discord community</a> or reach out on social media.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <h3>Still have questions?</h3>
          <p>We're here to help! Connect with us on social media or join our Discord community.</p>
          <div className="faq-links">
            <a href="https://x.com/SeenThemApp" target="_blank" rel="noopener noreferrer" className="faq-link">
              Follow on X
            </a>
            <a href="https://instagram.com/seenthemapp" target="_blank" rel="noopener noreferrer" className="faq-link">
              Follow on Instagram
            </a>
            <a href="https://discord.gg/eRUM6gK3R9" target="_blank" rel="noopener noreferrer" className="faq-link primary">
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
