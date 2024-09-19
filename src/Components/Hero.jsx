import React from 'react';
import myPhoto from '../assets/myPhoto2.jpg';

const Hero = () => {
  return (
    <div className='bg-black text-center text-white py-16'>
      <img src={myPhoto} alt="" 
      className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to bg-purple-700'>Isha Doifode</span>
        , Web Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I create innovative and responsive websites.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-pink-500 to bg-purple-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        <button className='bg-gradient-to-r from-pink-500 to bg-purple-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
      </div>
    </div>
  )
}

export default Hero
