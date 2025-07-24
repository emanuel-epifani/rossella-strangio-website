import { MapPin, Video, Clock, Phone } from 'lucide-react'

export default function Where() {
  return (
    <section id="where" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Dove ricevo</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Studio */}
          <div className="box box-primary">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-primary">In Studio a Torino</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Via Roma, 123</strong><br />
                10100 Torino (TO)
              </p>
              <div className="flex items-start gap-3">
                <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="font-semibold mb-1">Orari di ricevimento:</p>
                  <p className="text-sm">
                    Lunedì - Venerdì: 9:00 - 19:00<br />
                    Sabato: 9:00 - 13:00<br />
                    Domenica: Su appuntamento
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <p>
                  <strong>Tel:</strong> <a href="tel:+393343071131" className="text-accent hover:underline">+39 334 307 1131</a>
                </p>
              </div>
            </div>
          </div>

          {/* Online */}
          <div className="box box-secondary">
            <div className="flex items-center gap-3 mb-6">
              <Video className="text-secondary" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Consulenze Online</h3>
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                Sedute psicologiche comodamente da casa tua, ovunque tu sia in Italia.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Piattaforma sicura</strong> con crittografia end-to-end</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Stessa efficacia</strong> delle sedute in presenza</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Flessibilità di orari</strong> anche serali e weekend</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Risparmio di tempo</strong> negli spostamenti</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                <strong>Nota:</strong> Le sedute online sono regolamentate dall&apos;Ordine degli Psicologi 
                e hanno la stessa validità di quelle in presenza.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6">
            Scegli la modalità che preferisci per il tuo benessere
          </p>
          <a href="#contact" className="cta-button">
            Prenota la tua seduta
          </a>
        </div>
      </div>
    </section>
  )
} 