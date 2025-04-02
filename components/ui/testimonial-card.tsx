import { StarRating } from "./star-rating"

interface TestimonialCardProps {
  quote: string
  name: string
  age?: number
  rating?: number
  verified?: boolean
  imageSrc: string
}

export function TestimonialCard({ quote, name, age, rating = 5, verified = true, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="mb-3">
        <img src={imageSrc || "/placeholder.svg"} alt={`${name}'s testimonial`} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <p className="text-gray-800 mb-3 text-sm">"{quote}"</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-sm">
              {name}
              {age ? `, ${age}` : ""}
            </p>
            <StarRating rating={rating} />
          </div>
          {verified && (
            <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Verified
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

