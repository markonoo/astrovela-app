"use client"
import React from "react"

type ReportPageProps = {
  id?: string; children: React.ReactNode; backgroundClassName? : string; className? : string; pageNumber?: number
}

export function ReportPage({ id, children, backgroundClassName, className, pageNumber }: ReportPageProps) {
  return (
    <section id={id} className="relative print:break-after-page">
      <div className={"a4-page page-shadow " + (backgroundClassName ?? "")}> 
        <div className={"a4-content w-full h-full flex flex-col flex-1 overflow-hidden " + (className ?? "")}> 
          {children}
        </div>
        {/* Page numbers are rendered by individual components, not here */}
      </div>
    </section>
  )
}

export default ReportPage


