export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-primary/20 pt-40 pb-20 text-center">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-primary">
          Psicologa a Torino - Dott.ssa Rossella Strangio
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Supporto psicologico professionale <strong>Online</strong> e in <strong>sede a Torino</strong>
        </p>
        <a 
          href="#contact" 
          className="cta-button"
        >
          Richiedi una prima seduta
        </a>
      </div>
    </section>
  )
} 