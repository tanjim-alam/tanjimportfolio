'use client'
import { useReveal } from '../hooks/useReveal'
import { personalInfo } from '../data/portfolio'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-16 relative"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #0e2a6e22 0%, transparent 70%)' }}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <div ref={ref} className="reveal">

          {/* Card */}
          <div
            className="rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center gap-10"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Left: Avatar placeholder — initials only, no photo */}
            <div className="flex-shrink-0">
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center text-4xl font-bold"
                style={{
                  background: 'linear-gradient(135deg, #0e2a6e 0%, #1e40af 100%)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  color: '#93c5fd',
                  fontFamily: 'var(--font-display)',
                }}
              >
                TA
              </div>
            </div>

            {/* Right: Text */}
            <div className="flex-1">
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                About Me
              </h2>

              {personalInfo.about.split('\n\n').map((para, i) => (
                <p key={i} className="text-white leading-relaxed mb-4 text-base md:text-lg">
                  {para}
                </p>
              ))}

              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}