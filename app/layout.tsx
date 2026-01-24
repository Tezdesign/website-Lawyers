import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Beaumont & Associés - Cabinet d\'Avocats | Défense Juridique d\'Excellence',
  description: 'Cabinet d\'avocats spécialisé en droit des affaires, immobilier, droit pénal et civil. 20+ ans d\'expérience, 500+ clients satisfaits. Consultation gratuite.',
  keywords: ['avocats', 'cabinet juridique', 'droit des affaires', 'conseil juridique'],
  metadataBase: new URL('https://beaumont-associes.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://beaumont-associes.fr',
    siteName: 'Beaumont & Associés',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#14101a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
