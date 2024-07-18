import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"


const NewsCard = ({imgUrl, articleUrl, title, description, content}) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md">
      <Link href={articleUrl}>
      <Card>
        <Image 
        src={imgUrl}
        alt="Article Image"
        width={'400'}
        height={'225'}
        className="aspect-video w-full object-cover transition-all group-hover:scale-105"
        />
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-primary">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-2 text-muted-foreground line-clamp-3">
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <Button>
            Läs mer<ArrowRightIcon className="h-4 w-4"/>
          </Button>
        </CardFooter>
      </Card>
      </Link>
    </div>
  )
}

export default NewsCard