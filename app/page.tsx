import Link from 'next/link'
import { categoryList } from '@/lib/articles'

export default function HomePage() {
  return (
    <main>
      <div className="hero">
        <h1>TheAlxLabs Finance Learn</h1>
        <p>
          A comprehensive collection of personal finance articles and guides from Wealthsimple Learn, organized by category for easy reference.
        </p>
        <div className="source">
          Source: <a href="https://www.wealthsimple.com/en-ca/learn/" target="_blank" rel="noopener noreferrer">Wealthsimple Learn</a>
        </div>
      </div>

      <div className="category-grid">
        {categoryList.map((category) => (
          <Link key={category.slug} href={`/${category.slug}`} className="category-card">
            <img src={category.image} alt={category.name} loading="lazy" />
            <div className="category-card-content">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}