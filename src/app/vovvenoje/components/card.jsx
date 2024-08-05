/**
 * A link-card displaying info about a game or a quiz, as well as ability to click on it.
 */

import { Card, CardContent, CardTitle, CardFooter, CardHeader, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"


const QGCard = ({ url, imgUrl, title, content, description, footer }) => {


  return (
    <div>
        <Card>
          <Image
          alt="Image for card" 
          src={imgUrl}
          width={400}
          height={225}
          className="aspect-video w-full object-cover rounded-lg"
          />
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>{content}</CardContent>
          <CardFooter>
            <Link href={`/vovvenoje${url}`}>
              <Button>
                <p>{footer}</p>
              </Button>
            </Link>
          </CardFooter>
        </Card>
    </div>
  )
}

export default QGCard