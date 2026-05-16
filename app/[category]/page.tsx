import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryInfo, getArticlesByCategory, categoryList, formatSlug, calculateReadingTime } from '@/lib/articles'

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
    title: `${category.name} | TheAlxLabs Finance`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategoryInfo(params.category)
  if (!category) notFound()

  const articles = await getArticlesByCategory(params.category)

  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span>{category.name}</span>
      </div>

      <h1>{category.name}</h1>
      <p className="subtitle">{category.description}</p>

      <div className="article-list">
        {articles.map((article) => (
          <Link key={article.slug} href={`/${params.category}/${article.slug}`} className="article-card">
            <h3>{article.title}</h3>
            <div className="meta">
              <span>Learn more</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}