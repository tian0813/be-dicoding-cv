import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false); // Tutup menu mobile setelah klik
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white bg-opacity-20 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              onClick={() => handleNavClick("home")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
            >
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold mr-2">
                  AI
                </div>
                <span className="font-semibold text-lg text-gray-900">
                  Smart Recruiter
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <a
              onClick={() => handleNavClick("home")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleNavClick("fitur")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
            >
              Fitur
            </a>
            <a
              onClick={() => handleNavClick("kontak")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer"
            >
              Kontak
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm">
              Login
            </button>
          </nav>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <a
            onClick={() => handleNavClick("home")}
            className="block text-gray-700 hover:text-gray-900 py-2 text-sm font-medium cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleNavClick("fitur")}
            className="block text-gray-700 hover:text-gray-900 py-2 text-sm font-medium cursor-pointer"
          >
            Fitur
          </a>
          <a
            onClick={() => handleNavClick("kontak")}
            className="block text-gray-700 hover:text-gray-900 py-2 text-sm font-medium cursor-pointer"
          >
            Kontak
          </a>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm cursor-pointer">
            Login
          </button>
        </div>
      )}
    </header>
  );
};
