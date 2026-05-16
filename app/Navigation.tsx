'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BackToTop from '../components/BackToTop'

const categories = [
  'Investing', 'Saving', 'Taxes', 'Accounts', 'Home Buying', 'Retirement', 
  'Crypto', 'Options', 'Borrowing', 'Budgeting', 'Estate Planning', 
  'Insurance', 'Debt', 'Banking', 'Career', 'Family', 'Climate', 'Planning'
]

const categorySlugs = [
  'investing', 'saving', 'taxes', 'accounts', 'home-buying', 'retirement',
  'crypto', 'options', 'borrowing', 'budgeting', 'estate-planning',
  'insurance', 'debt', 'banking', 'career', 'family', 'climate', 'planning'
]

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <rect width="32" height="32" rx="6" fill="#e3b94d"/>
              <path d="M16 7L8 11v10l8 4 8-4V11l-8-4z" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              <path d="M16 15v6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 17l4 2 4-2" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            TheAlxFinance
          </Link>

          <div className="nav-links">
            {categorySlugs.map((slug, i) => (
              <Link key={slug} href={`/${slug}`} className="nav-link">
                {categories[i]}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {categorySlugs.map((slug, i) => (
            <Link key={slug} href={`/${slug}`} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              {categories[i]}
            </Link>
          ))}
        </div>
      </nav>

      <main className="main-content">
        {children}
      </main>
      
      <BackToTop />

      <footer>
        <p>TheAlxFinance © 2026</p>
      </footer>
    </div>
  )
}