import Link from 'next/link'
import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function About() {
  return (
    <section id="about" className="py-20 section-bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Immagine */}
          <figure className="flex-1 lg:max-w-xs">
            <Image
              src="/images/chi-sono.PNG"
              alt={homeContent.about.imageAlt}
              width={200}
              height={200}
              className="w-full max-w-[200px] shadow-lg mx-auto lg:mx-0"
              priority
            />
          </figure>
          
          {/* Testo */}
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {homeContent.about.title}
            </h3>
            <p className="text-lg leading-relaxed mb-5">
              {homeContent.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {homeContent.about.paragraph2}
            </p>
            <Link 
              href="/chi-sono" 
              className="text-link"
            >
              {homeContent.about.linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 