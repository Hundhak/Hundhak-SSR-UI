/**
 * A small game where the a dog goes to the spa.
 */


import { useCallback, useState } from "react"
import { Stage, Sprite, Container, Graphics } from "@pixi/react"


const DogSpa = () => {

  const backgroundUrl = '/images/spa-bg.webp'
  const dogUrl = '/images/spa-dog.png'

  return (
    <Stage
      width={800}
      height={550}
      options={{ backgroundColor: 0x1099bb }}
    >
      <Sprite
        image={backgroundUrl}
        height={550}
        width={800}
      >
        <Sprite
          image={dogUrl}
          height={450}
          width={450}
          x={810}
          y={670}
          anchor={0.5}
          name="dog"
        />
      </Sprite>
    </Stage>
  )
}

export default DogSpa