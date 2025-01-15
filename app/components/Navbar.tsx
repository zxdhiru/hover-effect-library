import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 p-4 px-32 transition-all duration-300 z-10 text-white ${
        isScrolled
          ? 'bg-white bg-opacity-60 backdrop-blur-sm shadow-lg text-white'
          : 'bg-transparent text-black'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className={`text-2xl font-bold ${isScrolled? 'text-black': 'text-white'}`}>Hover effects Library</Link>
        {/* <div className="text-2xl font-bold text-gray-800">Logo</div> */}

        {/* Right side - Search Button and GitHub link */}
        <div className="flex items-center space-x-4">
          {/* Search Button
          <button className="text-gray-800 hover:text-gray-600">
            <FaSearch size={20} />
          </button> */}

          {/* GitHub Link */}
          <ul>
            <li>
                <a
            href="https://github.com/zxdhiru/hover-effects-library"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm ${isScrolled? 'text-black': 'text-white'}`}
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
