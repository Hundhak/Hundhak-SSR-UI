/**
 * Categories component
 */


const Categories = ({ selectedCategory, setSelectedCategory }) => {

  return (
      <div className="w-full md:w-1/4">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Kategorier</h2>
          <ul>
            <li
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "all" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              Alla
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "food" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory("food")}
            >
              Mat
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "training" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory("training")}
            >
              Träning
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "gear" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory("gear")}
            >
              Utrustning
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                selectedCategory === "puppy" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
              onClick={() => setSelectedCategory("puppy")}
            >
              Valp
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Categories