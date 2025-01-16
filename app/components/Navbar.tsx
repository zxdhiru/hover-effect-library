import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 p-4 px-6 md:px-32 transition-all duration-300 z-10 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-60 backdrop-blur-sm shadow-lg text-white dark:bg-white dark:text-black"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-xl md:text-2xl font-bold transition-colors ${
            isScrolled ? "text-white dark:text-black" : "text-black dark:text-white"
          }`}
        >
          Hover Effects Library
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-2xl transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/zxdhiru/hover-effects-library"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${
              isScrolled ? "text-white dark:text-black" : "text-black dark:text-white"
            }`}
          >
            Give us a star on GitHub
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 bg-opacity-80 dark:bg-white p-4 rounded-md shadow-md">
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/zxdhiru/hover-effects-library"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white dark:text-black transition-colors"
              >
                Give us a star on GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
