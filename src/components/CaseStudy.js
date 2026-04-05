'use client'
import { useReveal } from '../hooks/useReveal'
import { caseStudy } from '../data/portfolio'

export default function CaseStudy() {
  const ref = useReveal()

  return (
    <section id="case-study" className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16">
        <div ref={ref} className="reveal">

          {/* Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Case Study
            </h2>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.1)' }} />
          </div>

          {/* Project name + subtitle */}
          <div className="mb-10 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-4"
              style={{
                background: 'rgba(59,130,246,0.12)',
                border: '1px solid rgba(59,130,246,0.3)',
                color: '#3b82f6',
              }}
            >
              FEATURED PROJECT
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {caseStudy.project}
            </h3>
            <p className="text-white max-w-xl mx-auto text-sm">
              How I architected a multi-tenant SaaS that scaled across 5+ real estate companies.
            </p>
          </div>

          {/* Problem / Solution / Learnings */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">

            {/* Problem */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #ef4444, transparent)' }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg"
                style={{
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.2)',
                }}
              >
                ⚠
              </div>
              <h4
                className="text-white font-bold text-sm uppercase tracking-wider mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Problem
              </h4>
              <p className="text-white text-sm leading-relaxed">{caseStudy.problem}</p>
            </div>

            {/* Solution */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #3b82f6, transparent)' }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg"
                style={{
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                }}
              >
                ⚡
              </div>
              <h4
                className="text-white font-bold text-sm uppercase tracking-wider mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                The Solution
              </h4>
              <p className="text-white text-sm leading-relaxed">{caseStudy.solution}</p>
            </div>

            {/* Learnings */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #8b5cf6, transparent)' }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg"
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                }}
              >
                🧠
              </div>
              <h4
                className="text-white font-bold text-sm uppercase tracking-wider mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Key Learnings
              </h4>
              <ul className="space-y-2">
                {caseStudy.learnings.map((l, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="text-[#8b5cf6] flex-shrink-0 mt-0.5">›</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results table */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Table header */}
            <div
              className="px-6 py-4 flex items-center gap-2"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: '#3b82f6' }}
              />
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                Results & Impact
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Metric', 'Before', 'After', 'Change'].map((h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-widest text-white"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {caseStudy.results.map((row, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-white/2"
                      style={{
                        borderBottom:
                          i < caseStudy.results.length - 1
                            ? '1px solid rgba(255,255,255,0.05)'
                            : 'none',
                      }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-white font-mono">
                        {row.before}
                      </td>
                      <td className="px-6 py-4 text-sm text-white font-mono">
                        {row.after}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="text-sm font-bold font-mono px-2.5 py-1 rounded-full"
                          style={{
                            color: '#22d3a5',
                            background: 'rgba(34,211,165,0.1)',
                            border: '1px solid rgba(34,211,165,0.2)',
                          }}
                        >
                          {row.delta}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}