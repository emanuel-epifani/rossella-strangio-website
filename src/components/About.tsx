import Link from 'next/link'
import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function About() {
  return (
    <section id="about" className="py-16 section-bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 px-4 md:px-10">
          {/* Immagine */}
          <figure className="flex-1 lg:max-w-sm mb-4 lg:mb-0">
            <Image
              src="/images/selfie-home.png"
              alt={homeContent.about.imageAlt}
              width={384}
              height={461}
              className="w-full h-auto"
              priority
            />
          </figure>

          {/* Testo */}
          <div className="flex-1 text-center lg:text-left">
            <span className="eyebrow">Chi sono</span>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mt-3 mb-5 tracking-tight">
              {homeContent.about.title}
            </h3>
            <p className="text-lg leading-relaxed mb-5 text-foreground/85">
              {homeContent.about.paragraph1}
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground/85">
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