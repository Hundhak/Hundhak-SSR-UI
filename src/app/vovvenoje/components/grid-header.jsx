/**
 * A header for the grid with two buttons, giving the option for onlw show quizzes or games, and a searchbar.
 */

import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const GridHeader = ({ selectedCategory, setSelectedCategory, searchTerm, setSearchTerm }) => {
  return (
    <header className="bg-background border-b">
      <div className="container px-4 md:px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <Button className={`${selectedCategory === "game" ? "bg-secondary ring-4 ring-green-500 text-black hover:bg-green-100" : ""}`} onClick={() => selectedCategory === "game" ? setSelectedCategory("") : setSelectedCategory("game")}>Spel</Button>
            <Button className={`${selectedCategory === "quiz" ? "bg-secondary ring-4 ring-green-500 text-black hover:bg-green-100" : ""}`} onClick={() => selectedCategory === "quiz" ? setSelectedCategory("") : setSelectedCategory("quiz")}>Kvissar</Button>
          </div>
        </div>
        <div className="relative m-2 flex-1 max-w-md">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
            <SearchIcon className="w-4 h-4" />
          </div>
          <Input type="search" placeholder="Sök..." className="w-full rounded-lg bg-muted pl-8" />
        </div>
      </div>
    </header>
  )
}

export default GridHeader