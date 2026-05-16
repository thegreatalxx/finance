'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Heading {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const elements = document.querySelectorAll('.article-body h2, .article-body h3')
    const items: Heading[] = []
    
    elements.forEach((el) => {
      const text = el.textContent || ''
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      el.id = id
      items.push({
        id,
        text,
        level: parseInt(el.tagName[1]),
      })
    })
    
    setHeadings(items)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <div className="table-of-contents">
      <h4>On this page</h4>
      <ul>
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeId === id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}