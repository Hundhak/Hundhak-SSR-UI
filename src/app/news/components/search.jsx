/**
 * Searchbar component.
 */

import { Input } from "@/components/ui/input"

const Searchbar = ({ searchTerm, setSearchTerm }) => {

  return (
    <div className="w-full md:w-3/4">
        <div className="m-6">
          <Input
            placeholder="Sök inlägg..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md bg-muted px-4 py-2"
          />
        </div>
      </div>
  )
}

export default Searchbar