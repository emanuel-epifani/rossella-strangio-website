// Icons not used in this component, keeping it clean

export default function Patients() {
  return (
    <section id="patients" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Chi sono i miei pazienti</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Terapia per Adulti */}
          <div className="service-card">
            <div className="service-image">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">18+</span>
              </div>
            </div>
            <div className="service-content">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Terapia per Adulti</h3>
              <p className="text-gray-700 mb-8 text-center">
                Percorsi individuali per affrontare stress, ansia, depressione, difficoltà relazionali, problemi legati al lavoro, e per promuovere la crescita personale e il benessere psicologico.
              </p>
              <div className="text-center">
                <a href="#contact" className="cta-button">
                  Contattami
                </a>
              </div>
            </div>
          </div>

          {/* Terapia di Coppia */}
          <div className="service-card">
            <div className="service-image">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-white text-3xl font-bold">♂</span>
                  <span className="text-white text-3xl font-bold">♀</span>
                </div>
              </div>
            </div>
            <div className="service-content">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Terapia di Coppia</h3>
              <p className="text-gray-700 mb-8 text-center">
                Supporto per coppie che desiderano migliorare la comunicazione, risolvere conflitti, ritrovare l&apos;intimità e rafforzare il legame emotivo per una relazione più sana e soddisfacente.
              </p>
              <div className="text-center">
                <a href="#contact" className="cta-button">
                  Contattami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 