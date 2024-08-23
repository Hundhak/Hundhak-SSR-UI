/**
 * The profile page list of dogs.
 */
"use client"
import { useCallback, useState } from "react"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import  ListCard  from "./list-card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


const DogList = ({ dogs, addDog, removeDog, editDog }) => {
  const [isAddingDog, setIsAddingDog] = useState(false)

  const handleAddDogClick = useCallback(() => {
    setIsAddingDog(true)
  }, [])

  const handleAddDogConfirmation = (newDog) => {
    addDog({ ...newDog, img: "" })
    setIsAddingDog(false)
  }

  const handleCancelAdd = () => {
    setIsAddingDog(false)
  }

  const handleEditDog = (index, updatedDog) => {
    editDog(index, { ...dogs[index], ...updatedDog })
  }

  const totalDogs = dogs.length + (isAddingDog ? 1 : 0)
  
  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mt-6">
        <h2 className="text-lg font-semibold">Mina hundar</h2>
        <Button onClick={handleAddDogClick} variant="outline" size="icon">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">Lägg till</span>
        </Button>
      </div>
      <div className={`mt-4 grid gap-6 ${totalDogs < 4 ? 'grid-cols-1 max-w-md mx-auto' : 'md:grid-cols-2'}`}>
        {isAddingDog && (
          <ListCard 
            isNew={true}
            onSave={handleAddDogConfirmation}
            onCancel={handleCancelAdd}
          />
        )}
        {dogs.map((dog, index) => (
          <ListCard 
            key={index} 
            img={dog.img} 
            name={dog.name} 
            breed={dog.breed} 
            onRemove={() => removeDog(index)} 
            onSave={(updatedDog) => handleEditDog(index, updatedDog)}
          />
        ))}
      </div>
      <Pagination className={"mt-4"}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default DogList