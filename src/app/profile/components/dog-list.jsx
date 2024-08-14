/**
 * The profile page list of dogs.
 */
"use client"
import { useCallback, useState } from "react"
import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ListCard, NewListCard } from "@/components/ui/list-card"

const DogList = ({ dogs, addDog }) => {

  const [activeDogs, setActiveDogs] = useState(dogs)
  const [isaAddingDog, setIsAddingDog] = useState(false)

  const handleAddDogClick = useCallback(() => {
    setIsAddingDog(true)
    setActiveDogs([{}, ...activeDogs])
  }, [activeDogs])

  const handleAddDogConfirmationClick = (name, breed) => {
    setIsAddingDog(false)
    setActiveDogs([{ img: "", name, breed }, ...activeDogs.slice(1)])
  }
  
  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mt-6">
        <h2 className="text-lg font-semibold">Mina hundar</h2>
        <Button onClick={() => handleAddDogClick()} variant="outline" size="icon">
          <PlusIcon className="h-5 w-5" />
          <span className="sr-only">Lägg till</span>
        </Button>
      </div>  
      <ul className="mt-4 space-y-4">
        {activeDogs.map((dog, index) => 
          index === 0 && isaAddingDog ? (
            <NewListCard key={index} add={handleAddDogConfirmationClick} title={"Namn"} subtitle={"Ras"}/>
          ) : (
            <ListCard key={index} img={dog.img} title={dog.name} subtitle={dog.breed}/>
          )
        )}
      </ul>
    </div>
  )
}

export default DogList