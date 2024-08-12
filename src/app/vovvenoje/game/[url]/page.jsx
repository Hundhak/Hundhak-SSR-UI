/**
 * Page displaying a single game.
 */
"use client"

import dynamic from "next/dynamic"

const GiveTreat = dynamic(() => import('./components/give-treat'), {ssr: false})
const DogSpa = dynamic(() => import('./components/dog-spa'), {ssr: false})
import { Suspense } from "react"
import * as PIXI from 'pixi.js'


const gameComponents = {
  givetreat: GiveTreat,
  dogspa: DogSpa,
}

const GamePage = ({ params: url }) => {

  const gameName = url.url.toLowerCase()
  const GameComponent = gameComponents[gameName]

  if(!GameComponent) {
    return <div>Game not found</div>
  }

  return (
    <div className="flex justify-center items-center border-2 border-black p-5 rounded-lg w-fit mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <GameComponent key={gameName}/>
      </Suspense>
    </div>
  )
}

export default GamePage