import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryInfo, getArticleContent, categoryList } from '@/lib/articles'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

interface Props {
  params: { category: string; slug: string }
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []
  
  for (const cat of categoryList) {
    const fs = (await import('fs')).default
    const path = await import('path')
    
    const folderMap: Record<string, string> = {
      'investing': 'Investing',
      'saving': 'Saving',
      'taxes': 'Taxes',
      'accounts': 'Accounts',
      'home-buying': 'Home buying',
      'retirement': 'Retirement',
      'crypto': 'Crypto',
      'options': 'Options',
      'borrowing': 'Borrowing',
    }
    
    const folder = folderMap[cat.slug]
    if (folder) {
      try {
        const files = fs.readdirSync(path.join(process.cwd(), folder)).filter(f => f.endsWith('.md'))
        for (const filename of files) {
          params.push({
            category: cat.slug,
            slug: filename.replace('.md', ''),
          })
        }
      } catch {}
    }
  }
  
  return params
}

export async function generateMetadata({ params }: Props) {
  const category = getCategoryInfo(params.category)
  const title = params.slug.replace(/-/g, ' ').replace(/_/g, ' ').replace(/^\d+ /, '')
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
    <div>
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
        <strong>Disclaimer:</strong> Wealthsimple's Learn pages are meant to be educational. Every story is sourced from and vetted by subject matter experts. This article is not investment advice.
      </div>
    </div>
  )
}