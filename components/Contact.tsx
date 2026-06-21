'use client'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: <Mail  className="w-5 h-5" style={{ color: '#C46245' }} />, label: 'Email',    value: 'hello@sophiaharper.co',  href: 'mailto:hello@sophiaharper.co' },
  { icon: <Phone className="w-5 h-5" style={{ color: '#C46245' }} />, label: 'Phone',    value: '+1 (415) 555-0192',      href: 'tel:+14155550192' },
  { icon: <MapPin className="w-5 h-5" style={{ color: '#C46245' }} />, label: 'Location', value: 'San Francisco, CA · Available Remote', href: null },
]

export default function Contact() {
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSuccess(true)
    e.currentTarget.reset()
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <div className="anim section-eyebrow">Get In Touch</div>
            <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-text-main leading-tight mb-6">
              Let&apos;s Build Something<br />
              <em className="not-italic text-accent">Remarkable Together</em>
            </h2>
            <p className="anim d2 text-text-secondary leading-relaxed mb-10">
              I&apos;m currently accepting new freelance projects and full-time opportunities. If you have a project in mind or just want to say hello, I&apos;d love to hear from you.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => (
                <div key={item.label} className={`anim d${i + 2} flex items-center gap-4`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-border-main shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-text-tertiary mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-text-main" style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#C46245')}
                        onMouseLeave={e => (e.currentTarget.style.color = '')}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-text-main">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons — inline SVG for brand marks */}
            <div className="anim d5 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Dribbble" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="anim d2 bg-white rounded-2xl p-8 shadow-sm border border-border-main">
            <h3 className="font-serif text-2xl font-semibold text-text-main mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-text-main mb-1.5">First Name</label>
                  <input id="firstname" name="firstname" type="text" placeholder="Jane" className="form-input" required />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-text-main mb-1.5">Last Name</label>
                  <input id="lastname" name="lastname" type="text" placeholder="Doe" className="form-input" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1.5">Email Address</label>
                <input id="email" name="email" type="email" placeholder="jane@company.com" className="form-input" required />
              </div>
              <div className="mb-4">
                <label htmlFor="project_type" className="block text-sm font-medium text-text-main mb-1.5">Project Type</label>
                <select id="project_type" name="project_type" className="form-input form-select" defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>UX/UI Design</option>
                  <option>Interaction Design</option>
                  <option>Design System</option>
                  <option>Product Strategy</option>
                  <option>Brand Identity</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1.5">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell me about your project, timeline, and budget…" className="form-input" style={{ resize: 'none' }} required />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>

            {success && (
              <div role="alert" className="flex items-center gap-2 mt-4 p-4 rounded-xl text-sm font-medium" style={{ background: '#f0fdf4', border: '1.5px solid #22c55e', color: '#15803d' }}>
                <CheckCircle className="w-5 h-5 text-green-600" />
                Message sent! I&apos;ll be in touch within 24 hours.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
