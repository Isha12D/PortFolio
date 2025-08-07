import React, { useContext } from 'react';
import myPhoto3 from '../assets/myPhoto3.jpg';
import { ThemeContext } from '../Context/ThemeContext';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`text-center py-16 transition-colors duration-500 
      ${darkMode ? 'bg-black text-white' : 'bg-orange-50 text-black'}`}>

      {/* Profile Image */}
      <img 
        src={myPhoto3} 
        alt="My Photo" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />

      {/* Heading */}
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700'>
            Isha Doifode
          </span>
        
        , Full Stack Developer
      </h1>

      {/* Subtext */}
      <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Transforming ideas into stunning digital experiences.
      </p>

      {/* Contact Button */}
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-pink-500 to-purple-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href="#contact">Contact Me</a>
        </button>
      </div>

    </div>
  );
};

export default Hero;
