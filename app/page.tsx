import Link from 'next/link'
import { categoryList } from '@/lib/articles'

export default function HomePage() {
  return (
    <main>
      <div className="hero">
        <h1>Personal finance 101</h1>
        <p>
          Personal finance is the art of managing your money. How much to save, where to invest and how to budget. 
          None of us are born knowing how to put together a smart, simple financial plan. That's why we're here.
        </p>
      </div>

      <div className="category-grid">
        {categoryList.map((category) => (
          <Link key={category.slug} href={`/${category.slug}`} className="category-card">
            <img src={category.image} alt={category.name} />
            <div className="category-card-content">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to break up with your bank?</h2>
        <p>Join the 3 million Canadians choosing Wealthsimple as a trusted place to invest, trade, save, and more.</p>
        <Link href="https://www.wealthsimple.com/en-ca/" target="_blank">Get started</Link>
      </div>
    </main>
  )
}