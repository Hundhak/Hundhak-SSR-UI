/**
 * A very simple first game to act as placeholder.
 */
"use client"

import { useMemo } from 'react'

import { BlurFilter, TextStyle } from 'pixi.js'
import { Stage, Container, Sprite, Text } from '@pixi/react'


const SimpleGame = ({ url }) => {

  const blurFilter = useMemo(() => new BlurFilter(2), [])
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png"

  return (
    <Stage width={800} height={550} options={{ background: 0x1099bb }}>
      <Sprite image={bunnyUrl} x={300} y={200}></Sprite>
      <Sprite image={bunnyUrl} x={400} y={150}></Sprite>
      <Sprite image={bunnyUrl} x={500} y={200}></Sprite>
      <Container x={200} y={200}>
        <Text
          text={url.url}
          anchor={0.5}
          x={220}
          y={150}
          filters={blurFilter}
          style={
            new TextStyle({
              align: 'center',
              fill: '0xffffff',
              fontSize: 50,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: '#E72264',
              dropShadowDistance: 6
            })
          }
        />
      </Container>
    </Stage>
  )
}

export default SimpleGame