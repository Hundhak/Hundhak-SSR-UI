/**
 * Quiz and games page.
 */

"use client"

import { useState } from "react"
import Grid from "./components/grid"
import IntroductionSection from "./components/introduction-section"
import GridHeader from "./components/grid-header"

export default function VovveNoje() {

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  return (
    <div>
      <IntroductionSection></IntroductionSection>
      <GridHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></GridHeader>
      <Grid selectedCategory={selectedCategory}></Grid>
    </div>
  )
}