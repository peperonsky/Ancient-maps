"use client"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"
import { Marker, Popup } from "react-leaflet"

<MapContainer
  center={[30, 20]}
  zoom={3}
  style={{ height: "100%", width: "100%" }}
>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[30, 20]}>
    <Popup>This is working!</Popup>
  </Marker>
</MapContainer>

export default function MapClient() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer
        center={[30, 20]}
        zoom={3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  )
}
