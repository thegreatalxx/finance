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

function formatSlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/_/g, ' ').replace(/^\d+ /, '')
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategoryInfo(params.category)
  if (!category) notFound()

  const articles = await getArticlesByCategory(params.category)

  return (
    <div className="category-page">
      <h1>{category.name}</h1>
      <p className="subtitle">{category.description}</p>

      <div className="article-list">
        {articles.map((article) => (
          <Link key={article.slug} href={`/${params.category}/${article.slug}`} className="article-card">
            <h3>{formatSlug(article.slug)}</h3>
            <div className="meta">Learn more</div>
          </Link>
        ))}
      </div>
    </div>
  )
}