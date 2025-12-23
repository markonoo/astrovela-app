export function TarotReadingPhoto({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full relative overflow-hidden bg-black">
      {/* Full Page Tarot Reading Photo */}
      <img 
        src="/tarot-reading-photo.png" 
        alt="Mystical tarot reading scene"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-100 text-lg z-20">
        {pageNumber}
      </div>
    </div>
  )
}
