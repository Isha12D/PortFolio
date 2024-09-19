import React from 'react';
import myPhoto from '../assets/myPhoto2.jpg';

const About = () => {
  return (
    <div className='bg-slate-900 text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img 
            src={myPhoto} 
            alt="My Photo" 
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />
          
          <div className='flex-1'>
            <p className='text-lg mb-8'>
              I am a second-year MCA student from MANIT Bhopal. I am a passionate web developer with a focus on building modern and responsive websites, with a strong foundation in frontend and backend technologies.
            </p>

            {/* CGPA Section */}
            <div className=' mb-8'>
              <h3 className='text-2xl font-bold'>
                <span className='bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent'>
                  CGPA
                </span>
              </h3>
              <p className='text-3xl font-semibold'>9.08</p>
            </div>

            {/* Technologies and Frameworks Heading */}
            <h3 className='text-2xl font-bold mb-4'>Technologies and Frameworks</h3>

            {/* Skill Bubbles */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {[
                'C++', 'Python', 'JavaScript', 
                'NodeJS', 'ExpressJS', 'ReactJS', 
                'MongoDB', 'HTML', 'CSS', 
                'Tailwind CSS', 'MySQL', 'DBMS'
              ].map(skill => (
                <div 
                  key={skill} 
                  className='bg-gradient-to-r from-pink-500 to-purple-700 p-0.5 rounded-full'
                >
                  <div className='bg-gray-700 bg-opacity-200 p-2 rounded-full text-center hover:bg-opacity-60 transition-colors duration-300 text-sm'>
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
