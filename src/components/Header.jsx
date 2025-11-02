import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="relative flex items-center justify-center w-14 h-14">
          {/* Rotating Border Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin-slow"></div>

          {/* Inner Circle */}
          <div className="relative w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center shadow-[0_0_20px_#22d3ee]">
            <span className="text-cyan-400 font-bold text-lg">DP</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-gray-300 font-medium bg-gray-900/95">
          {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
