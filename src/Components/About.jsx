import React, { useContext } from 'react';
import myPhoto3 from '../assets/myPhoto3.jpg';
import { ThemeContext } from '../Context/ThemeContext';

const About = () => {
  const { darkMode } = useContext(ThemeContext); // Assume true = dark, false = light (orange)

  return (
    <div
      id="about"
      className={`py-20 transition-colors duration-500
        ${darkMode ? 'bg-slate-900 text-white' : 'bg-pink-100 text-black'}`}
    >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img 
            src={myPhoto3} 
            alt="My Photo" 
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />
          
          <div className='flex-1'>
            <p className='text-lg mb-8'>
              I am a final-year MCA student from MANIT Bhopal. I am a passionate full stack developer with a focus on building modern and responsive websites, with a strong foundation in frontend and backend technologies.
            </p>

            {/* CGPA Section */}
            <div className='mb-8'>
              <h3 className='text-2xl font-bold'>
                {/* Keep CGPA gradient text same for both modes */}
                <span className='bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent'>
                  CGPA
                </span>
              </h3>
              <p className={`text-3xl font-semibold`}>
                8.95
              </p>
            </div>

            {/* Technologies and Frameworks Heading */}
            <h3 className='text-2xl font-bold mb-4'>Technologies and Frameworks</h3>

            {/* Skill Bubbles */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {[
                'C++', 'Python', 'JavaScript', 
                'NodeJS', 'ExpressJS', 'ReactJS', 
                'HTML', 'CSS', 
                'Tailwind CSS', 'MySQL','MongoDB', 'Firebase'
              ].map(skill => (
                <div 
                  key={skill} 
                  className='bg-gradient-to-r from-pink-500 to-purple-700 p-0.5 rounded-full'
                >
                  <div className={`p-2 rounded-full text-center hover:bg-opacity-60 transition-colors duration-300 text-sm
                    ${darkMode 
                      ? 'bg-gray-700 bg-opacity-200 text-white' 
                      : 'bg-white text-black hover:bg-gray-100'}`}
                  >
                    <span className='font-semibold'>{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




