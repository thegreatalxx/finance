import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryInfo, getArticlesByCategory, getArticleContent, categoryList } from '@/lib/articles'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

interface Props {
  params: { category: string; slug: string }
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []
  
  for (const cat of categoryList) {
    const articles = await getArticlesByCategory(cat.slug)
    for (const article of articles) {
      params.push({
        category: cat.slug,
        slug: article.slug,
      })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: Props) {
  const category = getCategoryInfo(params.category)
  const title = params.slug.replace(/-/g, ' ').replace(/^\d+_/, '')
  return {
    title: `${title} | ${category?.name || 'Article'} | TheAlxLabs Finance Learn`,
  }
}

export default async function ArticlePage({ params }: Props) {
  const category = getCategoryInfo(params.category)
  if (!category) notFound()

  const article = await getArticleContent(params.category, params.slug)
  if (!article) notFound()

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(article.content)
  const contentHtml = processedContent.toString()

  return (
    <main>
      <div className="article-detail">
        <div className="breadcrumb">
          <Link href="/">Learn</Link>
          <span>›</span>
          <Link href={`/${params.category}`}>{category.name}</Link>
          <span>›</span>
          <span>Article</span>
        </div>

        <h1>{article.title}</h1>
        <div className="author">By {article.author} · Updated {article.date}</div>

        <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div className="disclaimer">
          <strong>Disclaimer:</strong> Wealthsimple's Learn pages are meant to be educational. Every story is sourced from and vetted by subject matter experts. This article is not investment advice, a recommendation to buy or sell assets or securities, or any other kind of professional advice.
        </div>

        <div className="related-categories">
          {categoryList.filter(c => c.slug !== params.category).slice(0, 4).map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`} className="related-category">
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}