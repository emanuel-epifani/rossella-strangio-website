import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { serviziContent } from '@/content/servizi'
import { Brain, HeartPulse, Users, GraduationCap, UserCheck, Clock, Video, Phone, FileText, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function ComePossoAiutarti() {
  const icons = {
    1: Brain,
    2: HeartPulse,
    3: Users,
    4: GraduationCap,
    5: UserCheck
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header verde scuro */}
        <section className="bg-primary py-10">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">{serviziContent.title}</h1>
            <p className="text-lg text-white/90 mt-2 whitespace-pre-line">{serviziContent.intro}</p>
          </div>
        </section>

        {/* Card con icona e descrizione */}
        <section className="pt-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviziContent.services.map((service) => {
                const Icon = icons[service.id as keyof typeof icons]
                return (
                  <div
                    key={service.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="flex justify-center mb-4">
                      {service.image ? (
                        <div className="w-full h-48 relative rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground text-center mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                      {service.fullDescription}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">{service.price}</p>
                        {service.priceNote && (
                          <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line">{service.priceNote}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Come funziona */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="section-title">
              <h2>{serviziContent.howItWorks.title}</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {serviziContent.howItWorks.items.map((item, index) => {
                const iconMap = [Calendar, Clock, Video, FileText, Phone]
                const Icon = iconMap[index % iconMap.length]
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
