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

export const skills = [
  {
    category: 'Frontend',
    icon: '⬡',
    color: '#00e5ff',
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: '⬡',
    color: '#7c6af7',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth'],
  },
  {
    category: 'Database',
    icon: '⬡',
    color: '#f5a623',
    items: ['MongoDB', 'MySQL', 'Redis', 'Mongoose', 'Aggregation'],
  },
  {
    category: 'DevOps & Tools',
    icon: '⬡',
    color: '#00d4aa',
    items: ['Docker', 'Git', 'Vercel', 'DigitalOcean', 'CI/CD'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Multi-Tenant Real Estate CRM',
    badge: 'FLAGSHIP PROJECT',
    badgeColor: '#f5a623',
    description:
      'A SaaS-based CRM platform supporting multiple real estate companies with role-based access, lead management, and an analytics dashboard — built to scale.',
    features: [
      'Multi-tenant architecture with data isolation',
      'Role-based authentication (Admin / Agent)',
      'Lead pipeline management & tracking',
      'Real-time notifications via Socket.io',
      'Analytics dashboard with MongoDB aggregation',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Docker', 'Redux', 'Socket.io'],
    impact: [
      { metric: '35%', label: 'API response time reduced' },
      { metric: '5+', label: 'Companies onboarded' },
      { metric: '40%', label: 'Performance improvement' },
    ],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-cyan-500/10 to-violet-600/10',
    accentColor: '#00e5ff',
  },
  {
    id: 2,
    title: 'HomeLineTeam',
    badge: 'LIVE PROJECT',
    badgeColor: '#00e5ff',
    description:
      'A real estate platform connecting buyers, sellers, and agents with seamless property listings, search, and communication features.',
    features: [
      'Advanced property search & filtering',
      'Agent-client messaging system',
      'Property listing management',
      'Interactive map integration',
      'Mobile-responsive design',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind'],
    impact: [
      { metric: '60%', label: 'Faster search response' },
      { metric: '200+', label: 'Properties listed' },
      { metric: '15+', label: 'Reusable components' },
    ],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    accentColor: '#7c6af7',
  },
  {
    id: 3,
    title: 'Brikzy',
    badge: 'SaaS PRODUCT',
    badgeColor: '#00d4aa',
    description:
      'A modern property management SaaS with tenant portals, rent tracking, maintenance requests, and owner dashboards.',
    features: [
      'Tenant & owner portal separation',
      'Automated rent tracking & reminders',
      'Maintenance request workflow',
      'Document management',
      'Financial reporting',
    ],
    stack: ['React', 'Express', 'MySQL', 'Redux', 'Docker'],
    impact: [
      { metric: '50%', label: 'Reduced manual tasks' },
      { metric: '3x', label: 'Faster reporting' },
      { metric: '100%', label: 'Uptime on DigitalOcean' },
    ],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    accentColor: '#00d4aa',
  },
]

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
