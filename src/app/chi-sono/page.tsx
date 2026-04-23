import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { chiSonoContent } from '@/content/text'
import Image from 'next/image'
import { buildMetadata, getBreadcrumbSchema } from '@/lib/seo'

// Funzione helper per convertire **testo** in <strong>testo</strong>
function formatBoldText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Chi sono | Dott.ssa Rossella Strangio, Psicologa Psicoterapeuta a Torino',
  description:
    'Profilo professionale della Dott.ssa Rossella Strangio, psicologa psicoterapeuta a Torino, specializzata in psicoterapia cognitivo-comportamentale e neuropsicologia clinica.',
  pathname: '/chi-sono',
})

export default function ChiSono() {
  return (
    <>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', pathname: '/' },
          { name: 'Chi sono', pathname: '/chi-sono' },
        ])}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Header */}
        <section className="page-header">
          <div className="container">
            <h1 className="mb-2 text-4xl font-bold">{chiSonoContent.title}</h1>
            <p className="text-lg whitespace-pre-line">{chiSonoContent.subtitle}</p>
          </div>
        </section>

        {/* Layout a due colonne */}
        <section className="py-16 section-bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Foto a sinistra */}
              <div className="relative">
                <Image
                  src="/images/chi-sono.png"
                  alt="Foto Dott.ssa Rossella Strangio"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md h-auto w-auto"
                />
              </div>

              {/* Testo a destra */}
              <div className="prose prose-lg max-w-none">
                <p 
                  className="text-foreground leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ 
                    __html: formatBoldText(chiSonoContent.description) 
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
