import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-5xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Page not found!</p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
