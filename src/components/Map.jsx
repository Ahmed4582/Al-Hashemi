import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect } from 'react'

function Map({ location }) {
  // Fix for Leaflet icon issue in production build
  useEffect(() => {
    // This is needed to fix the marker icon issue with webpack
    import('leaflet').then(L => {
      delete L.Icon.Default.prototype._getIconUrl
      
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      })
    })
  }, [])
  
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={[location.lat, location.lng]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map