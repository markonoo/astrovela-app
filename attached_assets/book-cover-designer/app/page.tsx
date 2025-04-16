import { BookCoverDesigner } from "@/components/book-cover-designer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-montserrat">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl tracking-wider">Personalize your book cover:</h1>
        </header>
        <BookCoverDesigner />
      </div>
    </main>
  )
}
