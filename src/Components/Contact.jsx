import React, { useContext, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../Context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const {darkMode} = useContext(ThemeContext);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    // Toast
    toast.success('Message sent successfully!');

    // Actually submit form to Netlify
    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      body: data
    })
      .then(() => {
        form.reset();
      })
      .catch(error => {
        toast.error('Oops! Something went wrong.');
      });
  };

  return (
    <div className={` py-20 id='contact ${darkMode? 'bg-black text-white': 'bg-pink-100 text-black'}`} id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='flex-1 w-full'>
            <h3 className='text-bold text-3xl text-purple-700'>Let's Talk</h3>
            <p>I'm open to discuss web development projects and opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-purple-500 mr-2' />
              <a href="mailto:ishadoifode6@gmail.com" className='hover:underline'>ishadoifode6@gmail.com</a>
            </div>
            <div className='mb-4 mt-8'>
              <FaPhone className='inline-block text-purple-500 mr-2' />
              <span>+91 9340815551</span>
            </div>
            <div className='mb-4 mt-8'>
              <FaMapMarkedAlt className='inline-block text-purple-500 mr-2' />
              <span>MANIT Bhopal, (M.P.)</span>
            </div>
          </div>

          {/* form section */}
          <div className='flex-1 w-full'>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className='space-y-4'
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                  className={`w-full p-2 rounded border focus:outline-none focus:border-purple-400
                    ${darkMode
                      ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white'
                      : 'bg-white border-gray-300 placeholder-gray-500 text-black'}`}
                  placeholder='Enter Your Name'
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Your Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className={`w-full p-2 rounded border focus:outline-none focus:border-purple-400
                    ${darkMode
                      ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white'
                      : 'bg-white border-gray-300 placeholder-gray-500 text-black'}`}
                  placeholder='Enter Your Email'
                />    
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  rows="5"
                  required
                  className={`w-full p-2 rounded border focus:outline-none focus:border-purple-400
                    ${darkMode
                      ? 'bg-gray-800 border-gray-600 placeholder-gray-400 text-white'
                      : 'bg-white border-gray-300 placeholder-gray-500 text-black'}`}
                  placeholder='Enter Your Message'
                />
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-pink-500 to-purple-700 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default Contact;
