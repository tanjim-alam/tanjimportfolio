export const personalInfo = {
  name: 'Tanjim Alam',
  title: 'MERN Stack Developer',
  subtitle: 'SaaS & CRM Specialist',
  tagline: 'I build scalable, high-performance web applications using React, Next.js, and Node.js.',
  badge: 'Built production-grade MERN applications with real-world users',
  email: 'tanjim@example.com',
  github: 'https://github.com/tanjimalam',
  linkedin: 'https://linkedin.com/in/tanjimalam',
  resumeUrl: '/tanjimresume.pdf',
  availability: 'Open to opportunities',
  about: `I'm a MERN Stack Developer with 2+ years of experience building production-grade applications, including a multi-tenant real estate CRM and SaaS dashboards.

I specialize in performance optimization, scalable backend architecture, and clean UI development using React and Next.js. What sets me apart is my focus on measurable impact — every feature I build is designed to move the needle.`,
}


export const caseStudy = {
  project: 'Multi-Tenant Real Estate CRM',
  problem:
    'Multiple real estate companies were struggling to manage leads, agents, and client data in silos — resulting in lost deals, duplicated effort, and zero visibility.',
  solution:
    'Built a fully multi-tenant SaaS CRM with isolated databases per company, role-based access control, a real-time notification system, and a comprehensive analytics layer using MongoDB aggregation pipelines.',
  results: [
    { label: 'API Response Time', before: '~800ms', after: '~520ms', delta: '↓ 35%' },
    { label: 'Lead Tracking Accuracy', before: 'Manual / Spreadsheets', after: 'Automated Pipeline', delta: '✓' },
    { label: 'Companies Supported', before: '1 (pilot)', after: '5+', delta: '↑ 5x' },
    { label: 'Dev Scalability', before: 'Monolith', after: 'Multi-tenant SaaS', delta: '✓' },
  ],
  learnings: [
    'Designed tenant isolation at the database query layer to prevent data leaks',
    'Used Redis caching on hot routes to cut load by 40%',
    'Built a reusable role-guard HOC to keep auth logic consistent across 20+ pages',
  ],
}

export const experience = [
  {
    company: 'Freelance / Independent',
    role: 'Full Stack MERN Developer',
    period: '2023 — Present',
    bullets: [
      'Engineered a multi-tenant CRM SaaS used by 5+ real estate companies, reducing API response times by 35%',
      'Built 15+ reusable React components across projects, cutting UI development time significantly',
      'Deployed and maintained production apps on DigitalOcean and Vercel with Docker containerization',
    ],
  },
  {
    company: 'Liv Exllence',
    role: 'MERN Stack Developer',
    period: '2024 — 2026',
    bullets: [
      'Developed RESTful APIs with Express.js and MongoDB serving 200+ concurrent users',
      'Implemented JWT-based authentication and role-based access control systems',
      'Optimized database queries using MongoDB aggregation, improving performance by 40%',
    ],
  },
]

export const achievements = [
  { icon: '⚡', title: '40% Performance Boost', desc: 'Optimized APIs using Redis caching and MongoDB aggregation pipelines' },
  { icon: '🧩', title: '15+ Reusable Components', desc: 'Built a component library used across multiple production projects' },
  { icon: '🏗️', title: 'Multi-tenant Architecture', desc: 'Designed scalable SaaS infrastructure supporting 5+ companies' },
  { icon: '🚀', title: '100% Uptime', desc: 'Maintained production apps with Docker + DigitalOcean deployment pipeline' },
]
