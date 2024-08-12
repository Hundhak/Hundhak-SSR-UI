/**
 * A very simple game where you can give a dog a treat.
 */
"use client"

import { useState, useCallback, useRef } from 'react'
import { Stage, Container, Sprite, Text, Graphics } from '@pixi/react'

const GiveTreat = () => {

  const [itemPositions, setItemsPositions] = useState({
    treat: { x: 700, y: 400 },
    toy: { x: 700, y: 200 }
  })
  const [activeDragItem, setActiveDragItem] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [message, setMessage] = useState("")
  const backgroundUrl = "/images/treat-bg.webp"
  const dogUrl = "/images/treat-dog-nobg.png"
  const treatUrl = "/images/treat-nobg.png"
  const toyUrl = "/images/toy-nobg.png"
  const containerRef = useRef(null)

  const handlePointerDown = useCallback((event) => {
    setIsDragging(true)
    setActiveDragItem(event.target.name)
    event.stopPropagation()
  }, [setIsDragging, setActiveDragItem])

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
          const currentItemPosition = itemPositions[activeDragItem]

          //And finally, check if the treat is on the same X and Y as dog.
          if(dogBounds.contains(currentItemPosition.x, currentItemPosition.y)) {
            setMessage(activeDragItem === 'treat' ? "Hunden fick en godis!" : "Hunden fick en leksak!") //Give treat :)
            setTimeout(() => {
              setItemsPositions(prev => ({
                ...prev,
                [activeDragItem]: activeDragItem === 'treat' ? { x: 700, y: 400} : { x: 700, y: 200 }
              }))
            }, 500)
          }

          setTimeout(() => {
            setMessage("")
          }, 1000)
        }
      }
    }
  }, [isDragging, activeDragItem, itemPositions])

  const handlePointerMove = useCallback((event) => {
    if(isDragging && activeDragItem) {

      //Native DOM positions are used because the dragmovements
      //were more fluid and allows for the mouse target to leave
      //the sprite.
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setItemsPositions(prev => ({
        ...prev,
        [activeDragItem]: {x, y}
      }))
    }
  }, [isDragging, activeDragItem])
 
  return (
    <div>
      <Stage
       width={800} 
       height={550}
       options={{ backgroundColor: 0x1099bb }}
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
          <Container>
          <Graphics  x={700} y={400}
            draw={(g) => {
              g.clear
              g.lineStyle(4, 0x000000, 1)
              g.beginFill(0xFFFFFF, 0.9)
              g.drawRoundedRect(-52, -52, 104, 104, 16)
              g.endFill()
            }}
          />
          <Sprite
              height={100}
              width={100}
              image={treatUrl}
              x={itemPositions.treat.x}
              y={itemPositions.treat.y}
              anchor={0.5}
              interactive={true}
              pointerdown={handlePointerDown}
              name='treat'
            />
          </Container>
          <Container>
          <Graphics  x={700} y={200}
            draw={(g) => {
              g.clear
              g.lineStyle(4, 0x000000, 1)
              g.beginFill(0xFFFFFF, 0.9)
              g.drawRoundedRect(-52, -52, 104, 104, 16)
              g.endFill()
            }}
          />
          <Sprite
              height={100}
              width={100}
              image={toyUrl}
              x={itemPositions.toy.x}
              y={itemPositions.toy.y}
              anchor={0.5}
              interactive={true}
              pointerdown={handlePointerDown}
              name='toy'
            />
          </Container>
           {message && (
            <Text
              text={message}
              x={400}
              y={50}
              anchor={0.5}
              style={{
                fontFamily: 'Arial',
                fontSize: 50,
                fill: 0xffffff,
                align: 'center',
                fontStyle: 'italic',
                fontWeight: 'bold',
                fill: '#ffffff',
                stroke: '#4a1850'
              }}
            />
           )}
        </Container>
      </Stage>
    </div>
  )
}

export default GiveTreat