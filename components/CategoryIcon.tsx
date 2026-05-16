'use client'

import { 
  TrendingUp, PiggyBank, Receipt, Wallet, Home, Sparkles,
  Bitcoin, BarChart3, CreditCard, Calculator, FileText, Shield,
  Banknote, Briefcase, Users, Leaf, Target
} from 'lucide-react'

export const categoryIcons: Record<string, React.ReactNode> = {
  investing: <TrendingUp />,
  saving: <PiggyBank />,
  taxes: <Receipt />,
  accounts: <Wallet />,
  'home-buying': <Home />,
  retirement: <Sparkles />,
  crypto: <Bitcoin />,
  options: <BarChart3 />,
  borrowing: <CreditCard />,
  budgeting: <Calculator />,
  'estate-planning': <FileText />,
  insurance: <Shield />,
  debt: <Banknote />,
  banking: <Banknote />,
  career: <Briefcase />,
  family: <Users />,
  climate: <Leaf />,
  planning: <Target />,
}

export function CategoryIcon({ slug }: { slug: string }) {
  const Icon = categoryIcons[slug] || <Wallet />
  return (
    <div className="category-icon">
      {Icon}
    </div>
  )
}