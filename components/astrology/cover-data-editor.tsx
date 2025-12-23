"use client"
import React from "react"
import { createPortal } from "react-dom"
import { useReportData } from "./report-data"
import { Sparkles, X, User, Calendar, MapPin, Sun, Moon, Palette, Check } from "lucide-react"

export function CoverDataEditor() {
  const { data, setData } = useReportData()
  const [isOpen, setIsOpen] = React.useState(false)
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [buttonContainer, setButtonContainer] = React.useState<HTMLElement | null>(null)

  // Find the button container on mount
  React.useEffect(() => {
    const container = document.getElementById("edit-button-container")
    setButtonContainer(container)
  }, [])

  const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ]

  // European date format helpers
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
  ]
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  // Parse current birth date
  const parseBirthDate = () => {
    try {
      const date = new Date(data.birthDate)
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      }
    } catch {
      return { day: 15, month: 3, year: 1990 }
    }
  }

  const [birthDay, setBirthDay] = React.useState(parseBirthDate().day)
  const [birthMonth, setBirthMonth] = React.useState(parseBirthDate().month)
  const [birthYear, setBirthYear] = React.useState(parseBirthDate().year)

  // Update birth date when dropdowns change
  React.useEffect(() => {
    const monthName = months.find(m => m.value === birthMonth)?.label || "January"
    const formattedDate = `${monthName} ${birthDay}, ${birthYear}`
    setData(prev => ({ ...prev, birthDate: formattedDate }))
  }, [birthDay, birthMonth, birthYear])

  const handleApplyChanges = () => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  const toggleButton = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="group relative overflow-hidden bg-white hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded-lg border border-gray-200 shadow-sm transition-all duration-200 flex items-center gap-2 text-sm font-medium"
      title="Edit document data"
    >
      <Sparkles className="w-4 h-4 text-amber-500" />
      <span>Edit</span>
    </button>
  )

  return (
    <>
      {/* Render button in toolbar if container exists */}
      {buttonContainer && createPortal(toggleButton, buttonContainer)}

      {/* Modern Apple-style Editor Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-[60] transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden z-[70] border border-gray-200">
            {/* Apple-style Header */}
            <div className="relative bg-gradient-to-b from-gray-50 to-white px-6 py-4 border-b border-gray-100">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
              <div className="text-center">
                <h3 className="text-base font-semibold text-gray-900">Document Settings</h3>
                <p className="text-xs text-gray-500 mt-0.5">Customize your astrology report</p>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-6 py-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  <User className="w-3.5 h-3.5" />
                  <span>Personal Information</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={data.firstName}
                      onChange={(e) => setData(prev => ({ ...prev, firstName: e.target.value.toUpperCase() }))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                      placeholder="CRISTINA"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={data.lastName}
                      onChange={(e) => setData(prev => ({ ...prev, lastName: e.target.value.toUpperCase() }))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                      placeholder="RODRIGUEZ"
                    />
                  </div>
                </div>
              </div>

              {/* Birth Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Birth Details</span>
                </div>

                {/* Birth Date - European Format */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Birth Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      value={birthDay}
                      onChange={(e) => setBirthDay(Number(e.target.value))}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    >
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select
                      value={birthMonth}
                      onChange={(e) => setBirthMonth(Number(e.target.value))}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    >
                      {months.map(month => (
                        <option key={month.value} value={month.value}>{month.label}</option>
                      ))}
                    </select>
                    <select
                      value={birthYear}
                      onChange={(e) => setBirthYear(Number(e.target.value))}
                      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Birth Time
                  </label>
                  <input
                    type="text"
                    value={data.birthTime}
                    onChange={(e) => setData(prev => ({ ...prev, birthTime: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    placeholder="15:30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    Birth Place
                  </label>
                  <input
                    type="text"
                    value={data.birthPlace}
                    onChange={(e) => setData(prev => ({ ...prev, birthPlace: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    placeholder="Los Angeles, California"
                  />
                </div>
              </div>

              {/* Cover Signs */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  <Sun className="w-3.5 h-3.5" />
                  <span>Cover Signs</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Sun Sign
                    </label>
                    <select
                      value={data.sunSign}
                      onChange={(e) => setData(prev => ({ ...prev, sunSign: e.target.value }))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    >
                      {zodiacSigns.map(sign => (
                        <option key={sign} value={sign.toLowerCase()}>{sign}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Moon Sign
                    </label>
                    <select
                      value={data.moonSign}
                      onChange={(e) => setData(prev => ({ ...prev, moonSign: e.target.value }))}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                    >
                      {zodiacSigns.map(sign => (
                        <option key={sign} value={sign.toLowerCase()}>{sign}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Planetary Placements */}
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    <Moon className="w-3.5 h-3.5" />
                    <span>Planetary Placements</span>
                  </div>
                  <span className="text-xs text-gray-400">Updates pages 7-29</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { key: 'risingSign', label: 'Rising' },
                    { key: 'mercurySign', label: 'Mercury' },
                    { key: 'venusSign', label: 'Venus' },
                    { key: 'marsSign', label: 'Mars' },
                    { key: 'jupiterSign', label: 'Jupiter' },
                    { key: 'saturnSign', label: 'Saturn' },
                    { key: 'uranusSign', label: 'Uranus' },
                    { key: 'neptuneSign', label: 'Neptune' },
                    { key: 'plutoSign', label: 'Pluto' },
                    { key: 'chironSign', label: 'Chiron' },
                  ].map(({ key, label }) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        {label}
                      </label>
                      <select
                        value={data[key as keyof typeof data] as string}
                        onChange={(e) => setData(prev => ({ ...prev, [key]: e.target.value }))}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-gray-900"
                      >
                        {zodiacSigns.map(sign => (
                          <option key={sign} value={sign.toLowerCase()}>{sign}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cover Color */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Cover Color</span>
                </div>

                <div className="flex gap-3">
                  <input
                    type="color"
                    value={data.coverColor}
                    onChange={(e) => setData(prev => ({ ...prev, coverColor: e.target.value }))}
                    className="w-12 h-10 border border-gray-200 rounded-lg cursor-pointer"
                  />
                  <input
                    type="text"
                    value={data.coverColor}
                    onChange={(e) => setData(prev => ({ ...prev, coverColor: e.target.value }))}
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-mono text-sm"
                    placeholder="#3d5a4a"
                  />
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { color: "#3d5a4a", name: "Sage" },
                    { color: "#6B2737", name: "Burgundy" },
                    { color: "#1a1a1a", name: "Black" },
                    { color: "#d4c5b9", name: "Beige" }
                  ].map(({ color, name }) => (
                    <button
                      key={color}
                      onClick={() => setData(prev => ({ ...prev, coverColor: color }))}
                      className="group relative h-16 rounded-lg overflow-hidden border-2 transition-all hover:scale-105"
                      style={{ 
                        backgroundColor: color,
                        borderColor: data.coverColor === color ? '#f59e0b' : 'transparent'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium px-2 py-0.5 rounded bg-white/90 text-gray-700">
                        {name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Apple-style Footer with Apply Button */}
            <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent px-6 py-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-amber-50 rounded-lg p-2.5 border border-amber-100">
                  <p className="text-xs text-amber-800 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>Changes apply <strong>instantly</strong> to your document</span>
                  </p>
                </div>
                <button
                  onClick={handleApplyChanges}
                  className="relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 text-sm"
                >
                  {showSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Applied!</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Apply</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
