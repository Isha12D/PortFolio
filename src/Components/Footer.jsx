import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>Isha Doifode</h3>
                    <p className='text-gray-400'>
                        Web Developer based in India, specializing in web and software development.
                    </p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>
                        <input type="email" placeholder='Enter Email' 
                        className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-purple-500'/>
                        <button
                          type="submit"
                          className='bg-gradient-to-r from-pink-500 to bg-purple-700 text-white px-4 py-2 rounded-r-lg'
                        >Submit</button>
                    </form>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>&copy; {new Date().getFullYear()}</p>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="https://www.linkedin.com/in/isha-doifode-a6b537283/" className='text-gray-400 hover:text-white'>
                        <FaLinkedinIn/> LinkedIn
                    </a>
                    <a  href="github.com/Isha12D?tab=repositories" className='text-gray-400 hover:text-white'>
                        <FaGithub/> GitHub
                    </a>
                    <a  href="#" className='text-gray-400 hover:text-white'>
                        <FaInstagram/> Instagram
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
