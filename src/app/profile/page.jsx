/**
 * The users profile page.
 * 
 */

import DogList from "./components/dog-list"
import Header from "./components/header"

const profile = {
  img : "",
  name : "Violet Rosenkvist",
  interests : ["Promenader", "Agility", "Bakning"]
}

const dogs = [
  {img : "", name : "Neville", breed : "Fransk Bulldog"},
  {img : "", name : "Scooby", breed : "Grand Danois"}
]


export default function Profile() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <Header img={profile.img} name={profile.name} interests={profile.interests}/>
      <DogList dogs={dogs}/>
    </div>
  )
}