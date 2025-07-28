export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="w-full border-b bg-white">
        <div className="bg-blue-900 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-4 bg-blue-800 rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-blue-800 rounded w-24 animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-8 bg-blue-800 rounded w-16 animate-pulse"></div>
              <div className="h-8 bg-blue-800 rounded-full w-48 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-15 w-15 bg-gray-200 rounded-full animate-pulse"></div>
              <div>
                <div className="h-6 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
              </div>
            </div>
            <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white p-6 rounded-lg border mb-8">
          <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Featured News Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-48 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-l-4 border-l-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-6 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4 animate-pulse"></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded w-12 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular News Skeleton */}
        <div>
          <div className="h-8 bg-gray-200 rounded w-32 mb-4 animate-pulse"></div>
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-4/5 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <div className="bg-blue-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="h-5 bg-blue-800 rounded w-24 mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-blue-800 rounded w-32 animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
