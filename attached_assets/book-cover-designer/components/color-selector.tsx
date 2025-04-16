"use client"

interface ColorSelectorProps {
  selectedColor: string
  setSelectedColor: (color: string) => void
}

export function ColorSelector({ selectedColor, setSelectedColor }: ColorSelectorProps) {
  const colors = [
    { id: "black", bg: "bg-black" },
    { id: "navy", bg: "bg-indigo-950" },
    { id: "purple", bg: "bg-purple-950" },
    { id: "green", bg: "bg-emerald-950" },
    { id: "burgundy", bg: "bg-red-900" },
    { id: "cream", bg: "bg-amber-50" },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {colors.map((color) => (
        <button
          key={color.id}
          className={`w-10 h-10 rounded-full ${color.bg} border-2 ${
            selectedColor === color.id ? "border-amber-400 ring-2 ring-amber-400" : "border-gray-300"
          }`}
          onClick={() => setSelectedColor(color.id)}
          aria-label={`Select ${color.id} color`}
        />
      ))}
    </div>
  )
}
