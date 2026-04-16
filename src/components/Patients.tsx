import { User, Users, Brain } from 'lucide-react'
import Link from "next/link";
import { homeContent } from '@/content/text'

export default function Patients() {
  return (
    <section id="patients" className="py-20 bg-muted">
      <div className="container text-center">
        <div className="section-title">
          <h2>{homeContent.patients.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
          {/* Adulti */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{homeContent.patients.items[0].title}</h3>
            <p className="text-foreground leading-relaxed">
              {homeContent.patients.items[0].description}
            </p>
          </div>

          {/* Coppie */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{homeContent.patients.items[1].title}</h3>
            <p className="text-foreground leading-relaxed">
              {homeContent.patients.items[1].description}
            </p>
          </div>

          {/* Anziani/Neuropsicologia */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{homeContent.patients.items[2].title}</h3>
            <p className="text-foreground leading-relaxed">
              {homeContent.patients.items[2].description}
            </p>
          </div>
        </div>
        <Link
            href="/servizi"
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
        >
          {homeContent.patients.linkText}
        </Link>
      </div>
    </section>
  )
} 