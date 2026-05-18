import Link from 'next/link'

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px] shrink-0"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
)

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px] shrink-0"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
)

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-[18px] h-[18px] shrink-0"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
    className="w-4 h-4"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM0 8h5v16H0V8Zm7.5 0h4.78v2.2h.07c.67-1.27 2.3-2.6 4.72-2.6 5.05 0 5.98 3.32 5.98 7.64V24h-5v-7.2c0-1.72-.03-3.92-2.4-3.92-2.4 0-2.77 1.87-2.77 3.8V24h-5V8Z" />
  </svg>
)

const EXPLORE = [
  { label: 'Chi sono', href: '/chi-sono' },
  { label: 'Servizi offerti', href: '/servizi' },
  { label: 'Domande frequenti', href: '/faq' },
  { label: 'Prenota un colloquio', href: '/contattami' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-14">
        {/* Firma centrale */}
        <div className="text-center">
          <div className="font-serif text-3xl md:text-4xl tracking-wide">
            Rossella <em className="italic font-light text-secondary">Strangio</em>
          </div>
          <div className="mt-2 text-xs md:text-sm uppercase tracking-[0.25em] text-primary-foreground/80">
            Psicologa · Psicoterapeuta · Torino
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-t border-primary-foreground/20" />

        {/* Tre colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Contatti */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Contatti
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href="tel:+393343071131"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  +39 334 307 1131
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[3px]">
                  <MailIcon />
                </span>
                <a
                  href="mailto:rossella.strangio.psicologa@gmail.com"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors break-all"
                >
                  rossella.strangio.psicologa@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PinIcon />
                <a
                  href="https://maps.google.com/?q=Via+Vagnone+2,+Torino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Via Vagnone 2, Torino
                </a>
              </li>
            </ul>
          </div>

          {/* Esplora */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Esplora
            </h4>
            <ul className="space-y-3 text-sm">
              {EXPLORE.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Albo + social */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Riferimenti Albo
            </h4>
            <p className="text-sm leading-relaxed">
              <a
                href="https://ordinepsicologi.piemonte.it/albo-vista/?id=8933"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground transition-colors"
              >
                Ordine Psicologi del Piemonte
                <br />
                <span className="text-primary-foreground/70">N° Iscrizione 9144</span>
              </a>
            </p>
            <p className="text-sm mt-4">P. IVA 13434760016</p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/la_psicoross/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/rossella-strangio-7b2b29320/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/80">
          <span>
            © {year} Dott.ssa Rossella Strangio · Tutti i diritti riservati
          </span>
          <span className="text-primary-foreground/70">
            Privacy Policy · Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  )
}