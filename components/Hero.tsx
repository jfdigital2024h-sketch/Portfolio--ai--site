import { ArrowRight, Send } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-main pt-16">
      {/* Background layers */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-circle" style={{ width: 600, height: 600, background: '#C46245', top: -200, right: -200 }} />
        <div className="hero-circle" style={{ width: 500, height: 500, background: '#1B3B36', bottom: -150, left: -150 }} />
        <div className="hero-circle" style={{ width: 300, height: 300, background: '#C46245', bottom: 100, right: 100, opacity: 0.07 }} />
        <div className="hero-geo" style={{ width: 220, height: 220, top: '15%', left: '8%', animationDuration: '28s', transformOrigin: 'center' }} />
        <div className="hero-geo" style={{ width: 140, height: 140, top: '60%', right: '12%', animationDuration: '22s', animationDirection: 'reverse', transformOrigin: 'center' }} />
        <div className="hero-geo" style={{ width: 80, height: 80, top: '25%', right: '25%', animationDuration: '16s', transformOrigin: 'center', borderRadius: '50%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="anim inline-flex items-center gap-2 bg-white border border-border-main rounded-full px-4 py-2 mb-8 shadow-sm">
          <span className="pulse-dot" />
          <span className="text-sm font-medium text-text-main">Available for Freelance</span>
        </div>

        {/* Heading */}
        <h1 className="anim d1 font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="gradient-text">Crafting Digital</span><br />
          <em className="font-serif not-italic text-text-main">Experiences</em>
        </h1>

        <p className="anim d2 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m Sophia Harper — specializing in&nbsp;
          <span className="font-semibold text-accent">UX/UI Design</span>,&nbsp;
          <span className="font-semibold text-deep">Interaction Design</span>, and&nbsp;
          <span className="font-semibold text-accent">Design Systems</span> that elevate brands and delight users.
        </p>

        {/* CTAs */}
        <div className="anim d3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#works" className="btn-primary">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch <Send className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="anim d4 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { target: 8,   label: 'Years Experience' },
            { target: 120, label: 'Projects Done' },
            { target: 45,  label: 'Happy Clients' },
            { target: 15,  label: 'Awards Won' },
          ].map(({ target, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-4xl font-bold text-text-main">
                <span className="counter" data-target={target}>0</span>+
              </div>
              <div className="text-sm text-text-secondary mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
