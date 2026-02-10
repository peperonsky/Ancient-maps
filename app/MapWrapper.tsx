"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import MapLoadDebug from "./components/MapLoadDebug"
import YearSelector from "./components/YearSelector"

const MapClient = dynamic(() => import("./components/MapClient"), { ssr: false })

export default function MapWrapper() {
  const [year, setYear] = useState(1)

  return (
    <div style={{ position: "relative" }}>
      <MapLoadDebug />
      <MapClient year={year} />
      <YearSelector year={year} setYear={setYear} />
    </div>
  )
}
