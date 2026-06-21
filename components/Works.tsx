import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop',
    alt: 'FinFlow Dashboard',
    tags: [
      { label: 'Product Design', style: { background: 'rgba(196,98,69,0.1)', color: '#A04530' } },
      { label: 'Fintech',        style: { background: 'rgba(27,59,54,0.08)', color: '#1B3B36' } },
    ],
    title: 'FinFlow Dashboard',
    desc: 'A comprehensive financial management platform redesign that reduced user task-completion time by 42% and boosted retention by 28%.',
  },
  {
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    alt: 'Pulse Health App',
    tags: [
      { label: 'Mobile App',  style: { background: 'rgba(196,98,69,0.1)', color: '#A04530' } },
      { label: 'Health Tech', style: { background: 'rgba(27,59,54,0.08)', color: '#1B3B36' } },
    ],
    title: 'Pulse Health App',
    desc: 'A personal wellness companion app featuring AI-driven insights, seamless device integrations, and a calm, accessible design language.',
  },
  {
    img: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&h=600&fit=crop',
    alt: 'Orbit Design System',
    tags: [
      { label: 'Design System', style: { background: 'rgba(196,98,69,0.1)', color: '#A04530' } },
      { label: 'SaaS',          style: { background: 'rgba(27,59,54,0.08)', color: '#1B3B36' } },
    ],
    title: 'Orbit Design System',
    desc: 'A fully-documented, token-driven design system serving 12 product teams across a Series C SaaS company — 300+ components, zero ambiguity.',
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    alt: 'Beacon E-Commerce',
    tags: [
      { label: 'E-Commerce', style: { background: 'rgba(196,98,69,0.1)', color: '#A04530' } },
      { label: 'Branding',   style: { background: 'rgba(27,59,54,0.08)', color: '#1B3B36' } },
    ],
    title: 'Beacon E-Commerce',
    desc: 'An immersive e-commerce experience for a luxury lifestyle brand, combining editorial storytelling with a conversion-optimized checkout flow.',
  },
]

export default function Works() {
  return (
    <section id="works" className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="anim section-eyebrow justify-center">Portfolio</div>
          <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-text-main mb-4">Selected Works</h2>
          <p className="anim d2 text-text-secondary text-lg">
            A curated selection of projects that showcase my range across product design, branding, and interactive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={p.title} className={`anim d${i + 1} project-card`}>
              <div className="project-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div className="project-overlay">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-6 h-6" style={{ color: '#1B3B36' }} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {p.tags.map(t => (
                    <span key={t.label} className="tag" style={t.style}>{t.label}</span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-text-main mb-2">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
