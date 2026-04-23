'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { faqContent } from '@/content/text'

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      {faqContent.items.map((item) => {
        const isOpen = openItems.includes(item.id)
        const contentId = `faq-content-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <button
              id={buttonId}
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="font-medium text-foreground pr-4">{item.question}</span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
              )}
            </button>
            <div
              id={contentId}
              aria-labelledby={buttonId}
              className={isOpen ? 'block' : 'hidden'}
            >
              <div className="px-6 pb-4 pt-2">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
