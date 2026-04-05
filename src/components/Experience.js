'use client'
import { useReveal } from '../hooks/useReveal'
import { experience, achievements } from '../data/portfolio'

const achievementIcons = [
  // Lightning bolt - performance
  <svg key="perf" viewBox="0 0 24 24" fill="#3b82f6" className="w-5 h-5">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  // Puzzle piece - components
  <svg key="puzzle" viewBox="0 0 24 24" fill="#8b5cf6" className="w-5 h-5">
    <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 00-5 0V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 000-5z" />
  </svg>,
  // Server - architecture
  <svg key="server" viewBox="0 0 24 24" fill="#22d3a5" className="w-5 h-5">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 6H4V4h16v4zM20 14H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H4v-4h16v4z" />
    <circle cx="7" cy="7" r="1" fill="#22d3a5" />
    <circle cx="7" cy="19" r="1" fill="#22d3a5" />
  </svg>,
  // Shield check - uptime
  <svg key="shield" viewBox="0 0 24 24" fill="#f59e0b" className="w-5 h-5">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>,
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16">
        <div ref={ref} className="reveal">

          {/* Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Experience
            </h2>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── LEFT: Timeline ── */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8">
                Work Timeline
              </h3>

              <div className="relative">
                {/* Vertical line */}
                <div
                  className="absolute left-3 top-0 bottom-0 w-px"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                />

                <div className="space-y-10">
                  {experience.map((job, i) => (
                    <div key={i} className="relative pl-10">

                      {/* Timeline dot */}
                      <div
                        className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                        style={{
                          borderColor: '#3b82f6',
                          background: '#040d20',
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: '#3b82f6' }}
                        />
                      </div>

                      {/* Period badge */}
                      <div className="mb-2">
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: 'rgba(59,130,246,0.1)',
                            border: '1px solid rgba(59,130,246,0.2)',
                            color: '#3b82f6',
                          }}
                        >
                          {job.period}
                        </span>
                      </div>

                      {/* Role & company */}
                      <h4
                        className="text-white font-bold text-base mb-0.5"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {job.role}
                      </h4>

                      {/* Company with briefcase icon */}
                      <div className="flex items-center gap-1.5 mb-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                        </svg>
                        <span className="text-sm text-white">{job.company}</span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {job.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="w-3.5 h-3.5 flex-shrink-0 mt-0.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Achievements ── */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8">
                Key Achievements
              </h3>

              <div className="flex flex-col gap-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 flex items-start gap-4 transition-all duration-200 hover:border-white/15 group"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {/* SVG icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        background: 'rgba(59,130,246,0.08)',
                        border: '1px solid rgba(59,130,246,0.15)',
                      }}
                    >
                      {achievementIcons[i % achievementIcons.length]}
                    </div>

                    <div>
                      <h4
                        className="text-white font-bold text-sm mb-1"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {a.title}
                      </h4>
                      <p className="text-xs text-white/40 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { num: '2+', label: 'Years Exp.' },
                  { num: '15+', label: 'Components' },
                ].map(({ num, label }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4 text-center"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <div
                      className="text-2xl font-bold text-white mb-0.5"
                      style={{ fontFamily: 'var(--font-display)', color: '#3b82f6' }}
                    >
                      {num}
                    </div>
                    <div className="text-xs text-white/30 uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}