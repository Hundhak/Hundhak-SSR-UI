/**
 * The users profile page.
 * 
 */
"use client"
import { useState } from "react"
import DogList from "./components/dog-list"
import Header from "./components/header"

const initialProfile = {
  img: "",
  name: "Violet Rosenkvist",
  interests: ["Promenader", "Agility", "Bakning"]
}

const initialDogs = [
  {img: "", name: "Neville", breed: "Fransk Bulldog"},
  {img: "", name: "Scooby", breed: "Grand Danois"}
]

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile)
  const [dogs, setDogs] = useState(initialDogs)

  const editProfile = (updatedProfile) => {
    setProfile(updatedProfile)
  }

  const addDog = (newDog) => {
    setDogs([newDog, ...dogs])
  }

  const removeDog = (index) => {
    setDogs(dogs.filter((_, i) => i !== index))
  }

  const editDog = (index, updatedDog) => {
    setDogs(dogs.map((dog, i) => i === index ? updatedDog : dog))
  }

  return (
    <div className="mx-auto max-w-m md:max-w-4xl lg:max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Header profile={profile} editProfile={editProfile}/>
      <DogList 
        dogs={dogs} 
        addDog={addDog} 
        removeDog={removeDog} 
        editDog={editDog}
      />
    </div>
  )
}