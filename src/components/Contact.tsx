import { Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { homeContent } from '@/content/text'

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>{homeContent.contact.title}</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-foreground">
            {homeContent.contact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href={homeContent.contact.methods[0].link} className="card-base card-hover p-6">
              <Phone className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">{homeContent.contact.methods[0].title}</h3>
              <p className="text-sm">{homeContent.contact.methods[0].contact}</p>
            </a>

            <a href={homeContent.contact.methods[1].link} target="_blank" rel="noopener noreferrer" className="card-base card-hover p-6">
              <MessageCircle className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">{homeContent.contact.methods[1].title}</h3>
              <p className="text-sm">{homeContent.contact.methods[1].contact}</p>
            </a>

            <a href={homeContent.contact.methods[2].link} className="card-base card-hover p-6">
              <Mail className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">{homeContent.contact.methods[2].title}</h3>
              <p className="text-sm">{homeContent.contact.methods[2].contact}</p>
            </a>
          </div>

          <Link 
            href="/contattami" 
            className="text-link"
          >
            {homeContent.contact.linkText}
          </Link>
        </div>
      </div>
    </section>
  )
} 