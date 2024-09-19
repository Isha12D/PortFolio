import React from 'react';



const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>    
                    <h3>Let's Talk'</h3>
                    <p>I'm open to discuss web development projects and opportunities.</p>
                     <div className='mb-4 mt-8'>
                        <FaEnvelope className = 'inline-block text-purple-500 mr-2'></FaEnvelope>
                        <a href="mailto:ishadoifode6@gmail.com" className='hover:underline'>ishadoifode6@gmail.com</a>
                     </div>  
                     <div className='mb-4 mt-8'>
                        <FaEnvelope className = 'inline-block text-purple-500 mr-2'></FaEnvelope>
                        <a href="mailto:ishadoifode6@gmail.com" className='hover:underline'>ishadoifode6@gmail.com</a>
                     </div>
                        <div className='flex-1 w-full'>
                        <FaPhone className='inline-block text-purple-500 mr-2'></FaPhone>
                        <span>+91 9340815551</span>
                    </div>   
                        <div className='flex-1 w-full'>
                        <FaMapMarkedAlt className='inline-block text-purple-500 mr-2'></FaMapMarkedAlt>
                        <span>MANIT Bhopal, (M.P.)</span>
                    </div>      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
