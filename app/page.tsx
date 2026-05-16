import Link from 'next/link'
import { categoryList } from '@/lib/articles'
import { CategoryIcon } from '@/components/CategoryIcon'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Master Your Money</h1>
        <p>
          Expert financial guidance for Canadians. From RRSPs to stock trading, 
          learn everything you need to build wealth and secure your future.
        </p>
      </section>

      <div className="bento-grid">
        {categoryList.map((category, index) => {
          const size = index < 2 ? 'large' : index < 6 ? 'medium' : 'small'
          return (
            <Link key={category.slug} href={`/${category.slug}`} className={`category-card ${size}`}>
              <CategoryIcon slug={category.slug} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          )
        })}
      </div>
    </>
  )
}