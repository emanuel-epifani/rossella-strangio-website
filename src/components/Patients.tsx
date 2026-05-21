import { User, Users, Brain } from 'lucide-react'
import Link from "next/link";
import { homeContent } from '@/content/text'

export default function Patients() {
  return (
    <section id="patients" className="py-20 section-bg-muted">
      <div className="container text-center">
        <div className="section-title">
          <h2>{homeContent.patients.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Adulti */}
          <div className="card-base card-hover p-8 text-center">
            <div className="icon-circle-base mx-auto mb-6">
              <User />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{homeContent.patients.items[0].title}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {homeContent.patients.items[0].description}
            </p>
          </div>

          {/* Coppie */}
          <div className="card-base card-hover p-8 text-center">
            <div className="icon-circle-base mx-auto mb-6">
              <Users />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{homeContent.patients.items[1].title}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {homeContent.patients.items[1].description}
            </p>
          </div>

          {/* Anziani/Neuropsicologia */}
          <div className="card-base card-hover p-8 text-center">
            <div className="icon-circle-base mx-auto mb-6">
              <Brain />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{homeContent.patients.items[2].title}</h3>
            <p className="text-foreground/80 leading-relaxed">
              {homeContent.patients.items[2].description}
            </p>
          </div>
        </div>
        <Link
            href="/servizi"
            className="text-link"
        >
          {homeContent.patients.linkText}
        </Link>
      </div>
    </section>
  )
} 