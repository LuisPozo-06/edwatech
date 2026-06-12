import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { StructuredData } from '@/components/seo/StructuredData'
import { META_DEFAULTS, SITE_CONFIG } from '@/lib/constants'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: META_DEFAULTS.title,
    template: '%s | Edwar Tech',
  },
  description: META_DEFAULTS.description,
  keywords: META_DEFAULTS.keywords,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    siteName: 'Edwar Tech',
    title: META_DEFAULTS.title,
    description: META_DEFAULTS.description,
    images: [{ url: META_DEFAULTS.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: META_DEFAULTS.title,
    description: META_DEFAULTS.description,
    images: [META_DEFAULTS.ogImage],
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
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
