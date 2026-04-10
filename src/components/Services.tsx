'use client'

import Image from 'next/image'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>Servizi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="bg-card p-8 text-center border-t-4 border-t-muted">
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 