import Link from 'next/link'
import { categoryList } from '@/lib/articles'
import SearchBox from '@/components/SearchBox'

export default function HomePage() {
  return (
    <div className="home-content">
      <h1>Personal Finance 101</h1>
      <p className="intro">
        Expert financial guidance for Canadians. From RRSPs to stock trading, 
        learn everything you need to build wealth and secure your future.
      </p>

      <SearchBox />

      <div className="category-grid">
        {categoryList.map((category) => (
          <Link key={category.slug} href={`/${category.slug}`} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-card-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}