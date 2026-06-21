'use client'
import { useEffect } from 'react'

export default function ClientInit() {
  useEffect(() => {
    // ── Scroll animations ──
    const animEls = document.querySelectorAll<HTMLElement>('.anim')
    animEls.forEach(el => el.classList.add('scroll-hidden'))

    const failsafe = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.scroll-hidden').forEach(el =>
        el.classList.remove('scroll-hidden')
      )
    }, 3000)

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-hidden')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    animEls.forEach(el => revealObserver.observe(el))

    // ── Counter animation ──
    const counters = document.querySelectorAll<HTMLElement>('.counter')
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = parseInt(el.dataset.target ?? '0', 10)
            const duration = 2000
            const step = target / (duration / 16)
            let current = 0
            const timer = setInterval(() => {
              current += step
              if (current >= target) { current = target; clearInterval(timer) }
              el.textContent = String(Math.floor(current))
            }, 16)
            counterObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    counters.forEach(c => counterObserver.observe(c))

    // ── Navbar scroll shadow ──
    const navbar = document.getElementById('navbar')
    const onScroll = () => {
      if (!navbar) return
      if (window.scrollY > 50) navbar.classList.add('scrolled')
      else navbar.classList.remove('scrolled')
      updateActiveNav()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Active nav link ──
    const sections = ['hero','services','about','works','journey','testimonials','certificates','contact']
    const navLinks = document.querySelectorAll<HTMLElement>('.nav-link')
    function updateActiveNav() {
      let current = ''
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) current = id
        }
      })
      navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === '#' + current) link.classList.add('active')
      })
    }

    // ── Smooth scroll with navbar offset ──
    const handleAnchorClick = (e: Event) => {
      const anchor = (e.currentTarget as HTMLAnchorElement)
      const href = anchor.getAttribute('href')
      if (!href?.startsWith('#')) return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        const top = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    anchors.forEach(a => a.addEventListener('click', handleAnchorClick))

    return () => {
      clearTimeout(failsafe)
      revealObserver.disconnect()
      counterObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      anchors.forEach(a => a.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  return null
}
