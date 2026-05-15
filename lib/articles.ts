const categories = {
  'investing': {
    name: 'Investing',
    slug: 'investing',
    image: '/images/investing.webp',
    description: 'Stock market, ETFs, options, futures, and trading strategies',
  },
  'saving': {
    name: 'Saving',
    slug: 'saving',
    image: '/images/saving.webp',
    description: 'Savings accounts, budgeting, emergency funds, and financial planning',
  },
  'taxes': {
    name: 'Taxes',
    slug: 'taxes',
    image: '/images/taxes.webp',
    description: 'Tax brackets, capital gains, deductions, and tax-efficient investing',
  },
  'accounts': {
    name: 'Accounts',
    slug: 'accounts',
    image: '/images/accounts.webp',
    description: 'TFSA, RRSP, FHSA, and other registered accounts',
  },
  'home-buying': {
    name: 'Home Buying',
    slug: 'home-buying',
    image: '/images/home_buying.webp',
    description: 'Mortgages, down payments, and home ownership guides',
  },
  'retirement': {
    name: 'Retirement',
    slug: 'retirement',
    image: '/images/retirement.webp',
    description: 'Retirement planning, CPP/OAS, and withdrawal strategies',
  },
  'crypto': {
    name: 'Crypto',
    slug: 'crypto',
    image: '/images/crypto.webp',
    description: 'Cryptocurrency investing and staking',
  },
  'options': {
    name: 'Options',
    slug: 'options',
    image: '/images/options.png',
    description: 'Options trading education and strategies',
  },
  'borrowing': {
    name: 'Borrowing',
    slug: 'borrowing',
    image: '/images/borrowing.png',
    description: 'Loans, credit, and debt management',
  },
}

export const categoryList = Object.values(categories)

const folderMap: Record<string, string> = {
  'investing': 'Investing',
  'saving': 'Saving',
  'taxes': 'Taxes',
  'accounts': 'Accounts',
  'home-buying': 'Home Buying',
  'retirement': 'Retirement',
  'crypto': 'Crypto',
  'options': 'Options',
  'borrowing': 'Borrowing',
}

export async function getArticlesByCategory(categorySlug: string) {
  const fs = (await import('fs')).default
  const path = await import('path')
  
  const folder = folderMap[categorySlug]
  if (!folder) return []

  const dirPath = path.join(process.cwd(), folder)
  
  try {
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'))
    
    return files.map(filename => {
      const slug = filename.replace('.md', '')
      return {
        slug,
        filename: `${folder}/${filename}`,
      }
    })
  } catch {
    return []
  }
}

export async function getArticleContent(categorySlug: string, articleSlug: string) {
  const fs = (await import('fs')).default
  const path = await import('path')
  
  const folder = folderMap[categorySlug]
  if (!folder) return null

  const filePath = path.join(process.cwd(), folder, `${articleSlug}.md`)
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    const titleMatch = fileContent.match(/^# (.+)$/m)
    const authorMatch = fileContent.match(/^By\s*(.+)$/m)
    const dateMatch = fileContent.match(/^Updated\s*(.+)$/m)
    
    return {
      content: fileContent,
      title: titleMatch ? titleMatch[1].trim() : articleSlug.replace(/-/g, ' ').replace(/_/g, ' ').replace(/^\d+ /, ''),
      author: authorMatch ? authorMatch[1].trim() : 'The Editors',
      date: dateMatch ? dateMatch[1].trim() : '',
    }
  } catch {
    return null
  }
}

export function getCategoryInfo(slug: string) {
  return (categories as Record<string, typeof categories[keyof typeof categories]>)[slug] || null
}

export { categories }

export function formatSlug(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/_/g, ' ').replace(/^\d+ /, '')
}