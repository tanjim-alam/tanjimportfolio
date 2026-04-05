'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-5xl px-8 transition-all duration-300 ${
          menuOpen ? 'rounded-3xl' : 'rounded-full'
        } ${
          scrolled
            ? 'bg-[#040d20]/90 backdrop-blur-md shadow-lg shadow-black/40'
            : 'bg-[#0a1628]/70 backdrop-blur-sm'
        }`}
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
      >
        {/* Main bar */}
        <div className=" h-14 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-base font-bold tracking-widest"
            style={{ fontFamily: 'var(--font-display)', color: '#3b82f6' }}
          >
            TANJIM
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`px-3 py-1.5 text-[14px] font-medium transition-all duration-200 rounded-full ${
                  active === href
                    ? 'text-white'
                    : 'text-white hover:text-white/90'
                }`}
                style={
                  active === href
                    ? { background: 'rgba(59,130,246,0.15)', color: '#3b82f6' }
                    : {}
                }
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-1.5 text-[13px] font-bold text-white rounded-full transition-all hover:brightness-110"
              style={{ background: '#3b82f6' }}
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
              style={{ background: '#3b82f6' }}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
              style={{ background: '#3b82f6' }}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
              style={{ background: '#3b82f6' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 py-4 flex flex-col gap-1 rounded-b-3xl"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-2.5 px-3 rounded-xl transition-all duration-200 ${
                  active === href ? 'text-white' : 'text-white/50 hover:text-white/80'
                }`}
                style={
                  active === href
                    ? { background: 'rgba(59,130,246,0.12)', color: '#3b82f6' }
                    : {}
                }
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center text-sm font-bold text-white rounded-full py-2.5 transition-all hover:brightness-110"
              style={{ background: '#3b82f6' }}
            >
              HIRE ME
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}