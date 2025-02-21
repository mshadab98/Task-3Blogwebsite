import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 text-white p-6 shadow-lg transition duration-300">
      <div className="container mx-auto flex justify-between items-center md:px-[10rem] px-4">
        
        <Link to="/" className="text-2xl font-bold">
          BlogSite
        </Link>

        
        <div className="hidden md:flex space-x-7">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/travel" className="hover:underline">Travel</Link>
          <Link to="/createblog" className="hover:underline">Create Blog</Link>
        </div>

      
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-3xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300"
        >
          {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl ml-4 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 dark:bg-gray-800 text-white text-center p-4 space-y-4">
          <Link to="/" className="block hover:underline">Home</Link>
          <Link to="/travel" className="block hover:underline">Travel</Link>
          <Link to="/createblog" className="block hover:underline">Create Blog</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
