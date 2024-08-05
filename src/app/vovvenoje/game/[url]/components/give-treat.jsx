/**
 * A very simple game where you can give a dog a treat.
 */
"use client"

import { useState, useCallback, useRef, useEffect } from 'react'
import { Stage, Container, Sprite, Text } from '@pixi/react'

const GiveTreat = () => {

  const [treatPosition, setTreatPosition] = useState({ x: 700, y: 300})
  const [isDragging, setIsDragging] = useState(false)
  const [message, setMessage] = useState("")
  const backgroundUrl = "/images/treat-bg.webp"
  const dogUrl = "/images/treat-dog-nobg.png"
  const treatUrl = "/images/treat-nobg.png"
  const containerRef = useRef(null)

  const handlePointerDown = useCallback((event) => {
    setIsDragging(true)
    event.stopPropagation()
  }, [])

  const handlePointerUp = useCallback((event) => {
    if(isDragging) {
      setIsDragging(false)
      event.target.alpha = 1

      //Check the element reference

      //The reason for using container as reference instead of the dog is because it scales better.
      //This makes adding a second dog easy.
      const container = containerRef.current
      if(container) {

        //Check if dog exists in container
        const dogSprite = container.getChildByName("dog")
        if(dogSprite) {

          //Check the X and Y of dog
          const dogBounds = dogSprite.getBounds()
          console.log(dogBounds)

          //And finally, check if the treat is on the same X and Y as dog.
          if(dogBounds.contains(treatPosition.x, treatPosition.y)) {
            setMessage("Hunden fick en godis!") //Give treat :)
            setTimeout(() => {
              setTreatPosition({x: 700, y: 300})
            }, 500)
          }

          setTimeout(() => {
            setMessage("")
          }, 1000)
        }
      }
    }
  }, [isDragging, treatPosition])

  const handlePointerMove = useCallback((event) => {
    if(isDragging) {

      //Native DOM positions are used because the dragmovements
      //where more fluid and allows for the mouse target to leave
      //the sprite.
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setTreatPosition({ x, y })
    }
  }, [isDragging])
 
  return (
    <div>
      <Stage
       width={800} 
       height={550}
       options={{ backgroundColor: 0x1099bb  }}
       onPointerUp={handlePointerUp}
       onPointerMove={handlePointerMove}
      >
        <Container ref={containerRef}>
          <Sprite 
            image={backgroundUrl}
            height={550}
            width={800}
          />
          <Sprite 
            height={200}
            width={200}
            name='dog'
            image={dogUrl}
            x={380}
            y={450}
            anchor={0.5}
          />
          <Sprite
            height={100}
            width={100}
            image={treatUrl}
            x={treatPosition.x}
            y={treatPosition.y}
            anchor={0.5}
            interactive={true}
            buttonMode={true}
            pointerdown={handlePointerDown}
           />
           {message && (
            <Text
              text={message}
              x={400}
              y={50}
              anchor={0.5}
              style={{
                fontFamily: 'Arial',
                fontSize: 24,
                fill: 0xffffff,
                align: 'center',
              }}
            />
           )}
        </Container>
      </Stage>
    </div>
  )
}

export default GiveTreat