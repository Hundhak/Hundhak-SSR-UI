/**
 * Hero section for the home page where the image is smaller.
 */
import Link from "next/link"
import Image from "next/image"

const SmallPicHero = () => {
 return ( <div>
        <section className="w-full h-[650px] pt-12 md:pt-24 lg:pt-32 bg-[url('/images/hero-no-bg.png')] bg-cover bg-center">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Utforska hundens värld
                  </h1>
                  <p className="mx-auto max-w-[700px] md:text-2xl">
                    Hitta hundvänliga platser, läs spännande artiklar och blogginlägg, och ha kul med webbspel och quiz. Välkommen!
                  </p>
                  <div className="space-x-4 mt-6">
                    <Link
                      href="/login"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Gå med
                    </Link>
                    <Link
                      href="/map"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Upptäck kartan
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                {/* <Image 
                src={"/images/logo.png"}
                width={600}
                height={600}
                className="rounded-full max-w-full h-auto"
                /> */}
                </div>
              </div>
            </div>
          </section>
      </div>)
}

export default SmallPicHero