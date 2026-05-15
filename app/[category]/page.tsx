import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryInfo, getArticlesByCategory, categoryList } from '@/lib/articles'

interface Props {
  params: { category: string }
}

export async function generateStaticParams() {
  return categoryList.map((cat) => ({
    category: cat.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const category = getCategoryInfo(params.category)
  if (!category) return { title: 'Not Found' }
  return {
    title: `${category.name} | TheAlxLabs Finance Learn`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategoryInfo(params.category)
  if (!category) notFound()

  const articles = await getArticlesByCategory(params.category)

  return (
    <main>
      <div className="category-hero">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>

      <div className="featured-article">
        <div className="image" style={{ backgroundImage: `url(${category.image})` }} />
        <div className="content">
          <span className="tag">Featured</span>
          <h2>{articles[0]?.slug.replace(/-/g, ' ').replace(/^\d+_/, '') || category.name}</h2>
          <p>Learn everything you need to know about {category.name.toLowerCase()} with our comprehensive guide.</p>
          <Link href={`/${params.category}/${articles[0]?.slug}`} className="read-more">
            Read article →
          </Link>
        </div>
      </div>

      <div className="article-list">
        {articles.slice(1).map((article) => (
          <Link key={article.slug} href={`/${params.category}/${article.slug}`} className="article-card">
            <h3>{article.slug.replace(/-/g, ' ').replace(/^\d+_/, '')}</h3>
            <div className="meta">{category.name}</div>
          </Link>
        ))}
      </div>

      <div className="related-categories">
        {categoryList.filter(c => c.slug !== params.category).slice(0, 4).map((cat) => (
          <Link key={cat.slug} href={`/${cat.slug}`} className="related-category">
            <img src={cat.image} alt={cat.name} />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to put your money to work?</h2>
        <p>Join the 3 million Canadians choosing Wealthsimple as their home for investing, trading, and more.</p>
        <Link href="https://www.wealthsimple.com/en-ca/" target="_blank">Start investing</Link>
      </div>
    </main>
  )
}