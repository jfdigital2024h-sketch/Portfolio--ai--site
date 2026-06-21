import { LayoutDashboard, MousePointerClick, Component, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <LayoutDashboard className="w-7 h-7" style={{ color: '#C46245' }} />,
    iconBg: 'rgba(196,98,69,0.08)',
    tag: 'UX/UI Design',
    tagStyle: { background: 'rgba(196,98,69,0.1)', color: '#A04530' },
    title: 'UX/UI Design',
    desc: 'I craft user-centered interfaces that balance aesthetic beauty with functional clarity, turning complex problems into elegant digital solutions.',
    bullets: ['User Research & Wireframing', 'High-Fidelity Prototyping', 'Usability Testing & Iteration'],
    linkColor: '#C46245',
    borderTop: false,
  },
  {
    icon: <MousePointerClick className="w-7 h-7" style={{ color: '#1B3B36' }} />,
    iconBg: 'rgba(27,59,54,0.08)',
    tag: 'Interaction',
    tagStyle: { background: 'rgba(27,59,54,0.1)', color: '#1B3B36' },
    title: 'Interaction Design',
    desc: 'I design the moments between — micro-interactions, transitions, and motion that make digital products feel alive, responsive, and genuinely delightful.',
    bullets: ['Micro-Interaction Design', 'Motion & Animation Principles', 'Interactive Prototyping'],
    linkColor: '#1B3B36',
    borderTop: true,
  },
  {
    icon: <Component className="w-7 h-7" style={{ color: '#C46245' }} />,
    iconBg: 'rgba(196,98,69,0.08)',
    tag: 'Systems',
    tagStyle: { background: 'rgba(196,98,69,0.1)', color: '#A04530' },
    title: 'Design Systems',
    desc: 'I build scalable, well-documented design systems that empower teams to ship consistent, high-quality products faster and with confidence.',
    bullets: ['Component Library Creation', 'Design Token Architecture', 'Documentation & Guidelines'],
    linkColor: '#C46245',
    borderTop: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="anim section-eyebrow justify-center">What I Do</div>
          <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-text-main mb-4">Services I Offer</h2>
          <p className="anim d2 text-text-secondary text-lg leading-relaxed">
            From concept to pixel-perfect delivery, I provide end-to-end design solutions that create meaningful, intuitive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`anim d${i + 1} service-card`}
              style={s.borderTop ? { borderTop: '3px solid #1B3B36' } : {}}
            >
              <div className="service-icon" style={{ background: s.iconBg }}>{s.icon}</div>
              <div className="tag mb-4" style={s.tagStyle}>{s.tag}</div>
              <h3 className="font-serif text-2xl font-semibold text-text-main mb-3">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2.5 mb-6">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: s.linkColor }} />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: s.linkColor, textDecoration: 'none' }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
