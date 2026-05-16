import { getAllArticles, categoryList } from '@/lib/articles'

export default async function sitemap() {
  const articles = await getAllArticles()
  const baseUrl = 'https://thealxlabsfinance.com'

  const staticRoutes = categoryList.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/${article.categorySlug}/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...staticRoutes,
    ...articleRoutes,
  ]
}