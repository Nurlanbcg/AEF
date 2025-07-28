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
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>

        {/* Title Skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-96 animate-pulse"></div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border">
              <div className="flex justify-between items-center mb-4">
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-12 mb-2 animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Filters Skeleton */}
        <div className="bg-white p-6 rounded-lg border mb-6">
          <div className="h-6 bg-gray-200 rounded w-16 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Table Skeleton */}
        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
          <div className="p-6">
            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 mb-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            {/* Table Rows */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-8 gap-4 mb-3 py-2">
                {[...Array(8)].map((_, j) => (
                  <div key={j} className="h-4 bg-gray-100 rounded animate-pulse"></div>
                ))}
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
