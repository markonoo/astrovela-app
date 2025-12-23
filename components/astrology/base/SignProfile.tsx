import React from "react"

type SignProfileProps = {
  sign: string
  symbol?: string
  title?: string
  description?: React.ReactNode
  traits?: Array<string>
  className?: string
}

export function SignProfile({ sign, symbol, title, description, traits, className }: SignProfileProps) {
  return (
    <div className={["space-y-4", className].filter(Boolean).join(" ")}> 
      <div className="text-center">
        <div className="text-6xl text-[#D4AF37] opacity-80">{symbol ?? ""}</div>
        <div className="font-serif tracking-[0.16em] text-xl text-[#D4AF37] mt-2">{sign.toUpperCase()}</div>
      </div>
      {title && <div className="text-lg font-serif tracking-[0.15em] font-serif text-[#D4AF37] text-center">{title}</div>}
      {description && <div className="canva-text-content">{description}</div>}
      {traits && traits.length > 0 && (
        <ul className="list-disc pl-6 canva-text-content">
          {traits.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SignProfile


