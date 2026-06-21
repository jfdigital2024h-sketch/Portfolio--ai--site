const testimonials = [
  {
    quote: '"Sophia completely transformed our product\'s user experience. She has an incredible ability to understand complex technical workflows and translate them into interfaces that are both beautiful and intuitive. Our support tickets dropped by 35% after the redesign."',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces',
    name: 'Marcus Chen',
    title: 'CPO, Vercel Inc.',
  },
  {
    quote: '"Working with Sophia on our design system was a game-changer. She brought structure, clarity, and elegance to what was previously a chaotic patchwork of components. Our engineering team now ships twice as fast, and the consistency across our product is night-and-day."',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=faces',
    name: 'Priya Sharma',
    title: 'Head of Design, Stripe',
  },
  {
    quote: '"Sophia is the rare designer who is equally gifted at strategy and execution. She asked the right questions, challenged our assumptions, and delivered a mobile app that our users genuinely love. App Store rating went from 3.2 to 4.8 stars after launch."',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces',
    name: 'David Okafor',
    title: 'CEO, Pulse Health',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24" style={{ background: '#1C1C1C' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="anim inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#C46245' }}>
            <span style={{ display: 'block', width: 24, height: 2, background: '#C46245', borderRadius: 2 }} />
            Client Reviews
          </div>
          <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-white mb-4">What Clients Say</h2>
          <p className="anim d2 text-gray-400 text-lg">Trusted by teams at leading companies to deliver design that moves the needle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`anim d${i + 1} testimonial-card`}>
              <div className="stars text-xl mb-4">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" style={{ border: '2px solid rgba(255,255,255,0.2)' }} />
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
