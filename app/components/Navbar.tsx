import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 p-4 px-32 transition-all duration-300 z-10 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-60 backdrop-blur-sm shadow-lg text-white dark:bg-white dark:text-black"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors ${
            isScrolled ? "text-white dark:text-black" : "text-black dark:text-white"
          }`}
        >
          Hover Effects Library
        </Link>

        {/* Right side - GitHub link */}
        <div className="flex items-center space-x-4">
          <ul>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
