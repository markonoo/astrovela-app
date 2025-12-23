export function LoveCrystalsCollectionReplica({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="h-full bg-gradient-to-br from-rose-950 via-red-950 to-rose-900 text-amber-100 flex flex-col justify-center relative px-16 py-10">
      {/* Decorative stars and hearts background - placeholder */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-amber-400/30 text-xs">
            Background Pattern
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Amethyst */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src="/purple-amethyst-crystal-cluster.png" alt="Amethyst" className="w-24 h-28 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-amber-200 mb-3">AMETHYST</h3>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            Amethyst is a crystal of spiritual growth and healing. It helps to calm the mind and emotions, making it easier to connect with your true self and attract a partner who resonates with your highest good. Amethyst's protective qualities also shield your relationship from negative influences and stress.
          </p>
        </div>

        {/* Moonstone */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src="/blue-white-moonstone-crystal.png" alt="Moonstone" className="w-24 h-28 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-amber-200 mb-3">MOONSTONE</h3>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            Moonstone is often associated with new beginnings and emotional balance. Its energy is deeply connected to the divine feminine, making it an excellent stone for attracting love and enhancing intuition. Moonstone can help you tap into your inner wisdom and navigate the emotional complexities of relationships with grace.
          </p>
        </div>

        {/* Rhodonite */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src="/pink-rhodonite-crystal-stone.png" alt="Rhodonite" className="w-24 h-28 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-amber-200 mb-3">RHODONITE</h3>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            Rhodonite is a powerful stone for emotional healing and balance. It helps to clear away emotional wounds and scars from the past, making it easier to open up to new love. Rhodonite also encourages forgiveness and understanding, essential for building strong, healthy relationships.
          </p>
        </div>

        {/* Garnet */}
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <img src="/deep-red-garnet-crystal-gemstone.png" alt="Garnet" className="w-24 h-28 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-amber-200 mb-3">GARNET</h3>
          <p className="text-sm leading-relaxed text-amber-100 font-medium">
            Garnet is a stone of passion and commitment. Its fiery energy ignites romance and desire, helping you to attract and maintain a passionate relationship. Garnet also strengthens trust and loyalty, essential components for any long-term partnership.
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-amber-200 text-lg z-10">
        {pageNumber}
      </div>
    </div>
  )
}
