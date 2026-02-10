"use client"

import dynamic from "next/dynamic"
import MapLoadDebug from "./components/MapLoadDebug"

return (
  <div style={{ position: "relative" }}>
    <MapLoadDebug />
    <MapClient year={year} />
    <YearSelector year={year} setYear={setYear} />
  </div>
)

const MapClient = dynamic(() => import("./components/MapClient"), { ssr: false })

export default function MapWrapper() {
  
  return <MapClient />
}
