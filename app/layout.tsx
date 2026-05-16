import type { Metadata } from 'next'
import Navigation from './Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheAlxLabs Finance',
  description: 'Personal finance education from TheAlxLabs Finance',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  )
}