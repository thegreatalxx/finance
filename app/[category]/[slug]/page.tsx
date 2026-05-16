import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryInfo, getArticlesByCategory, getArticleContent, categoryList, formatSlug, calculateReadingTime } from '@/lib/articles'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import ReadingProgress from '@/components/ReadingProgress'
import TableOfContents from '@/components/TableOfContents'

interface Props {
  params: { category: string; slug: string }
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []

  for (const cat of categoryList) {
    const fs = (await import('fs')).default
    const path = await import('path')
    const folderMap: Record<string, string> = {
      'investing': 'Investing', 'saving': 'Saving', 'taxes': 'Taxes', 'accounts': 'Accounts',
      'home-buying': 'Home buying', 'retirement': 'Retirement', 'crypto': 'Crypto',
      'options': 'Options', 'borrowing': 'Borrowing', 'budgeting': 'Budgeting',
      'estate-planning': 'Estate Planning', 'insurance': 'Insurance', 'debt': 'Debt',
      'banking': 'Banking', 'career': 'Career', 'family': 'Family', 'climate': 'Climate', 'planning': 'Planning',
    }

    const folder = folderMap[cat.slug]
    if (folder) {
      try {
        const files = fs.readdirSync(path.join(process.cwd(), folder)).filter(f => f.endsWith('.md'))
        for (const filename of files) {
          params.push({ category: cat.slug, slug: filename.replace('.md', '') })
        }
      } catch {}
    }
  }

  return params
}

export async function generateMetadata({ params }: Props) {
  const category = getCategoryInfo(params.category)
  const title = formatSlug(params.slug)
  return {
    title: `${title} | ${category?.name || 'Article'} | TheAlxLabs Finance`,
  }
}

function cleanMarkdown(content: string): string {
  let lines = content.split('\n')
  lines = lines.filter(line => !line.match(/^By[A-Za-z\s]+$/) && !line.match(/^Updated[A-Za-z0-9\s,]+$/))
  while (lines.length > 0 && (lines[0].startsWith('# ') || lines[0].trim() === '')) lines.shift()
  while (lines.length > 0 && lines[0].trim() === '---') lines.shift()
  while (lines.length > 0 && lines[lines.length - 1].trim() === '---') lines.pop()
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop()
  return lines.join('\n').trim()
}

export default async function ArticlePage({ params }: Props) {
  const category = getCategoryInfo(params.category)
  if (!category) notFound()

  const article = await getArticleContent(params.category, params.slug)
  if (!article) notFound()

  const cleanedContent = cleanMarkdown(article.content)
  const processedContent = await remark().use(remarkGfm).use(remarkHtml).process(cleanedContent)
  const contentHtml = processedContent.toString()
  const readTime = calculateReadingTime(cleanedContent)

  const relatedArticles = await getArticlesByCategory(params.category)
  const filteredRelated = relatedArticles.filter(a => a.slug !== params.slug).slice(0, 3)

  return (
    <>
      <ReadingProgress />
      
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <Link href={`/${params.category}`}>{category.name}</Link>
        <span>›</span>
        <span>{article.title}</span>
      </div>

      <div className="article-detail">
        <h1>{article.title}</h1>
        <div className="author">
          By {article.author}
          <span className="read-time-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {readTime} min read
          </span>
        </div>

        <div className="article-content-wrapper">
          <TableOfContents />
          
          <div className="article-content">
            <article className="article-body" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            <div className="share-buttons">
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(article.title)}`} className="share-btn" title="Share on Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(article.title)}`} className="share-btn" title="Share on LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {filteredRelated.length > 0 && (
              <div className="related-articles">
                <h3>Related Articles</h3>
                <div className="related-articles-grid">
                  {filteredRelated.map((related) => (
                    <Link key={related.slug} href={`/${params.category}/${related.slug}`} className="related-article-card">
                      <h4>{related.title}</h4>
                      <p>Learn more</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="disclaimer">
              <strong>Disclaimer:</strong> TheAlxLabs Finance Learn pages are meant to be educational. Every story is sourced from and vetted by subject matter experts. This article is not investment advice.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}