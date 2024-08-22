/**
 * The header for the profile page.
 */
"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FilePenIcon, PlusIcon, CheckIcon, XIcon, TrashIcon, } from "lucide-react"


const Header = ({ profile, editProfile }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState("")
  const [isAddingInterest, setIsAddingInterest] = useState(false)
  const [editedInterest, setEditedInterest] = useState("")
  const [updatedInterests, setUpdatedInterests] = useState(profile.interests)

  const handleSave = () => {
    editProfile({ name : editedName, interests: updatedInterests })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setUpdatedInterests(profile.interests)
  }

  const handleInterestRemove = (index) => {
    setUpdatedInterests(updatedInterests.filter((_, i) => i !== index))
  }

  const handleInterestSave = () => {
    setUpdatedInterests([editedInterest, ...profile.interests])
    setIsAddingInterest(false)
  }

  const handleInterestCancel = () => {
    setIsAddingInterest(false)
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <Avatar>
        <AvatarImage src={profile.img} alt="Users avatar"/>
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          {isEditing ? (
             <Input 
             value={editedName} 
             onChange={(e) => setEditedName(e.target.value)}
             placeHolder={profile.name}
            />
          ) : (
            <h1 className="text-2xl font-bold">{profile.name}</h1>
          )}
          {isEditing ? (
            <div className="mt-2 flex flex-row justify-center gap-2"> 
              <Button variant="ghost" size="icon" onClick={handleSave}>
              <CheckIcon className="w-5 h-5"/>
              <span className="sr-only">Konfirmera ändring</span>
            </Button>
              <Button variant="ghost" size="icon" onClick={handleCancel}>
                <XIcon className="w-5 h-5"/>
                <span className="sr-only">Avbryt ändring</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
            <FilePenIcon className="w-5 h-5"/>
            <span className="sr-only">Ändra profil</span>
          </Button>
          )}
        </div> 
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {updatedInterests.map((interest, index) => (
            <Badge key={index} variant="secondary">
              {interest}
              {isEditing && (
                <Button variant="ghost" size="badge" onClick={() => handleInterestRemove(index)}>
                <TrashIcon className="w-4 h-4"/>
                <span className="sr-only">Ta bort</span>
              </Button>
              )}
              </Badge>
          ))}
          {isEditing && !isAddingInterest && (
            <Button variant="ghost" sice="icon" onClick={() => setIsAddingInterest(true)}>
              <PlusIcon />
              <span className="sr-only">Lägg till</span>
            </Button>
          )}
          {isAddingInterest && (
              <div className="mt-2 flex flex-row justify-center gap-2"> 
              <Input 
              className="rounded-full bg-primary text-white placeholder-white/70 border-none focus:ring-2 focus:ring-white"
               value={editedInterest} 
                onChange={(e) => setEditedInterest(e.target.value)}
                placeholder={"Lägg till intresse.."}
              />
              <Button variant="ghost" size="icon" onClick={handleInterestSave}>
              <CheckIcon className="w-5 h-5"/>
              <span className="sr-only">Konfirmera ändring</span>
            </Button>
              <Button variant="ghost" size="icon" onClick={handleInterestCancel}>
                <XIcon className="w-5 h-5"/>
                <span className="sr-only">Avbryt ändring</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header