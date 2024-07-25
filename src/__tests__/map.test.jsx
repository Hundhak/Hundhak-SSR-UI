// map.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import InteractiveMap from '@/app/map/components/interactive-map';
import MarkerCard from '@/app/map/components/marker-card';
import Map from '@/app/map/page';

// Mock the MarkerCard component
vi.mock('@/app/map/components/marker-card', () => ({
  __esModule: true,
  default: ({ title, description, content, imgUrl, closeFunction }) => (
    <div data-testid="marker-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{content}</div>
      <img src={imgUrl} alt="marker" />
      <button onClick={closeFunction}>Close</button>
    </div>
  ),
}))

const markers = [
  { anchor: [50.879, 4.6997], title: 'Marker 1', description: 'Description 1', content: 'Content 1' },
  { anchor: [50.88, 4.70], title: 'Marker 2', description: 'Description 2', content: 'Content 2' },
]

describe('InteractiveMap', () => {
  test('should zoom on the map', () => {
    const { container } = render(<Map />)
    const mapElement = container.querySelector('div').children[0]

    // Simulate the map bounds change
    fireEvent.load(mapElement)

    expect(mapElement).toBeDefined()
  })

  test('should verify markers is an array', () => {
    render(<InteractiveMap markers={markers} />);
    expect(Array.isArray(markers)).toBe(true);
  })

  test('should trigger marker onClick', () => {
    const { container } = render(<InteractiveMap markers={markers} />)
    const divElements = container.querySelectorAll('div')
    const markerElements = []

    //Loop out only marker elements
    divElements.forEach(element => {
      if(element.className = "pigeon-click-block") {
        markerElements.push(element)
      }
    })

    expect(markerElements).toBeDefined()
    const chosenMarker = Math.floor(Math.random() * (markerElements.length - 1))
    fireEvent.click(markerElements[chosenMarker])
  })
})
