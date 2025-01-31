import React, { useState } from 'react';

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='border-b border-b-slate-800'>
      <div className='container mx-auto'>
        <nav className='min-h-20 flex items-center justify-between'>
          {/* Logo and Title */}
          <div>
            <p style={{ fontFamily: 'Limelight, cursive' }} className='text-xl'>
              Pooja Yadav
            </p>
          </div>
          
          {/* Burger Menu Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden lg:flex gap-14">
            <ul className="flex gap-14">
              <li
                onClick={() => scrollToSection('home')}
                className='text-gray-300 text-lg font-medium cursor-pointer'>
                Home
              </li>
              <li
                onClick={() => scrollToSection('about')}
                className='text-gray-300 text-lg font-medium cursor-pointer'>
                About
              </li>
              <li
                onClick={() => scrollToSection('skills')}
                className='text-gray-300 text-lg font-medium cursor-pointer'>
                Skills
              </li>
              <li
                onClick={() => scrollToSection('projects')}
                className='text-gray-300 text-lg font-medium cursor-pointer'>
                Projects
              </li>
              <li
                onClick={() => scrollToSection('contact')}
                className='text-gray-300 text-lg font-medium cursor-pointer'>
                Contact
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white p-5`}>
        <ul>
          <li
            onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
            className='py-2 text-gray-300 text-lg font-medium cursor-pointer'>
            Home
          </li>
          <li
            onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}
            className='py-2 text-gray-300 text-lg font-medium cursor-pointer'>
            About
          </li>
          <li
            onClick={() => { scrollToSection('skills'); setIsMenuOpen(false); }}
            className='py-2 text-gray-300 text-lg font-medium cursor-pointer'>
            Skills
          </li>
          <li
            onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }}
            className='py-2 text-gray-300 text-lg font-medium cursor-pointer'>
            Projects
          </li>
          <li
            onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
            className='py-2 text-gray-300 text-lg font-medium cursor-pointer'>
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
