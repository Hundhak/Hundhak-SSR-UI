/**
 * The header for the profile page.
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FilePenIcon } from "lucide-react"


const Header = ({ img, name, interests }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Avatar>
        <AvatarImage src={img} alt="Users avatar"/>
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <Button variant="ghost" size="icon">
            <FilePenIcon className="w-5 h-5"/>
            <span className="sr-only">Ändra profill</span>
          </Button>
        </div> 
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {interests.map(interest => (
            <Badge key={interest} variant="secondary">{interest}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header