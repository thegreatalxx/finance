import Link from 'next/link'
import { categoryList } from '@/lib/articles'

export default function HomePage() {
  return (
    <div className="home-content">
      <h1>Personal finance 101</h1>
      <p className="intro">
        Personal finance is the art of managing your money. How much to save, where to invest 
        and how to budget. None of us are born knowing how to put together a smart, simple 
        financial plan. That's why we're here.
      </p>

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