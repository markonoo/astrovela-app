export function PalmistryHistoryPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-stone-100 to-amber-50 text-gray-900 flex flex-col relative px-16 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light tracking-[0.15em] font-serif text-gray-800">
          THE HISTORY<br />OF PALMISTRY
        </h1>
      </div>

      <div className="flex-1 max-w-3xl mx-auto">
        <div className="flex items-start mb-6">
          <div className="text-8xl font-serif text-amber-700 mr-4 leading-none mt-2">T</div>
          <p className="text-base leading-relaxed text-gray-800 pt-4 font-medium">
            he art of palm reading dates back thousands of years, with evidence of its practice found in numerous ancient civilizations, including India, China, Egypt, and Mesopotamia. Initially intertwined with astrology, it was believed that the hands held celestial secrets, a bridge between the mundane and the divine.
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/palmistry-divider.png" 
            alt="Decorative palmistry divider"
            className="w-48 h-16 object-contain"
          />
        </div>

        <p className="text-sm leading-relaxed text-gray-800 mb-6 font-medium">
          In ancient India, palmistry was considered a branch of Samudrik Shastra, a comprehensive study of body features, and was extensively documented in the Vedic texts. The Chinese also contributed significantly to the development of palmistry, linking it to their philosophical and medicinal practices.
        </p>

        <p className="text-sm leading-relaxed text-gray-800 font-medium">
          Despite facing skepticism and condemnation, especially during the Middle Ages, palmistry flourished during the Renaissance, aligning itself more with science and psychology. In the 19<sup>th</sup> century, figures like Captain Casimir Stanislas D'Arpentigny and William John Warner, also known as Cheiro, further popularized palmistry in the Western world, linking it to both psychology and the natural sciences.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-700 text-lg">
        {pageNumber}
      </div>
    </div>
  )
}
