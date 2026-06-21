'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#about',    label: 'About' },
  { href: '#works',    label: 'Works' },
  { href: '#journey',  label: 'Journey' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── Desktop / Mobile bar ── */}
      <nav id="navbar" className="w-full">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 no-underline" style={{ textDecoration: 'none' }}>
            <span className="w-9 h-9 rounded-full bg-text-main flex items-center justify-center text-white font-serif font-bold text-lg select-none">S.</span>
            <span className="font-serif font-semibold text-text-main text-lg tracking-tight">Sophia.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
              Let&apos;s Talk
            </a>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          >
            <span className="block w-6 h-0.5 bg-text-main rounded"></span>
            <span className="block w-6 h-0.5 bg-text-main rounded"></span>
            <span className="block w-4 h-0.5 bg-text-main rounded"></span>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: 'fixed', inset: 0,
          background: '#FAFAFA',
          zIndex: 2000,
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-5 right-6 p-2 bg-transparent border-none cursor-pointer"
        >
          <X className="w-7 h-7 text-text-main" />
        </button>

        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a href="#contact" className="btn-primary mt-4" onClick={() => setOpen(false)}>
          Let&apos;s Talk
        </a>
      </div>
    </>
  )
}
