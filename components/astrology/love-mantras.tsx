import React from "react"
import { Section } from "./base/Section"

interface LoveMantrasProps {
  pageNumber: number
}

export function LoveMantras({ pageNumber }: LoveMantrasProps) {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-100 flex flex-col flex-1 relative overflow-hidden">
      <Section className="page-light flex flex-col justify-between p-4">
        <div>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-light mb-4 tracking-[0.15em] font-serif text-purple-800">
              SACRED LOVE MANTRAS
            </h1>
            <div className="w-24 h-px bg-purple-600 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            <div className="text-center mb-6">
              <p className="text-base italic text-purple-700 font-light">
                "Sacred vibrations that align the heart with universal love energy and attract divine partnership."
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Sanskrit Love Mantras</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-white/70 p-4 rounded">
                  <h3 className="font-medium mb-2 text-purple-600">Om Shrim Hrim Klim Glaum Gam Ganapataye Vara Varada Sarvajanam Me Vashamanaya Svaha</h3>
                  <p className="italic mb-1">For attracting love and removing obstacles to relationships</p>
                  <p className="text-purple-600">Chant 108 times daily facing east</p>
                </div>
                <div className="bg-purple-50 p-4 rounded">
                  <h3 className="font-medium mb-2 text-pink-600">Om Hrim Shrim Klim Parasaktiye Namaha</h3>
                  <p className="italic mb-1">To invoke the divine feminine and attract soul mate love</p>
                  <p className="text-pink-600">Best chanted during Venus hour</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Tibetan Love Mantras</h2>
              <div className="space-y-3 text-xs">
                <div className="bg-pink-50 p-4 rounded">
                  <h3 className="font-medium mb-2 text-red-600">Om Tare Tuttare Ture Svaha</h3>
                  <p className="italic mb-1">Green Tara mantra for swift assistance in love matters</p>
                  <p className="text-red-600">Particularly powerful for healing heartbreak</p>
                </div>
                <div className="bg-rose-50 p-4 rounded">
                  <h3 className="font-medium mb-2 text-rose-600">Om Mani Padme Hum</h3>
                  <p className="italic mb-1">Compassion mantra that opens the heart chakra</p>
                  <p className="text-rose-600">Creates loving-kindness in all relationships</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-3 text-purple-700">Modern Love Mantras</h2>
              <div className="space-y-2 text-xs">
                <div className="bg-white/60 p-3 rounded">
                  <strong>"I am love, I attract love, I am loved"</strong> - For daily self-love practice
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <strong>"Divine love flows through me now"</strong> - To channel universal love energy
                </div>
                <div className="bg-pink-50 p-3 rounded">
                  <strong>"My heart is open to receive sacred love"</strong> - For relationship readiness
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-purple-700">Mantra Practice Guidelines</h3>
              <div className="text-xs space-y-1">
                <p>• <strong>Best Times:</strong> Dawn, dusk, and during Venus transits</p>
                <p>• <strong>Repetition:</strong> 21, 54, or 108 times for maximum effectiveness</p>
                <p>• <strong>Posture:</strong> Sit facing east or northeast, spine straight</p>
                <p>• <strong>Focus:</strong> Visualize your heart chakra glowing with pink light</p>
                <p>• <strong>Mala:</strong> Use rose quartz or rose wood mala beads</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}