import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`px-8 md:px-16 lg:px-24 transition-colors duration-500 
      ${darkMode ? 'bg-black text-white' : 'bg-orange-50 text-black'}`}>
      
      <div className='container py-4 flex justify-between items-center'>
        
        {/* Name */}
        <div className='text-2xl font-semibold '>
          {darkMode ? '𝓘𝓼𝓱𝓪 𝓓𝓸𝓲𝓯𝓸𝓭𝓮' : (
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700'>
              𝓘𝓼𝓱𝓪 𝓓𝓸𝓲𝓯𝓸𝓭𝓮
            </span>
          )}
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className='md:hidden text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center space-x-7 '>
          <a href="#home" className='hover:text-pink-400'>Home</a>
          <a href="#about" className='hover:text-pink-400'>About</a>
          <a href="#projects" className='hover:text-pink-400'>Projects</a>
          <a href="#contact" className='hover:text-pink-400'>Contact</a>
        </div>

          {/* Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer ml-2 md:flex hidden">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={darkMode}
              onChange={toggleTheme}
            />
            <div className={`w-25 h-10 rounded-full px-10 flex items-center 
              transition-colors duration-300 
              ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
              <span className={`text-sm font-medium mx-auto transition-colors duration-300  
                ${darkMode ? 'text-white' : 'text-black'}`}>
                {darkMode ? 'Dark' : 'Light'}
              </span>
              <div
                className={`absolute left-1 top-1 h-8 w-8 rounded-full flex items-center justify-center 
                  transition-all duration-300 shadow-md
                  ${darkMode ? 'translate-x-[68px] bg-white text-black' : 'translate-x-0 bg-white text-yellow-500'}`}
              >
                {darkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
              </div>
            </div>
          </label>
        
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden px-8 pb-4 space-y-4'>
          <a href="#home" className='block hover:text-pink-400'>Home</a>
          <a href="#about" className='block hover:text-pink-400'>About</a>
          <a href="#projects" className='block hover:text-pink-400'>Projects</a>
          <a href="#contact" className='block hover:text-pink-400'>Contact</a>

          {/* Toggle Switch in Mobile */}
          <label className="relative inline-flex items-center cursor-pointer mt-4">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={darkMode}
              onChange={toggleTheme}
            />
            <div className={`w-28 h-10 rounded-full px-10  flex items-center 
              transition-colors duration-300
              ${darkMode ? 'bg-gray-800' : 'bg-gray-300'}`}>
              <span className={`text-sm font-medium mx-auto transition-colors duration-300 
                ${darkMode ? 'text-white' : 'text-black'}`}>
                {darkMode ? 'Dark' : 'Light'}
              </span>
              <div
                className={`absolute left-1 top-1 h-8 w-8 rounded-full flex items-center justify-center 
                  transition-all duration-300 shadow-md
                  ${darkMode ? 'translate-x-[68px] bg-white text-black' : 'translate-x-0 bg-white text-yellow-500'}`}
              >
                {darkMode ? <FaMoon size={16} /> : <FaSun size={16} />}
              </div>
            </div>
          </label>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
