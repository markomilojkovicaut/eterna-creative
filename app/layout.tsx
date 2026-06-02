import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eterna Creative Agency — Idea to Revenue',
  description:
    'We combine product strategy, lean engineering, and growth systems to take products from validated idea to first revenue — and beyond.',
  keywords: ['product strategy', 'MVP development', 'growth systems', 'design agency', 'AI integration'],
  openGraph: {
    title: 'Eterna Creative Agency',
    description: 'Digital Product Studio — Idea to Revenue',
    url: 'https://eternacreative.com',
    siteName: 'Eterna Creative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eterna Creative Agency',
    description: 'Digital Product Studio — Idea to Revenue',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-plus-jakarta antialiased">
        {children}
      </body>
    </html>
  )
}
