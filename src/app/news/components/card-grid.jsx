import NewsCard from "./news-card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";


const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:px-8 xl:grid-cols-4">
      <NewsCard 
        imgUrl={"/images/news-placeholder.webp"}
        articleUrl={"/"}
        title={"Bästa hundglassarna 2024"}
        content={"Vi tycker alla hundar förtjänar en glass i år, så vi (eller tja, våra hundar) bestämde oss för att....."}
      />
      <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="block" prefetch={false}>
          <img
            src="/images/news-placeholder.webp"
            alt="Blog Post Image"
            width={400}
            height={225}
            className="aspect-video w-full object-cover transition-all group-hover:scale-105"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary">
            <Link href="#" prefetch={false}>
              Mastering the Art of Sourdough Baking
            </Link>
          </h3>
          <p className="mt-2 text-muted-foreground line-clamp-3">
            Discover the secrets to creating the perfect sourdough loaf at home. From feeding the starter to achieving
            that coveted crisp crust, this guide has everything you need to become a sourdough pro.
          </p>
          <div className="mt-4">
            <Link
              href="#"
              className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              Read More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="block" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width={400}
            height={225}
            className="aspect-video w-full object-cover transition-all group-hover:scale-105"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary">
            <Link href="#" prefetch={false}>
              The Ultimate Guide to Mindful Meditation
            </Link>
          </h3>
          <p className="mt-2 text-muted-foreground line-clamp-3">
            Unlock the power of mindfulness and learn how to incorporate meditation into your daily routine. This
            comprehensive guide covers everything from the basics to advanced techniques for achieving inner peace and
            clarity.
          </p>
          <div className="mt-4">
            <Link
              href="#"
              className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              Read More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
        <Link href="#" className="block" prefetch={false}>
          <img
            src="/placeholder.svg"
            alt="Blog Post Image"
            width={400}
            height={225}
            className="aspect-video w-full object-cover transition-all group-hover:scale-105"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary">
            <Link href="#" prefetch={false}>
              The Art of Minimalist Living
            </Link>
          </h3>
          <p className="mt-2 text-muted-foreground line-clamp-3">
            Simplify your life and find freedom in minimalism. This guide covers practical tips and strategies for
            decluttering your home, mind, and schedule to live a more intentional and fulfilling life.
          </p>
          <div className="mt-4">
            <Link
              href="#"
              className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              Read More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardGrid