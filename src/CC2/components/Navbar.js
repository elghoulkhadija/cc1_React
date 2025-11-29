import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0  left-0 w-full bg-blue-400  border-t border-gray-200">
      <div className="container mx-auto px-5 flex items-center gap-8 py-2 ">
        <Link to="/" className="text-gray-700 hover:text-white font-bold transition-colors">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-white  font-bold transition-colors">About</Link>
        <Link to="/recherche" className="text-gray-700 hover:text-white  font-bold transition-colors">Recherche</Link>
      </div>
    </nav>
  );
}
