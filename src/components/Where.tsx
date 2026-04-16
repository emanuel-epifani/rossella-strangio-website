import { Video, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Where() {
  return (
    <section id="where" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Dove ricevo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Online */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Online</h3>
            <p className="text-foreground leading-relaxed">
              In videochiamata da lunedì a giovedì, 16:00-18:00. Un modo efficace per ricevere supporto psicologico senza spostamenti.
            </p>
          </div>

          {/* In presenza */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">In presenza</h3>
            <p className="text-foreground leading-relaxed">
              Nel mio studio di Torino il lunedì, 14:00-20:00. Un ambiente accogliente e riservato per i colloqui.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contattami" 
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Scopri indirizzo e dettagli
          </Link>
        </div>
      </div>
    </section>
  )
} 