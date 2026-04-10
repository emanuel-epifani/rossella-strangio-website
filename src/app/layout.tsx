import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Dott.ssa Rossella Strangio | Psicologa a Torino – Consulenze Online e In Studio',
  description: '🔹 Psicologa specializzata a Torino. Prima seduta GRATUITA. Terapia per ansia, depressione, attacchi di panico. ✅ Online e in studio. ☎️ 334 307 1131',
  keywords: 'psicologa torino, psicologo torino, terapia torino, ansia torino, depressione torino, terapia online torino, psicologa zona centro torino, prima seduta gratuita',
  authors: [{ name: 'Dott.ssa Rossella Strangio' }],
  creator: 'Dott.ssa Rossella Strangio',
  publisher: 'Dott.ssa Rossella Strangio',
  robots: 'index, follow',
  metadataBase: new URL('https://rossella-strangio.it'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://rossella-strangio.it',
    title: 'Dott.ssa Rossella Strangio | Psicologa a Torino – Consulenze Online e In Studio',
    description: '🔹 Psicologa specializzata a Torino. Prima seduta GRATUITA. Terapia per ansia, depressione, attacchi di panico. ✅ Online e in studio.',
    siteName: 'Dott.ssa Rossella Strangio - Psicologa',
    images: [
      {
        url: '/images/ElenaMininni.jpg',
        width: 1200,
        height: 630,
        alt: 'Dott.ssa Rossella Strangio - Psicologa a Torino',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rossella_strangio',
    creator: '@rossella_strangio',
    title: 'Dott.ssa Rossella Strangio | Psicologa a Torino',
    description: 'Prima seduta GRATUITA. Terapia per ansia, depressione, attacchi di panico. Online e in studio a Torino.',
    images: ['/images/ElenaMininni.jpg'],
  },
  other: {
    'geo.region': 'IT-TO',
    'geo.placename': 'Torino',
    'geo.position': '45.0703;7.6869',
    'ICBM': '45.0703, 7.6869',
    'DC.title': 'Psicologa Torino - Dott.ssa Rossella Strangio',
    'rating': '5.0',
    'locality': 'Torino',
    'region': 'Piemonte',
    'country-name': 'Italia',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness", "ProfessionalService"],
  "name": "Dott.ssa Rossella Strangio - Psicologa",
  "alternateName": "Rossella Strangio Psicologa Torino",
  "image": "/images/ElenaMininni.jpg",
  "url": "https://rossella-strangio.it",
  "telephone": "+393343071131",
  "email": "rossella.strangio@gmail.com",
  "description": "Psicologa specializzata a Torino. Terapia per ansia, depressione, attacchi di panico. Consulenze online e in studio. Prima seduta senza impegno.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Torino",
    "addressRegion": "TO",
    "addressCountry": "IT",
    "postalCode": "10100"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.0703",
    "longitude": "7.6869"
  },
  "areaServed": {
    "@type": "City",
    "name": "Torino",
    "sameAs": "https://it.wikipedia.org/wiki/Torino"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "priceRange": "€€",
  "paymentAccepted": ["Cash", "Invoice", "Bank Transfer"],
  "currenciesAccepted": "EUR",
  "medicalSpecialty": ["Psicologia"],
  "founder": {
    "@type": "Person",
    "name": "Rossella Strangio",
    "jobTitle": "Psicologa",
    "worksFor": {
      "@type": "Organization",
      "name": "Dott.ssa Rossella Strangio - Psicologa"
    }
  },
  "availableService": [
    {
      "@type": "MedicalTherapy",
      "name": "Terapia per Adulti",
      "description": "Percorsi individuali per affrontare stress, ansia, depressione, difficoltà relazionali",
      "serviceType": "Psychological Therapy",
      "provider": {
        "@type": "Person",
        "name": "Dott.ssa Rossella Strangio"
      }
    },
    {
      "@type": "MedicalTherapy",
      "name": "Terapia di Coppia",
      "description": "Supporto per coppie che desiderano migliorare la comunicazione e risolvere conflitti",
      "serviceType": "Couples Therapy",
      "provider": {
        "@type": "Person",
        "name": "Dott.ssa Rossella Strangio"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Psicologici",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Terapia Individuale",
          "description": "Sedute individuali per adulti"
        },
        "price": "50",
        "priceCurrency": "EUR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Terapia di Coppia",
          "description": "Sedute per coppie"
        },
        "price": "60",
        "priceCurrency": "EUR"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        {/* Meta Description - Explicit for SEO */}
        <meta name="description" content="🔹 Psicologa specializzata a Torino. Prima seduta GRATUITA. Terapia per ansia, depressione, attacchi di panico. ✅ Online e in studio. ☎️ 334 307 1131" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/ElenaMininni.jpg" as="image" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#8A9A5B" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Vai al contenuto principale
        </a>
        {children}
      </body>
    </html>
  )
}
