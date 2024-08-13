/**
 * Displays a news article.
 */

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { formatContent } from "./formatContent"


const NewsArticle = ({img, title, author, date, content}) => {

  const formattedContent = formatContent(content)

  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full pt-12 md:pt-24 lg:pt-12">
        <div className="container mx-auto max-w-3xl space-y-10 xl:space-y-16">
          <Image 
          src={img}
          width={800}
          height={500}
          alt="News articles image"
          className="aspect-video rounded-lg object-cover"
          />
        </div>
      </section>
      <main className="flex-1 border-2">
        <section className="w-full py-12 md:py-24 lg:py-12">
          <h2 className="text-[2rem] font-bold tracking-tighter text-center lg:text-[3rem]">
                    {title}
          </h2>
          <div className="container mx-auto max-w-3xl px-4 md:px-6">
            <article className="prose prose-gray mx-auto">
              <div className="flex items-center space-x-4 text-muted-foreground text-center lg:text-[1.5rem] ">
                <div>{author}</div>
                <Separator orientation="vertical"/>
                <div>{date}</div>
              </div>
              <div className="p-4">
                {formattedContent}
              </div>
            </article>
          </div>
        </section>
      </main>
   </div> 
  )
}

export default NewsArticle