'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { services } from '@/data/services'
import { modalTexts } from '@/data/modal-texts'

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const openModal = (serviceId: string) => {
    setSelectedService(serviceId)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Servizi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="bg-gray-100 p-8 text-center border-t-4 border-t-gray-100">
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
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => openModal(service.id)}
                  className="text-accent hover:text-accent/80 font-semibold transition-colors"
                >
                  Leggi un caso di studio →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-xl font-bold text-primary">
                {services.find(s => s.id === selectedService)?.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Chiudi"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: modalTexts[selectedService] || '' 
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 