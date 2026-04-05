'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { personalInfo } from '../data/portfolio'

const titles = [
  'MERN Stack Developer',
  'SaaS Architect',
  'CRM Specialist',
  'Full Stack Engineer',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const target = titles[titleIndex]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % titles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 70% 50%, #0e2a6e 0%, #071030 40%, #040d20 100%)',
      }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-16">

        {/* LEFT: Text Content */}
        <div className="flex-1 w-full md:max-w-xl">

          {/* Name */}
          <h1
            className={`text-5xl md:text-6xl font-bold text-white mb-3 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms', fontFamily: 'var(--font-display)' }}
          >
            Tanjim Alam
          </h1>

          {/* Blue underline accent */}
          <div
            className={`h-1 w-16 rounded-full mb-5 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ background: '#3b82f6', transitionDelay: '150ms' }}
          />

          {/* Typewriter subtitle */}
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="text-lg md:text-xl font-semibold text-white/90">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-white ml-0.5 animate-blink align-middle" />
            </span>
          </div>

          {/* Divider */}
          <div
            className={`h-px w-full mb-6 transition-all duration-700 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ background: 'rgba(255,255,255,0.1)', transitionDelay: '300ms' }}
          />

          {/* Tagline */}
          <p
            className={`text-base md:text-lg text-white/60 mb-10 leading-relaxed transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex md:flex-row gap-4 mb-10 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <a
              href="#projects"
              className="px-5 md:px-7 py-3 text-center w-full md:w-fit text-sm font-bold text-white rounded-lg transition-all hover:brightness-110 hover:scale-105"
              style={{ background: '#3b82f6' }}
            >
              View Projects
            </a>
            <a
              href={personalInfo.resumeUrl}
              className="px-5 md:px-7 py-3 w-full md:w-fit text-center text-sm font-bold text-white/80 rounded-lg border border-white/20 hover:border-white/40 hover:text-white transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.08)' }}
              download
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '550ms' }}
          >
            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-white transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-white transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:text-white transition-all hover:scale-110"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative w-72 h-80 md:w-96 md:h-[480px] flex justify-center items-center">
            {/* Glow behind photo */}
            <div
              className="absolute  inset-0 rounded-2xl blur-2xl scale-95"
              style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.3) 0%, transparent 70%)' }}
            />
            {/* Photo container */}
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <Image
                src="/hero-img.png"
                alt="Tanjim Alam"
                fill
                className="object-cover object-top border-4 border-[#3b82f6] rounded-full"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}