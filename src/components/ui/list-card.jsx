/**
 * A general list card with image, title and subtitle.
 */
"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FilePenIcon } from "lucide-react"
import { TrashIcon } from "lucide-react"
import { CheckIcon } from "lucide-react"
import { Button } from "./button"

const ListCard = ({ img, title, subtitle }) => {
  return (
    <li className="flex items-center justify-between rounded-md bg-muted p-4">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={img} alt="Card image"/>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <FilePenIcon className="h-5 w-5"/>
          <span className="sr-only">Edit</span>
        </Button>
        <Button variant="ghost" size="icon">
          <TrashIcon className="h-5 w-5"/>
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </li>
  )
}

const NewListCard = ({ img, title, subtitle, add }) => {

  const [inputTitle, setInputTitle] = useState(title)
  const [inputSubtitle, setInputSubtitle] = useState(subtitle)

  return (
    <li className="flex items-center justify-between rounded-md bg-muted p-4">
      <div className="flex items-center space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={img} alt="Card image"/>
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
        <div>
          <Label>{title}</Label>
          <Input placeholder={title} value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
          <Label>{subtitle}</Label>
          <Input placeholder={subtitle} value={inputSubtitle} onChange={(e) => setInputSubtitle(e.target.value)}/>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button onClick={() => add(inputTitle, inputSubtitle)} variant="ghost" size="icon">
          <CheckIcon className="h-5 w-5"/>
          <span className="sr-only">Lägg till</span>
        </Button>
      </div>
    </li>
  )
}

export { ListCard, NewListCard }
