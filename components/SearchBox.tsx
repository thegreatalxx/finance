'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [articles, setArticles] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const filtered = articles
      .filter(a => 
        a.title.toLowerCase().includes(q) ||
        a.categoryName.toLowerCase().includes(q)
      )
      .slice(0, 8)
    setResults(filtered)
  }, [query, articles])

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <div className="search-results">
          {results.map((article) => (
            <Link 
              key={`${article.categorySlug}-${article.slug}`} 
              href={`/${article.categorySlug}/${article.slug}`}
              className="search-result-item"
            >
              <h4>{article.title}</h4>
              <p>{article.categoryName}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}