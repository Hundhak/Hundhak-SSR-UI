import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient h-96 md:h-[500px] lg:h-[600px]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero-image.webp"
          alt="Hero"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold text-accent-orange mt-4 md:text-6xl">Welcoming Dog Community</h1>
        <p className="text-green-700 mt-2 text-lg md:text-2xl">Join our community of dog lovers in Sweden!</p>
      </div>
    </section>
  )
}

export default HeroSection
