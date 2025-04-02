"use client"

interface ProductOptionProps {
  type: "app" | "paperback" | "ebook"
  title: string
  features: string[]
  price: string
  originalPrice: string
  priceUnit?: string
  imageSrc?: string
  isSelected?: boolean
  onSelect?: () => void
  saleTag?: string
}

export function ProductOption({
  type,
  title,
  features,
  price,
  originalPrice,
  priceUnit = "",
  imageSrc = "/placeholder.svg?height=80&width=60",
  isSelected = true,
  onSelect,
  saleTag,
}: ProductOptionProps) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden mb-4 border-2 border-yellow-400 ${
        isSelected ? "ring-2 ring-yellow-400" : ""
      } cursor-pointer`}
      onClick={onSelect}
    >
      {saleTag && <div className="bg-yellow-400 py-1 text-center text-sm font-medium">{saleTag}</div>}
      <div className="p-4">
        <div className="flex items-start">
          <div className="mr-4 flex-shrink-0">
            <div className="w-6 h-6 rounded-none bg-yellow-400 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-white">
                <path d="M5 12l5 5L20 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start">
              <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-20 h-auto mr-4" />

              <div>
                <h3 className="font-bold">{title}</h3>
                <ul className="mt-2 space-y-1">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-xs mr-2">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Price section at the bottom with gray background */}
        <div className="mt-3 bg-gray-100 p-2 rounded text-center">
          <span className="text-green-600 font-bold">{price}</span>
          <span className="text-gray-500 line-through ml-2">{originalPrice}</span>
          {priceUnit && <span className="text-gray-500 text-xs ml-1">{priceUnit}</span>}
        </div>
      </div>
    </div>
  )
}

