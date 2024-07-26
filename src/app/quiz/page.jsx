/**
 * Quiz and games page.
 */

"use client"

import { useState } from "react"
import QuizAndGameGrid from "./components/quiz-and-game-grid"
import IntroductionSection from "./components/introduction-section"
import GridHeader from "./components/grid-header"

export default function Quiz() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  console.log(selectedCategory)

  return (
    <div>
      <IntroductionSection></IntroductionSection>
      <GridHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></GridHeader>
      <QuizAndGameGrid selectedCategory={selectedCategory}></QuizAndGameGrid>
    </div>
  )
}