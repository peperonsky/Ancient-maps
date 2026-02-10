"use client"

const years = [-500, -200, 1, 100, 200, 300, 400, 500]

export default function YearSelector({
  year,
  setYear
}: {
  year: number
  setYear: (y: number) => void
}) {
  return (
    <div style={{
      position: "absolute",
      bottom: 20,
      left: "50%",
      transform: "translateX(-50%)",
      background: "white",
      padding: "10px 14px",
      borderRadius: 8,
      display: "flex",
      gap: 8,
      zIndex: 1000
    }}>
      {years.map(y => (
        <button
          key={y}
          onClick={() => setYear(y)}
          style={{
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid black",
            background: y === year ? "black" : "white",
            color: y === year ? "white" : "black",
            cursor: "pointer"
          }}
        >
          {y < 0 ? `${Math.abs(y)} BC` : `${y} AD`}
        </button>
      ))}
    </div>
  )
}
