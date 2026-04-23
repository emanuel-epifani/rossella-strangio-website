import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import StructuredData from '@/components/StructuredData'
import { faqContent } from '@/content/text'
import { buildMetadata, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'FAQ | Domande frequenti sulla psicoterapia e sulle sedute online',
  description:
    'Risposte alle domande frequenti su psicoterapia, sedute online, valutazione neuropsicologica e primo colloquio con la Dott.ssa Rossella Strangio.',
  pathname: '/faq',
})

export default function FAQ() {
  return (
    <>
      <StructuredData
        data={[
          getFAQSchema(),
          getBreadcrumbSchema([
            { name: 'Home', pathname: '/' },
            { name: 'FAQ', pathname: '/faq' },
          ]),
        ]}
      />
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
            <FAQAccordion />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
