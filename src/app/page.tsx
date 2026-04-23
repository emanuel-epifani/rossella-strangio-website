import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Where from '@/components/Where'
import Patients from '@/components/Patients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import { buildMetadata, getLocalBusinessSchema, getPersonSchema, getWebsiteSchema } from '@/lib/seo'

export const dynamic = 'force-static'

export const metadata = buildMetadata({
  title: 'Dott.ssa Rossella Strangio | Psicologa e Psicoterapeuta a Torino e Online',
  description:
    'Psicologa e psicoterapeuta cognitivo-comportamentale a Torino e online. Supporto per ansia, depressione, attacchi di panico, terapia di coppia e neuropsicologia clinica.',
  pathname: '/',
})

export default function Home() {
  return (
    <>
      <StructuredData
        data={[getWebsiteSchema(), getPersonSchema(), getLocalBusinessSchema()]}
      />
      <main id="main-content">
        <Hero />
        <Navbar />
        <About />
        <Patients />
        <Where />
        <Contact />
        <Footer />

      </main>
    </>
  )
}
