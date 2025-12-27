export function AgateMarbleTexture({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, 
            rgba(245, 222, 179, 0.9) 0%, 
            rgba(222, 184, 135, 0.95) 25%,
            rgba(205, 170, 125, 0.9) 50%,
            rgba(188, 143, 143, 0.95) 75%,
            rgba(210, 180, 140, 0.9) 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
                <feColorMatrix type="saturate" values="0"/>
              </filter>
            </defs>
            <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5"/>
          </svg>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <radialGradient id="blob1" cx="30%" cy="40%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
            <radialGradient id="blob2" cx="70%" cy="60%">
              <stop offset="0%" stopColor="#f5deb3" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <ellipse cx="30%" cy="40%" rx="200" ry="300" fill="url(#blob1)"/>
          <ellipse cx="70%" cy="60%" rx="250" ry="200" fill="url(#blob2)"/>
          <circle cx="150" cy="300" r="3" fill="white" opacity="0.6"/>
          <circle cx="500" cy="200" r="4" fill="white" opacity="0.5"/>
          <circle cx="700" cy="450" r="2" fill="white" opacity="0.7"/>
        </svg>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-900 text-lg font-medium">
        {pageNumber}
      </div>
    </div>
  )
}
