import React from 'react';
import {FaEnvelope, FaPhone, FaMapMarkedAlt} from 'react-icons/fa';


const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1 w-full'>    
                    <h3 className='text-bold text-3xl text-purple-700  '>Let's Talk</h3>
                    <p >I'm open to discuss web development projects and opportunities.</p> 
                     <div className='mb-4 mt-8'>
                        <FaEnvelope className = 'inline-block text-purple-500 mr-2'></FaEnvelope>
                        <a href="mailto:ishadoifode6@gmail.com" className='hover:underline'>ishadoifode6@gmail.com</a>
                     </div>
                    <div className='mb-4 mt-8'>
                        <FaPhone className='inline-block text-purple-500 mr-2'></FaPhone>
                        <span>+91 9340815551</span>
                    </div>   
                    <div className='mb-4 mt-8'>
                        <FaMapMarkedAlt className='inline-block text-purple-500 mr-2'></FaMapMarkedAlt>
                        <span>MANIT Bhopal, (M.P.)</span>
                    </div>      
                </div>
                {/* form section */}
                <div className='flex-1 w-full'>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>Your Name</label>
                            <input type="text" 
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus-border-purple-400'
                            placeholder='Enter Your Name'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block mb-2'>Your Email</label>
                            <input type="email" 
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus-border-purple-400'
                            placeholder='Enter Your Email'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block mb-2'>Message</label>
                            <textarea type="text" 
                            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus-border-purple-400'
                            rows="5"
                            placeholder='Enter Your Message'/>
                        </div>
                        <button  className='bg-gradient-to-r from-pink-500 to bg-purple-700 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
