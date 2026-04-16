import { Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { homeContent } from '@/content/text'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>{homeContent.contact.title}</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-foreground">
            {homeContent.contact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href={homeContent.contact.methods[0].link} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Phone className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">{homeContent.contact.methods[0].title}</h3>
              <p className="text-sm text-muted-foreground">{homeContent.contact.methods[0].contact}</p>
            </a>

            <a href={homeContent.contact.methods[1].link} target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <MessageCircle className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">{homeContent.contact.methods[1].title}</h3>
              <p className="text-sm text-muted-foreground">{homeContent.contact.methods[1].contact}</p>
            </a>

            <a href={homeContent.contact.methods[2].link} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Mail className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">{homeContent.contact.methods[2].title}</h3>
              <p className="text-sm text-muted-foreground">{homeContent.contact.methods[2].contact}</p>
            </a>
          </div>

          <Link 
            href="/contattami" 
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            {homeContent.contact.linkText}
          </Link>
        </div>
      </div>
    </section>
  )
} 