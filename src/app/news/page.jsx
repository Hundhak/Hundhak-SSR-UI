/**
 * News page.
 */

"use client"

import CardGrid from "./components/card-grid"
import Categories from "./components/categories"
import Searchbar from "./components/search"
import { useState } from "react"

export default function News() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")


  return (
    <div >
       <div className="flex justify-center w-full xl:-mb-10">
       <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8">
      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <CardGrid />
      </div>
    </div>
  )
}