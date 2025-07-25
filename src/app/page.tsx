import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Where from '@/components/Where'
import Services from '@/components/Services'
import Patients from '@/components/Patients'
import Prices from '@/components/Prices'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Where />
        <Services />
        <Patients />
        <Prices />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
