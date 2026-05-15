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
  'budgeting': {
    name: 'Budgeting',
    slug: 'budgeting',
    image: '/images/budgeting.svg',
    description: 'Monthly budgets, tracking expenses, and money management',
  },
  'estate-planning': {
    name: 'Estate Planning',
    slug: 'estate-planning',
    image: '/images/estate.svg',
    description: 'Wills, trusts, power of attorney, and end-of-life planning',
  },
  'insurance': {
    name: 'Insurance',
    slug: 'insurance',
    image: '/images/insurance.svg',
    description: 'Life, health, auto, home, and disability insurance',
  },
  'debt': {
    name: 'Debt Management',
    slug: 'debt',
    image: '/images/debt.svg',
    description: 'Paying off loans, credit cards, and student debt strategies',
  },
  'banking': {
    name: 'Banking',
    slug: 'banking',
    image: '/images/banking.svg',
    description: 'Choosing banks, digital banking, and account types',
  },
  'career': {
    name: 'Career & Income',
    slug: 'career',
    image: '/images/career.svg',
    description: 'Salary negotiation, side hustles, and income growth',
  },
  'family': {
    name: 'Family Finance',
    slug: 'family',
    image: '/images/family.svg',
    description: 'RESP, teaching kids about money, and family finances',
  },
  'climate': {
    name: 'Climate Finance',
    slug: 'climate',
    image: '/images/climate.svg',
    description: 'ESG investing, green bonds, and sustainable finance',
  },
  'planning': {
    name: 'Financial Planning',
    slug: 'planning',
    image: '/images/planning.svg',
    description: 'Goal setting, net worth, and comprehensive financial plans',
  },
}

export const categoryList = Object.values(categories)

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
  'budgeting': 'Budgeting',
  'estate-planning': 'Estate Planning',
  'insurance': 'Insurance',
  'debt': 'Debt',
  'banking': 'Banking',
  'career': 'Career',
  'family': 'Family',
  'climate': 'Climate',
  'planning': 'Planning',
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
      const filePath = path.join(dirPath, filename)
      const content = fs.readFileSync(filePath, 'utf-8')
      const titleMatch = content.match(/^# (.+)$/m)
      const title = titleMatch ? titleMatch[1].trim() : formatSlug(slug)
      return {
        slug,
        title,
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