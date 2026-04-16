import { serviziContent } from '@/content/text'
import { Brain, HeartPulse, Users, GraduationCap, UserCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const icons = {
    1: Brain,
    2: HeartPulse,
    3: Users,
    4: GraduationCap,
    5: UserCheck
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Servizi</h2>
        </div>

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
                  {service.shortDescription}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/servizi" 
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Scopri tutti i servizi in dettaglio
          </Link>
        </div>
      </div>
    </section>
  )
} 