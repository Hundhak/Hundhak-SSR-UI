/**
 * A general list card with image, title and subtitle.
 */
"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilePenIcon, TrashIcon, CheckIcon, XIcon } from "lucide-react"
import { Button } from "../../../components/ui/button"

const ListCard = ({ img, name, breed, isNew = false, onSave, onRemove, onCancel }) => {
  const [isEditing, setIsEditing] = useState(isNew)
  const [editedName, setEditedName] = useState(name || '')
  const [editedBreed, setEditedBreed] = useState(breed || '')

  useEffect(() => {
    setEditedName(name || '')
    setEditedBreed(breed || '')
  }, [name, breed])

  const handleSave = () => {
    onSave({ name: editedName, breed: editedBreed })
    if (!isNew) setIsEditing(false)
  }

  const handleCancel = () => {
    if (isNew) {
      onCancel()
    } else {
      setIsEditing(false)
      setEditedName(name)
      setEditedBreed(breed)
    }
  }

  if (isEditing || isNew) {
    return (
      <li className="flex items-center justify-between rounded-md bg-muted p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={img} alt="Card image"/>
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div>
            <Label>Namn</Label>
            <Input 
              value={editedName} 
              onChange={(e) => setEditedName(e.target.value)}
              placeholder="Hundens namn"
            />
            <Label>Ras</Label>
            <Input 
              value={editedBreed} 
              onChange={(e) => setEditedBreed(e.target.value)}
              placeholder="Hundens ras"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={handleSave}>
            <CheckIcon className="h-5 w-5"/>
            <span className="sr-only">Spara</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={handleCancel}>
            <XIcon className="h-5 w-5"/>
            <span className="sr-only">Avbryt</span>
          </Button>
        </div>
      </li>
    )
  }

  return (
    <li className="flex items-center justify-between rounded-md bg-muted p-4">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={img} alt="Card image"/>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-base font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{breed}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
          <FilePenIcon className="h-5 w-5"/>
          <span className="sr-only">Ändra</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={onRemove}>
          <TrashIcon className="h-5 w-5"/>
          <span className="sr-only">Ta bort</span>
        </Button>
      </div>
    </li>
  )
}

export default ListCard 
