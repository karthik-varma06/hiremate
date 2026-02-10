import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b1220]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold text-orange-500">
          HireMate
        </Link>

        <div className="flex gap-6 items-center">
          <Link to="/dashboard" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>

          <Link
            to="/new"
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-semibold"
          >
            New Application
          </Link>
        </div>
      </div>
    </div>
  );
}
