"use client"
export default function MapLoadDebug() {
  return (
    <div style={{
      position: "absolute",
      top: 10,
      right: 10,
      background: "rgba(255,255,255,0.8)",
      padding: "4px 8px",
      borderRadius: 4,
      zIndex: 1000
    }}>
      Map loaded
    </div>
  )
}
