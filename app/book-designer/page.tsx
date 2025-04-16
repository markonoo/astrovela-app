"use client"

import { BookCoverDesigner } from "@/components/book-cover-designer"
import { PageLayout } from "@/components/shared/page-layout"

export default function BookDesignerPage() {
  return (
    <PageLayout 
      title="Book Cover Designer"
      description="Design a custom cover for your astrology book with our interactive designer."
    >
      <BookCoverDesigner />
    </PageLayout>
  )
} 