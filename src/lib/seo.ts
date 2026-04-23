import type { Metadata } from 'next'
import { faqContent, serviziContent } from '@/content/text'

export const siteConfig = {
  siteUrl: 'https://rossellastrangio.it',
  siteName: 'Dott.ssa Rossella Strangio',
  businessName: 'Dott.ssa Rossella Strangio',
  defaultTitle: 'Dott.ssa Rossella Strangio | Psicologa e Psicoterapeuta a Torino e Online',
  defaultDescription:
    'Psicologa e psicoterapeuta cognitivo-comportamentale a Torino e online. Supporto per ansia, depressione, attacchi di panico, terapia di coppia e neuropsicologia clinica.',
  locale: 'it_IT',
  phone: '+39 334 307 1131',
  email: 'rossella.strangio.psicologa@gmail.com',
  ogImage: '/images/logo-website.png',
  portraitImage: '/images/chi-sono.png',
  socialProfiles: [
    'https://www.instagram.com/la_psicoross/',
    'https://www.linkedin.com/in/rossella-strangio-7b2b29320/',
    'https://ordinepsicologi.piemonte.it/albo-vista/?id=8933',
  ],
} as const

const sharedOpenGraphImages = [
  {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: 'Dott.ssa Rossella Strangio - Psicologa a Torino',
  },
]

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.businessName,
  authors: [{ name: siteConfig.businessName, url: siteConfig.siteUrl }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  category: 'healthcare',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    siteName: siteConfig.siteName,
    images: sharedOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
}

type PageMetadataInput = {
  title: string
  description: string
  pathname: string
}

export function absoluteUrl(pathname: string = '/') {
  return new URL(pathname, siteConfig.siteUrl).toString()
}

export function buildMetadata({ title, description, pathname }: PageMetadataInput): Metadata {
  const url = absoluteUrl(pathname)

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.siteName,
      images: sharedOpenGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.siteUrl}/#website`,
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    inLanguage: 'it-IT',
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.siteUrl}/#person`,
    name: siteConfig.businessName,
    honorificPrefix: 'Dott.ssa',
    jobTitle: 'Psicologa Psicoterapeuta',
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.portraitImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: siteConfig.socialProfiles,
    knowsAbout: [
      'Psicoterapia cognitivo-comportamentale',
      'Ansia',
      'Attacchi di panico',
      'Depressione',
      'Terapia di coppia',
      'Neuropsicologia clinica',
      'Supporto ai caregiver',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Vagnone 2',
      addressLocality: 'Torino',
      addressRegion: 'Piemonte',
      addressCountry: 'IT',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Psicologa Psicoterapeuta',
      occupationalCategory: 'Healthcare Practitioner',
      skills: 'Psicoterapia cognitivo-comportamentale e neuropsicologia clinica',
    },
    mainEntityOfPage: siteConfig.siteUrl,
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.siteUrl}/#localbusiness`,
    name: 'Studio di Psicologia Dott.ssa Rossella Strangio',
    description: siteConfig.defaultDescription,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.portraitImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Vagnone 2',
      addressLocality: 'Torino',
      addressRegion: 'Piemonte',
      addressCountry: 'IT',
    },
    areaServed: ['Torino', 'Online'],
    sameAs: siteConfig.socialProfiles,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: 'appointments',
        availableLanguage: ['Italian'],
        url: absoluteUrl('/contattami'),
      },
    ],
    founder: {
      '@id': `${siteConfig.siteUrl}/#person`,
    },
  }
}

export function getServicesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servizi di psicoterapia e neuropsicologia',
    itemListElement: serviziContent.services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        provider: {
          '@id': `${siteConfig.siteUrl}/#person`,
        },
        areaServed: ['Torino', 'Online'],
      },
    })),
  }
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

type BreadcrumbItem = {
  name: string
  pathname: string
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.pathname),
    })),
  }
}
