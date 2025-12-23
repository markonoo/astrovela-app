export function NumerologyMandalaReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 relative overflow-hidden">
      {/* Mandala Image - Full page background */}
      <img 
        src="/numerology-mandala.png" 
        alt="Numerology Mandala - Sacred Geometry"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Page number */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
