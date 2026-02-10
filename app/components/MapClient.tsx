"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet"
import { useEffect, useState } from "react"
import { loadSnapshots } from "../lib/loadSnapshots"

export default function MapClient({ year }: { year: number }) {
  const [snapshot, setSnapshot] = useState<any>(null)
  const [entities, setEntities] = useState<any>({})

  useEffect(() => {
    loadSnapshots(year).then((data) => {
      if (!data) return
      setSnapshot(data.snapshot)
      setEntities(data.entities)
    })
  }, [year])

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={[30, 20]} zoom={3} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {snapshot && (
          <GeoJSON
            key={year}
            data={snapshot}
            style={(feature) => {
              const id = feature?.properties?.entity_id
              const color = entities[id]?.color ?? "#64748b"
              return {
                color,
                weight: 1,
                fillColor: color,
                fillOpacity: 0.45
              }
            }}
          />
        )}
      </MapContainer>
    </div>
  )
}
