import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-60 md:h-[500px] lg:h-[600]">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <Image
          src="/images/round-hero.webp"
          alt="Hero"
          fill={true}
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl font-bold mt-4 md:text-6xl">Welcoming Dog Community</h1>
        <p className="mt-2 text-lg md:text-2xl">Join our community of dog lovers in Sweden!</p>
      </div>
    </section>
  )
}

export default HeroSection
