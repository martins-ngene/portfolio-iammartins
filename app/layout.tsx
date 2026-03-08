import type { Metadata, Viewport } from 'next'
import { Syne, Playfair_Display, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Martins Ngene — Full Stack Engineer | TypeScript, GraphQL, Automation',
  description:
    'Martins Ngene is a Full Stack Engineer specialising in TypeScript, GraphQL, React, Next.js, Node.js, and automation systems. Building scalable web architecture and modern applications.',
  keywords: [
    'Martins Ngene',
    'Full Stack Engineer',
    'Full Stack Developer',
    'Software Engineer',
    'TypeScript Developer',
    'GraphQL Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Automation Engineer',
    'Web Developer',
    'Frontend Engineer',
    'Backend Engineer',
  ],
  authors: [{ name: 'Martins Ngene' }],
  creator: 'Martins Ngene',
  metadataBase: new URL('https://martinsngene.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Martins Ngene — Full Stack Engineer',
    description:
      'Full Stack Engineer specialising in TypeScript, GraphQL, React, Next.js, and automation systems. Building scalable web architecture.',
    siteName: 'Martins Ngene',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martins Ngene — Full Stack Engineer',
    description:
      'Full Stack Engineer specialising in TypeScript, GraphQL, React, Next.js, and automation systems.',
    creator: '@martinsngene',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F5F0',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Martins Ngene',
  url: 'https://martinsngene.com',
  jobTitle: 'Full Stack Engineer',
  description:
    'Full Stack Engineer specialising in TypeScript, GraphQL, React, Next.js, Node.js, and automation systems.',
  knowsAbout: [
    'TypeScript',
    'GraphQL',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Docker',
    'Automation',
    'Web Development',
    'Software Engineering',
  ],
  sameAs: ['https://github.com/martins-ngene', 'https://linkedin.com/in/martinsngene'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${playfair.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
