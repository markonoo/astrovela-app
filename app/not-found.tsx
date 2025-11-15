import Link from 'next/link'
import { PageLayout } from '@/components/shared/page-layout'

export default function NotFound() {
  return (
    <PageLayout
      title="Page Not Found"
      description="The page you're looking for doesn't exist."
    >
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#28293d] text-white rounded-lg hover:bg-[#1a1b28] transition-colors"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}




