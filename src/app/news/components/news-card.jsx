import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"



const NewsCard = ({imgUrl, articleUrl: url, title, content}) => {

  return (
    <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
      <Link href={`/news/${url}`} className="block" prefetch={false}>
        <Image
          src={imgUrl}
          alt="Blog Post Image"
          width={400}
          height={225}
          className="aspect-video w-full object-cover transition-all group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">
          <Link href={`/news/${url}`} prefetch={false}>
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-muted-foreground line-clamp-3">
          {content}
        </p>
        <div className="mt-4">
          <Link
            href={`/news/${url}`}
            prefetch={false}
          >
            <Button>Läs mer <ArrowRightIcon className="h-4 w-6" /></Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard