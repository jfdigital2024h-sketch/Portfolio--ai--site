import { Award, MapPin, Briefcase, GraduationCap, Globe, Download, ArrowRight } from 'lucide-react'

const infoGrid = [
  { icon: <MapPin className="w-4 h-4" style={{ color: '#C46245' }} />, label: 'Location', value: 'San Francisco, CA' },
  { icon: <Briefcase className="w-4 h-4" style={{ color: '#C46245' }} />, label: 'Experience', value: '8+ Years' },
  { icon: <GraduationCap className="w-4 h-4" style={{ color: '#1B3B36' }} />, label: 'Education', value: 'MFA, Design — RISD' },
  { icon: <Globe className="w-4 h-4" style={{ color: '#1B3B36' }} />, label: 'Remote', value: 'Available Worldwide' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="anim about-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&h=900&fit=crop&crop=faces"
              alt="Sophia Harper — UX/UI Designer"
            />
            {/* Floating badge */}
            <div className="absolute top-6 -right-4 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-border-main">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,98,69,0.1)' }}>
                <Award className="w-5 h-5" style={{ color: '#C46245' }} />
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-text-main">8+</div>
                <div className="text-xs text-text-secondary">Years of Experience</div>
              </div>
            </div>
            <div className="dot-pattern" />
          </div>

          {/* Text */}
          <div>
            <div className="anim section-eyebrow">About Me</div>
            <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-text-main leading-tight mb-6">
              Designing with Purpose,<br />
              <em className="not-italic text-accent">Passion &amp; Precision</em>
            </h2>
            <p className="anim d2 text-text-secondary leading-relaxed mb-5">
              Hi, I&apos;m Sophia — a senior UX/UI designer based in San Francisco with over eight years of experience helping startups and Fortune 500 companies design products people genuinely love to use.
            </p>
            <p className="anim d2 text-text-secondary leading-relaxed mb-8">
              My approach blends rigorous user research with a strong sense of visual craft. I believe the best design is invisible — it simply works, and it delights. Whether I&apos;m shaping a zero-to-one product or scaling an established design system, I bring the same care and curiosity to every pixel.
            </p>

            {/* Info grid */}
            <div className="anim d3 grid grid-cols-2 gap-4 mb-8">
              {infoGrid.map(item => (
                <div key={item.label} className="info-grid-item">
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.icon}
                    <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">{item.label}</span>
                  </div>
                  <div className="font-semibold text-text-main text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="anim d4 flex gap-4 flex-wrap">
              <a href="#" className="btn-primary">
                <Download className="w-4 h-4" /> Download Resume
              </a>
              <a href="#works" className="btn-outline">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
