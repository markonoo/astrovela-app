export function CosmicNebulaSpace({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center">
      {/* Full-page background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/cosmic-nebula-space.jpg)' }}
      />

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
