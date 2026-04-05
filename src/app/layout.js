import './globals.css'

export const metadata = {
  title: 'Tanjim Alam — MERN Stack Developer',
  description: 'I build scalable, high-performance web applications using React, Next.js, and Node.js.',
  keywords: 'MERN Stack Developer, React, Next.js, Node.js, SaaS, CRM, Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
