import {
  GraduationCap, BookOpen,
  PenTool, Layers, Zap, Code2, BarChart2, Users, Layout,
  Image as ImageIcon,
} from 'lucide-react'

const jobs = [
  { period: '2022 — Present', periodColor: '#C46245', title: 'Lead Product Designer', company: 'Vercel Inc. · San Francisco, CA', desc: "Leading design for Vercel's developer experience platform, owning the design system and collaborating with engineering and product leadership to shape the future of the web." },
  { period: '2019 — 2022',    periodColor: '#1B3B36', title: 'Senior UX Designer',    company: 'Stripe · Remote',              desc: "Designed complex financial dashboards, developer onboarding flows, and contributed to Stripe's global design language, serving millions of businesses worldwide." },
  { period: '2017 — 2019',    periodColor: '#C46245', title: 'UX Designer',            company: 'IDEO · New York, NY',          desc: 'Worked across human-centered design projects spanning healthcare, mobility, and consumer tech, applying design thinking methodologies for Fortune 500 clients.' },
  { period: '2015 — 2017',    periodColor: '#1B3B36', title: 'Junior UI Designer',     company: 'Frog Design · Austin, TX',     desc: 'Started my career crafting visual interfaces for mobile and web products, learning the craft of pixel-perfect UI design and rapid prototyping.' },
]

const toolkit = [
  { icon: <PenTool  className="w-6 h-6" style={{ color: '#C46245' }} />, label: 'Figma' },
  { icon: <Layers   className="w-6 h-6" style={{ color: '#1B3B36' }} />, label: 'Illustrator' },
  { icon: <ImageIcon className="w-6 h-6" style={{ color: '#C46245' }} />, label: 'Photoshop' },
  { icon: <Zap      className="w-6 h-6" style={{ color: '#1B3B36' }} />, label: 'Framer' },
  { icon: <Code2    className="w-6 h-6" style={{ color: '#C46245' }} />, label: 'Webflow' },
  { icon: <BarChart2 className="w-6 h-6" style={{ color: '#1B3B36' }} />, label: 'Mixpanel' },
  { icon: <Users    className="w-6 h-6" style={{ color: '#C46245' }} />, label: 'Maze' },
  { icon: <Layout   className="w-6 h-6" style={{ color: '#1B3B36' }} />, label: 'Notion' },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="anim section-eyebrow justify-center">My Story</div>
          <h2 className="anim d1 font-serif text-4xl md:text-5xl font-bold text-text-main mb-4">Career Journey</h2>
          <p className="anim d2 text-text-secondary text-lg">Eight years of designing, learning, and growing alongside some of the world&apos;s most innovative teams.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h3 className="anim font-serif text-2xl font-semibold text-text-main mb-8">Work Experience</h3>
            <div className="relative pl-12">
              <div className="timeline-line" />
              {jobs.map((job, i) => (
                <div key={job.title} className={`anim d${i + 1} relative mb-10`}>
                  <div className="timeline-dot" style={{ top: 6 }} />
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: job.periodColor }}>{job.period}</div>
                  <h4 className="font-serif text-xl font-semibold text-text-main">{job.title}</h4>
                  <div className="text-sm font-medium text-text-secondary mb-2">{job.company}</div>
                  <p className="text-sm text-text-secondary leading-relaxed">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Toolkit */}
          <div>
            <h3 className="anim font-serif text-2xl font-semibold text-text-main mb-8">Education</h3>

            <div className="anim d1 bg-bg-soft rounded-2xl p-6 mb-4 border border-border-main">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(196,98,69,0.1)' }}>
                  <GraduationCap className="w-6 h-6" style={{ color: '#C46245' }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-1">2013 — 2015</div>
                  <h4 className="font-serif text-lg font-semibold text-text-main">MFA in Graphic Design</h4>
                  <p className="text-sm text-text-secondary">Rhode Island School of Design (RISD)</p>
                </div>
              </div>
            </div>

            <div className="anim d2 bg-bg-soft rounded-2xl p-6 mb-10 border border-border-main">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(27,59,54,0.08)' }}>
                  <BookOpen className="w-6 h-6" style={{ color: '#1B3B36' }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-1">2009 — 2013</div>
                  <h4 className="font-serif text-lg font-semibold text-text-main">BA in Visual Communication</h4>
                  <p className="text-sm text-text-secondary">Carnegie Mellon University, Pittsburgh</p>
                </div>
              </div>
            </div>

            <h3 className="anim font-serif text-2xl font-semibold text-text-main mb-6">My Toolkit</h3>
            <div className="anim d3 grid grid-cols-4 gap-3">
              {toolkit.map(t => (
                <div key={t.label} className="toolkit-item">
                  {t.icon}
                  <span className="text-xs font-medium text-text-secondary">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
