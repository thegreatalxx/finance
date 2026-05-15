import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheAlxLabs Finance Learn',
  description: 'Personal finance education from Wealthsimple Learn',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="nav-content">
            <Link href="/" className="logo">
              TheAlx<span>Finance</span>
            </Link>
            <Link href="https://www.wealthsimple.com/en-ca/" target="_blank" className="nav-cta">
              Get Started
            </Link>
          </div>
        </nav>
        {children}
        <footer>
          <p>
            Source: <a href="https://www.wealthsimple.com/en-ca/learn/" target="_blank">Wealthsimple Learn</a>
          </p>
        </footer>
      </body>
    </html>
  )
}