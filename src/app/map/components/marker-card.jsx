/**
 * A card containg information on specific map markers.
 */

import { Card, CardContent, CardTitle, CardFooter, CardHeader, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"


const MarkerCard = ({ title, description, content, closeFunction, imgUrl }) => {
  return (
    <div>
      <Card className="w-[350px] p-2">
        <Image 
          src={imgUrl}
          alt="Blog Post Image"
          width={400}
          height={225}
          className="aspect-video w-full object-cover rounded-lg"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={closeFunction}>
            <p>Stäng</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MarkerCard