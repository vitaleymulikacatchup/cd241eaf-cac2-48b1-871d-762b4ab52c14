import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryzz - Share your thoughts anonymously',
  description: 'Create an account and start getting anonymous & secret messages from your friends! 😊😊😊',
  keywords: ['anonymous', 'messages', 'social', 'friends', 'secret'],
  authors: [{ name: 'Ryzz' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8B5CF6',
  openGraph: {
    title: 'Ryzz - Share your thoughts anonymously',
    description: 'Create an account and start getting anonymous & secret messages from your friends!',
    type: 'website',
    url: 'https://ryzz.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryzz - Share your thoughts anonymously',
    description: 'Create an account and start getting anonymous & secret messages from your friends!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}