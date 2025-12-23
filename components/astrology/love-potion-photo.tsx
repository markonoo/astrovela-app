export function LovePotionPhoto({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center">
      {/* Full-page mystical background image */}
      <img 
        src="/love-potion-mystical-bg.png" 
        alt="Love potion mystical background" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10" style={{
        textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
      }}>
        {pageNumber}
      </div>
    </div>
  )
}
