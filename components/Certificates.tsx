import { Award, ShieldCheck, Star, Zap } from 'lucide-react'

const certs = [
  { icon: <Award     className="w-7 h-7" style={{ color: '#C46245' }} />, iconBg: 'rgba(196,98,69,0.1)', title: 'Google UX Design',  sub: 'Professional Certificate', year: '2021', yearColor: '#C46245' },
  { icon: <ShieldCheck className="w-7 h-7" style={{ color: '#1B3B36' }} />, iconBg: 'rgba(27,59,54,0.08)',  title: 'NN/g UX Certified',  sub: 'Interaction Design',       year: '2020', yearColor: '#1B3B36' },
  { icon: <Star      className="w-7 h-7" style={{ color: '#C46245' }} />, iconBg: 'rgba(196,98,69,0.1)', title: 'Figma Advanced',    sub: 'Figma Official Course',    year: '2022', yearColor: '#C46245' },
  { icon: <Zap       className="w-7 h-7" style={{ color: '#1B3B36' }} />, iconBg: 'rgba(27,59,54,0.08)',  title: 'Motion Design',     sub: 'School of Motion',         year: '2023', yearColor: '#1B3B36' },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="anim section-eyebrow justify-center">Credentials</div>
          <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-text-main mb-4">Certifications</h2>
          <p className="anim d2 text-text-secondary text-lg">
            Continuous learning is core to my practice — here are some of the credentials I&apos;ve earned along the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <div key={c.title} className={`anim d${i + 1} cert-card`}>
              <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: c.iconBg }}>
                {c.icon}
              </div>
              <div className="font-serif text-lg font-semibold text-text-main mb-1">{c.title}</div>
              <div className="text-sm text-text-secondary mb-3">{c.sub}</div>
              <div className="text-xs font-bold" style={{ color: c.yearColor }}>{c.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
