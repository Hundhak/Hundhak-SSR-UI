/**
 * The map component.
 * @author Miranda Holmlund
 * @version 0.1.0
 */

import { Map, Marker } from "pigeon-maps"
import { useState } from "react"
import MarkerCard from "./marker-card"

const InteractiveMap = ({ markers }) => {
  const [center, setCenter] = useState([50.879, 4.6997])
  const [zoom, setZoom] = useState(11)
  const [hoveredTitle, setHoveredTitle] = useState(null)
  const [selectedMarker, setSelectedMarker] = useState(null)

  return (
    <div>
      <Map 
      height={550}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }}
    >
        {markers.map((marker, index) => (
          <Marker
          key={index}
          width={50}
          anchor={marker.anchor}
          onClick={() => setSelectedMarker(marker)}
          onMouseOver={() => setHoveredTitle(marker.title)}
          onMouseOut={() => setHoveredTitle(null)}
          />
        ))}
      </Map>

      {hoveredTitle && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-white border border-black z-[1000]">
          {hoveredTitle}
        </div>
      )}

      {selectedMarker && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000]">
          <MarkerCard
           title={selectedMarker.title} 
           description={selectedMarker.description} 
           content={selectedMarker.content}
           imgUrl={"/images/marker-photo.webp"}
           closeFunction={() => setSelectedMarker(null)}
          />
        </div>
      )}

    </div>
  )
}


export default InteractiveMap