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
      <Link href="/" className="back-link">← Back to Home</Link>

      <div className="category-hero">
        <img src={category.image} alt={category.name} />
        <div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>{articles.length} articles</p>
        </div>
      </div>

      <div className="article-list">
        {articles.map((article) => (
          <Link key={article.slug} href={`/${params.category}/${article.slug}`} className="article-card">
            <h3>{article.slug.replace(/-/g, ' ').replace(/^\d+_/, '')}</h3>
          </Link>
        ))}
      </div>
    </main>
  )
}