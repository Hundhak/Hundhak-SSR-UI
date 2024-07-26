/**
 * Serves as an introduction to the quizzes and games.
 */

import Image from "next/image"

const IntroductionSection = () => {
  return (
    <div>
      <section className="realtive w-full h-[550px] flex items-center justify-center bg-[url('/images/games-bg.webp')] bg-cover bg-center overflow-hidden bg-no-repeat">
        {/* <Image
        width={600}
        height={600}
        src={"/images/games-bg.webp"}
        className="absolut inset-0 object-cover opacity-90" 
        /> */}
        <div className="relaitve z-10 w-auto xl:w-1/2 text-center space-y-6 px-4 sm:px-6 md:px-8 -mt-12 bg-opacity-60 bg-green-50">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <p>Välkommen till vår quiz- och spelhörna!</p>
          </h1>
          <p>Utforska vår samling av roliga och lärorika quiz och spel, allt med ett hundtema. Oavsett om du vill testa dina kunskaper om hundraser, lära dig mer om valpvård, eller bara ha kul med våra interaktiva spel, så har vi något för dig. Klicka på ett quiz eller spel nedan för att komma igång. Låt äventyret börja!</p>
        </div>
      </section>
    </div>
  )
}

export default IntroductionSection