import { NextResponse } from 'next/server'

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Google bots
User-agent: Googlebot
Allow: /

# Bing bots  
User-agent: Bingbot
Allow: /

# Block admin and sensitive areas
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://rossella-strangio.it/sitemap.xml

# Crawl delay (be respectful)
Crawl-delay: 1`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
} 