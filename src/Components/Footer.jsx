import React, { useContext } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ThemeContext } from '../Context/ThemeContext';



const Footer = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <footer className= {`py-8 ${darkMode? 'bg-gray-900 text-white': 'bg-orange-50 text-gray-700'}`}>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
          <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl font-bold mb-2'>Isha Doifode</h3>
            <p className={`${darkMode? 'text-gray-400': 'text-gray-600'}`}>
              Full Stack Developer based in India, specializing in web and software development.
            </p>
            {/* Resume button will appear below paragraph on mobile */}
            <div className='mt-4 md:hidden'>
              <a
                href='/IshaDResumeMS.pdf' // replace with actual link
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-pink-500 to bg-purple-700 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'
              >
                My Resume
              </a>
            </div>
  
          </div>

          <div className='flex-1 w-full'>
            {/* Resume button for desktop */}
            <div className='flex-1 w-full hidden md:flex items-center justify-center'>
              <a
                href="/IshaDResumeMS.pdf"
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-pink-500 to bg-purple-700 text-white px-8 py-2 ml-72 rounded-full transform transition-transform duration-300 hover:scale-105'
              >
                My Resume
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-900 text-lg'>&copy; {new Date().getFullYear()}</p>

          <div className='flex space-x-6 mr-9 my-4 md:my-0 text-2xl'>
            <a
              href="https://www.linkedin.com/in/isha-doifode-a6b537283/"
              className={`${darkMode?'text-gray-400 hover:text-white':'text-gray-600 hover:text-gray-900'}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Isha12D?tab=repositories"
              className={`${darkMode?'text-gray-400 hover:text-white':'text-gray-600 hover:text-gray-900'}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className={`${darkMode?'text-gray-400 hover:text-white':'text-gray-600 hover:text-gray-900'}`}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
