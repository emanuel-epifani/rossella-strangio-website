import { Video, MapPin } from 'lucide-react'
import Link from 'next/link'
import { homeContent } from '@/content/text'

export default function Where() {
  return (
    <section id="where" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>{homeContent.where.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {/* Online */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{homeContent.where.items[0].title}</h3>
            <p className="text-foreground leading-relaxed">
              {homeContent.where.items[0].description}
            </p>
          </div>

          {/* In presenza */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{homeContent.where.items[1].title}</h3>
            <p className="text-foreground leading-relaxed">
              {homeContent.where.items[1].description}
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contattami" 
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            {homeContent.where.linkText}
          </Link>
        </div>
      </div>
    </section>
  )
} 