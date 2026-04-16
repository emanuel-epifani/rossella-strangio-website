import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Where from '@/components/Where'
import Patients from '@/components/Patients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
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
