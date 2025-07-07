"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProductOptionProps {
  type: "app" | "paperback" | "ebook"
  title: string
  features: string[]
  price: string
  originalPrice?: string
  priceUnit?: string
  imageSrc: string
  isSelected: boolean
  onSelect: () => void
  saleTag?: string
}

export function ProductOption({
  type,
  title,
  features,
  price,
  originalPrice,
  priceUnit = "",
  imageSrc,
  isSelected,
  onSelect,
  saleTag,
}: ProductOptionProps) {
  // Show "INCLUDED" badge when price is FREE
  const showIncludedBadge = price === "FREE" && isSelected;

  return (
    <div
      className={cn(
        "border-2 rounded-lg p-4 mb-4 cursor-pointer transition-all duration-200 relative",
        "hover:shadow-md active:scale-[0.98]", // Mobile touch feedback
        isSelected
          ? "border-yellow-400 bg-yellow-50"
          : "border-gray-200 hover:border-gray-300"
      )}
      onClick={onSelect}
    >
      {saleTag && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {saleTag}
        </div>
      )}
      
      {showIncludedBadge && (
        <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          INCLUDED
        </div>
      )}

      <div className="flex items-start space-x-3 sm:space-x-4">
        {/* Product Image - Responsive sizing */}
        <div className="flex-shrink-0">
          <div className="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              width={80}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title and Price Row */}
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-gray-900 text-sm sm:text-base leading-tight">
              {title}
            </h3>
            <div className="text-right ml-2 flex-shrink-0">
              <div className="font-bold text-lg sm:text-xl text-gray-900">
                {price}
                {priceUnit && <span className="text-sm text-gray-600">{priceUnit}</span>}
              </div>
              {originalPrice && originalPrice !== price && (
                <div className="text-sm text-gray-500 line-through">
                  {originalPrice}
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-1">
                  {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

        {/* Selection Indicator */}
        <div className="flex-shrink-0 ml-2">
          <div
            className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all",
              isSelected
                ? "border-yellow-400 bg-yellow-400"
                : "border-gray-300"
            )}
          >
            {isSelected && (
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

