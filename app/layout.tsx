import type { Metadata } from 'next'
import Link from 'next/link'
import { categoryList } from '@/lib/articles'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheAlxLabs Finance',
  description: 'Personal finance education from TheAlxLabs Finance',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <aside className="sidebar">
            <Link href="/" className="sidebar-logo">
              TheAlx<span>Finance</span>
            </Link>

            <div className="sidebar-section">
              <div className="sidebar-section-title">Categories</div>
              <ul className="sidebar-nav">
                {categoryList.map((cat) => (
                  <li key={cat.slug}>
                    <Link href={`/${cat.slug}`}>{cat.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          <main className="main-content">
            {children}
          </main>
        </div>
        
        <footer>
          <p>TheAlxLabs Finance © 2025</p>
        </footer>
      </body>
    </html>
  )
}