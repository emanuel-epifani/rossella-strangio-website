import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { chiSonoContent } from '@/content/chi-sono'

export default function ChiSono() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header verde scuro */}
        <section className="bg-primary py-10">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{chiSonoContent.title}</h1>
            <h2 className="text-2xl font-light text-white/90 mb-2">{chiSonoContent.intro.role}</h2>
            <p className="text-lg text-white/80 mb-2">{chiSonoContent.intro.specialization}</p>
            <p className="text-lg text-white/80 mb-4">{chiSonoContent.intro.expertise}</p>
            <p className="text-base text-white/70">
              {chiSonoContent.intro.registration.order} {chiSonoContent.intro.registration.number}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container max-w-2xl">
            {/* Formazione - Timeline */}
            <section className="mb-20">
              <h2 className="text-3xl font-semibold text-foreground mb-12 pb-4 border-b border-gray-200">Formazione</h2>
              <div className="relative">
                {/* Linea verticale */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
                
                <div className="space-y-12">
                  {chiSonoContent.education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Punto sulla timeline */}
                      <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2"></div>
                      
                      <div className="mb-2">
                        <span className="text-sm font-semibold text-primary">{edu.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground mb-2">{edu.university}</p>
                      {edu.field && <p className="text-sm text-muted-foreground mb-2">{edu.field}</p>}
                      {edu.details && <p className="text-sm text-muted-foreground mb-3">{edu.details}</p>}
                      {edu.activities && (
                        <ul className="space-y-1 ml-4">
                          {edu.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-muted-foreground">
                              • {activity}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Esperienza Lavorativa */}
            <section className="mb-20">
              <h2 className="text-3xl font-semibold text-foreground mb-12 pb-4 border-b border-gray-200">Esperienza Lavorativa</h2>
              <div className="relative pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-1/2"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-primary">Dal {chiSonoContent.currentWork.since}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{chiSonoContent.currentWork.location}</h3>
                <ul className="space-y-2 ml-4">
                  {chiSonoContent.currentWork.activities.map((activity, index) => (
                    <li key={index} className="text-muted-foreground">
                      • {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Il Mio Approccio */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-foreground mb-12 pb-4 border-b border-gray-200">Il Mio Approccio</h2>
              
              {/* Target */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">A chi mi rivolgo</h3>
                <div className="flex flex-wrap gap-4">
                  {chiSonoContent.approach.target.map((target, index) => (
                    <span key={index} className="px-6 py-3 bg-gray-50 text-foreground rounded-lg">
                      {target}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metodologia */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Metodologia</h3>
                <ul className="space-y-3 mb-6">
                  {chiSonoContent.approach.methodology.map((method, index) => (
                    <li key={index} className="text-muted-foreground">
                      • {method}
                    </li>
                  ))}
                </ul>
                <p className="text-base italic text-muted-foreground border-l-4 border-primary pl-4">
                  {chiSonoContent.approach.philosophy}
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
