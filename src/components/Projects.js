'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    title: 'Multi-Tenant Estate CRM',
    images: [
      '/crm-img2.png',
      '/crm-img1.png',
      '/crm-img3.png',
      '/crm-img4.png',
      '/crm-img5.png',
    ],
    features: [
      'Lead, Property, Client, Team Management',
      'Role-based Access',
      'Live Chat & Real-Time Notifications',
      'Analytics Dashboard',
    ],
    liveUrl: '#',
    liveLabel: 'Live Demo',
    githubUrl: 'https://github.com/tanjim-alam/realcrm',
  },
  {
    title: 'HomeLineTeam',
    images: [
      '/homelineteam-img1.png',
      '/homelineteam-img2.png',
      '/homelineteam-img3.png',
      '/homelineteam-img4.png',
      '/homelineteam-img5.png',
      '/homelineteam-img6.png',
      '/homelineteam-img7.png',
    ],
    features: [
      'Home Interior Products Store',
      'Interior Services Platform',
      'Admin Management Panel',
      'Razorpay Payment Integration',
    ],
    liveUrl: 'https://homelineteam.com/',
    liveLabel: 'Live Site',
    githubUrl: 'https://github.com/tanjim-alam/homelineteam',
  },
  {
    title: 'Sobha Properties Real Estate',
    images: [
      '/sobhaproperties-img1.png',
      '/sobhaproperties-img6.png',
      '/sobhaproperties-img8.png',
      '/sobhaproperties-img4.png',
      '/sobhaproperties-img5.png',
      '/sobhaproperties-img6.png',
      '/sobhaproperties-img7.png',
      '/sobhaproperties-img3.png',
      '/sobhaproperties-img2.png',
    ],
    features: [
      'Sobha Project Listings with Separate Project SEO Friendly Pages',
      'Admin Panel for Projects, Blogs & Leads Management',
    ],
    liveUrl: '#',
    liveLabel: 'Live Demo',
    githubUrl: '#',
  },
  {
    title: 'Sattva Aangane - Real Estate',
    images: [
      '/sattvaaangane-img1.png',
      '/sattvaaangane-img2.png',
      '/sattvaaangane-img3.png',
      '/sattvaaangane-img4.png',
    ],
    features: [
      'Brokers Sattva Aangane Project Website with SEO Friendly Pages',
      'Hosted on DigitalOcean with Droplet, Managed DNS',
    ],
    liveUrl: 'https://www.sattvaaangane.co/',
    liveLabel: 'Live Demo',
    githubUrl: '#',
  },
]

function ImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0)

  const prev = (e) => {
    e.preventDefault()
    setCurrent((i) => (i - 1 + images.length) % images.length)
  }

  const next = (e) => {
    e.preventDefault()
    setCurrent((i) => (i + 1) % images.length)
  }

  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 group">
      {/* Fallback bg always visible behind image */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #0e2a6e 0%, #1e3a8a 100%)' }}
      >
        <span className="text-white/20 text-4xl font-bold">
          {title.charAt(0)}
        </span>
      </div>

      {/* Image */}
      <Image
        src={images[current]}
        alt={`${title} screenshot ${current + 1}`}
        fill
        className=" transition-opacity duration-300"
      />

      {/* Only show arrows if more than 1 image */}
      {images.length > 1 && (
        <>
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
            style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === current ? '16px' : '6px',
                  height: '6px',
                  background: i === current ? '#3b82f6' : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            className="absolute top-2 right-2 text-xs font-mono px-2 py-0.5 rounded-full z-10"
            style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.7)' }}
          >
            {current + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useReveal(index * 120)

  return (
    <div ref={ref} className="reveal flex-shrink-0 w-[300px] md:w-[340px]">
      <div
        className="rounded-2xl p-5 flex flex-col h-full"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Title */}
        <h3
          className="text-white font-bold text-lg mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {project.title}
        </h3>

        {/* Image slider */}
        <ImageSlider images={project.images} title={project.title} />

        {/* Features */}
        <ul className="flex-1 space-y-2 mb-6">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-white text-sm">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#3b82f6' }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2.5 text-sm font-bold text-white rounded-lg transition-all hover:brightness-110"
            style={{ background: '#3b82f6' }}
          >
            {project.liveLabel}
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2.5 text-sm font-bold text-white/80 rounded-lg border border-white/15 hover:border-white/30 hover:text-white transition-all flex items-center justify-center gap-2"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useReveal()
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -370 : 370, behavior: 'smooth' })
    setTimeout(checkScroll, 350)
  }

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16">

        {/* Title + nav arrows */}
        <div ref={headerRef} className="reveal flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <h2
            className="text-2xl md:text-3xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Featured Projects
          </h2>
          <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
        </div>

        {/* Scroll wrapper */}
        <div className="relative h-full">

          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              background: 'rgba(15,25,50,0.95)',
              border: '1px solid rgba(59,130,246,0.4)',
              boxShadow: '0 0 20px rgba(59,130,246,0.2)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              background: 'rgba(15,25,50,0.95)',
              border: '1px solid rgba(59,130,246,0.4)',
              boxShadow: '0 0 20px rgba(59,130,246,0.2)',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #040d20, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(-90deg, #040d20, transparent)' }}
          />

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto pb-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}