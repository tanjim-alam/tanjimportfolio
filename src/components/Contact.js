'use client'
import { useReveal } from '../hooks/useReveal'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const ref = useReveal()

  const contacts = [
    {
      label: "tanjim11alam@gmail.com",
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      iconBg: 'rgba(59,130,246,0.15)',
      iconColor: '#93c5fd',
    },
    {
      label: 'linkedin.com/in/tanjim-alam',
      href: personalInfo.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      iconBg: '#0A66C2',
      iconColor: '#ffffff',
    },
    {
      label: 'github.com/tanjimalam',
      href: personalInfo.github,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
      iconBg: 'rgba(255,255,255,0.1)',
      iconColor: '#ffffff',
    },
  ]

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16">
        <div ref={ref} className="reveal">

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Me
            </h2>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
          </div>

          {/* Subtitle */}
          <p className="text-center text-white text-sm mb-10">
            Let's connect! Feel free to reach out.
          </p>

          {/* Contact bar */}
          <div
            className="rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x gap-0"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              divideColor: 'rgba(255,255,255,0.08)',
            }}
          >
            {contacts.map(({ label, href, icon, iconBg, iconColor }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-3 w-full md:w-auto justify-center group transition-all duration-200 hover:opacity-80"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                {/* Icon box */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: iconBg, color: iconColor }}
                >
                  {icon}
                </div>

                {/* Label */}
                <span className="text-white text-sm group-hover:text-white transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}