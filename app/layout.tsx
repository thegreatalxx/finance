'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { categoryList } from '@/lib/articles'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const pillars = [
    { name: 'Investing', slug: 'investing' },
    { name: 'Saving', slug: 'saving' },
    { name: 'Taxes', slug: 'taxes' },
    { name: 'Accounts', slug: 'accounts' },
    { name: 'Home Buying', slug: 'home-buying' },
    { name: 'Retirement', slug: 'retirement' },
  ]

  return (
    <html lang="en">
      <body>
        <div className="layout">
          <nav className="nav">
            <div className="nav-inner">
              <Link href="/" className="nav-logo">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#e3b94d"/>
                  <path d="M8 24V12L16 8L24 12V24L16 20L8 24Z" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="14" r="3" fill="#1a1a1a"/>
                </svg>
                TheAlxLabs
              </Link>

              <div className="nav-links">
                {pillars.map((cat) => (
                  <Link key={cat.slug} href={`/${cat.slug}`} className="nav-link">
                    {cat.name}
                  </Link>
                ))}
                <Link href="/budgeting" className="nav-link">Budgeting</Link>
                <Link href="/planning" className="nav-link">Planning</Link>
              </div>

              <div className="nav-actions">
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                  {theme === 'light' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"/>
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                  )}
                </button>
                <Link href="/" className="btn-primary">Get Started</Link>
              </div>
            </div>
          </nav>

          <main className="main">
            {children}
          </main>

          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-logo">TheAlxLabs Finance</div>
              <p>© 2026 TheAlxLabs Finance. Built for Canadians.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}