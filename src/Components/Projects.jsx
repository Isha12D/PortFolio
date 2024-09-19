import React from 'react';
import img1 from '../assets/BWlogo.jpg';
import img2 from '../assets/s1.png';
import img3 from '../assets/s2.png';
import img4 from '../assets/tkinter.jpg';

const projects = [
    {
        id: 1,
        name: "Shim Services - A home service website",
        image: img1,
        technologies: "FullStack Project",
    },
    {
        id: 2,
        name: "Spotify Clone",
        image: img2,
        technologies: "ReactJs, Tailwind CSS",
    },
    {
        id: 3,
        name: "Password Generator - Tkinter",
        image: img4,
        technologies: "Python, MySQL",
    },
];

const Projects = () => {
  return (
    <div className='bg-black text-white py-20 overflow-x-hidden' id='about'> {/* Prevent horizontal overflow */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl'> {/* Use max width for larger screens */}
            <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'> {/* Reduce gaps */}
            {projects.map((project) => (
                <div key={project.id} className='bg-gray-800 p-4 sm:p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img 
                        src={project.image} 
                        alt={project.name} 
                        className='rounded-lg mb-4 w-full max-h-48 object-contain' 
                    />
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className='inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white px-4 py-2 rounded-full cursor-pointer' target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;
