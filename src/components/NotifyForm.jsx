import { useState } from 'react'
import './NotifyForm.css'

const NotifyForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('https://seenthem.azurewebsites.net/notified', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setMessage(data.message || '🎉 Thanks! We\'ll notify you when SeenThem launches.')
        setEmail('')
      } else if (response.status === 429) {
        // Rate limit exceeded
        const retryAfter = response.headers.get('Retry-After')
        setStatus('error')
        setMessage(`Too many requests. Please try again in ${retryAfter || 60} seconds.`)
      } else if (response.status === 400) {
        // Validation error
        setStatus('error')
        setMessage(data.message || 'Invalid email address format.')
      } else {
        // Other errors
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to submit. Please check your connection and try again.')
      console.error('Error submitting notification request:', error)
    }
  }

  return (
    <div className="notify-form-wrapper">
      <form onSubmit={handleSubmit} className="notify-form">
        <div className="form-content">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="notify-input"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="notify-button"
          >
            {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Submitted!' : 'Notify Me'}
          </button>
        </div>
        {message && (
          <div className={`notify-message ${status}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  )
}

export default NotifyForm
