const navLinks = [
  { href: '#services',     label: 'Services' },
  { href: '#about',        label: 'About' },
  { href: '#works',        label: 'Works' },
  { href: '#journey',      label: 'Journey' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact',      label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1C' }} className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-serif font-bold text-text-main text-lg select-none">S.</span>
            <span className="font-serif font-semibold text-white text-lg tracking-tight">Sophia.</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-6 justify-center">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors" style={{ textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-gray-500">© 2024 Sophia Harper. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
