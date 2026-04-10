import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white pt-5 pb-5 text-center">
      <div className="container flex justify-center">
        <Image 
          src="/images/logo.jpg"
          alt="Logo Dott.ssa Rossella Strangio"
          width={400}
          height={400}
          priority
        />
      </div>
    </section>
  )
} 