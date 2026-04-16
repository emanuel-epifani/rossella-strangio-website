'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { faqContent } from '@/content/text'
import { ChevronDown, ChevronUp } from 'lucide-react'

export const dynamic = 'force-static'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="page-header">
          <div className="container">
            <h1 className="mb-2 text-4xl font-bold">{faqContent.title}</h1>
            <p className="text-lg">{faqContent.subtitle}</p>
          </div>
        </section>

        {/* Accordion FAQ */}
        <section className="py-16 section-bg-white">
          <div className="container max-w-3xl">
            <div className="space-y-4">
              {faqContent.items.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{item.question}</span>
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-4 pt-2">
                      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
