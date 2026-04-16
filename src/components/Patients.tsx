import { User, Users, Brain } from 'lucide-react'
import Link from "next/link";

export default function Patients() {
  return (
    <section id="patients" className="py-20 bg-muted">
      <div className="container text-center">
        <div className="section-title">
          <h2>A chi mi rivolgo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ">
          {/* Adulti */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Adulti</h3>
            <p className="text-foreground leading-relaxed">
              Percorsi individuali per affrontare ansia, depressione, disturbi dell'umore, pensieri ossessivi e difficoltà emotive.
            </p>
          </div>

          {/* Coppie */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Coppie</h3>
            <p className="text-foreground leading-relaxed">
              Supporto per coppie che affrontano difficoltà comunicative, conflitti ricorrenti o momenti di crisi relazionale.
            </p>
          </div>

          {/* Anziani/Neuropsicologia */}
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Persone anziane</h3>
            <p className="text-foreground leading-relaxed">
              Valutazioni cognitive e interventi di stimolazione per difficoltà cognitive, anche in seguito a ictus o patologie neurodegenerative.
            </p>
          </div>
        </div>
        <Link
            href="/servizi"
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
        >
          Scopri di più sui miei servizi
        </Link>
      </div>
    </section>
  )
} 