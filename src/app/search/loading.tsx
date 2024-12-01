export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
      <p className="ml-4 text-blue-500 font-medium text-lg">Loading...</p>
    </div>
  );
}
