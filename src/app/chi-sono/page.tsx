import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { chiSonoContent } from '@/content/chi-sono'
import Image from 'next/image'

// Funzione helper per convertire **testo** in <strong>testo</strong>
function formatBoldText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

export const dynamic = 'force-static'

export default function ChiSono() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Header verde scuro */}
        <section className="bg-primary py-10">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">{chiSonoContent.title}</h1>
            <p className="text-lg text-white/90 whitespace-pre-line">{chiSonoContent.subtitle}</p>
          </div>
        </section>

        {/* Layout a due colonne */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Foto a sinistra */}
              <div className="relative">
                <Image
                  src="/images/chi-sono.png"
                  alt="Foto Dott.ssa Rossella Strangio"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md h-auto"
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
