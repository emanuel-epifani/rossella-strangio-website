import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dott.ssa Rossella Strangio | Psicologa a Torino – Consulenze Online e In Studio',
  description: 'Psicologa Psicoterapueta a Torino e Online. Terapia per ansia, attacchi di panico, depressione teraia di coppia e anziani.',
  metadataBase: new URL('https://rossellastrangio.it'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: 'Dott.ssa Rossella Strangio | Psicologa e Psicoterapeuta',
    description: 'Psicologa e Psicoterapeuta cognitivo-comportamentale a Torino e Online. Terapia per ansia, depressione, attacchi di panico.',
    siteName: 'Dott.ssa Rossella Strangio - Psicologa',
    images: [
      {
        url: '/images/logo-website.png',
        width: 1200,
        height: 630,
        alt: 'Dott.ssa Rossella Strangio - Psicologa a Torino',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
