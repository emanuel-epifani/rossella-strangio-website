import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contattami() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-20 bg-muted">
          <div className="container">
            <h1 className="text-4xl font-bold text-primary mb-6">Contattami</h1>
            <p className="text-foreground">Contenuto della pagina Contattami</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
