import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { serviziContent } from '@/content/servizi'
import { Brain, HeartPulse, Users, GraduationCap, UserCheck } from 'lucide-react'
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
        <section className="py-16 bg-white">
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
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {service.fullDescription}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Outro */}
        <section className="py-8 bg-gray-50">
          <div className="container max-w-3xl text-center">
            <p className="text-muted-foreground">{serviziContent.outro}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
