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
        github: "https://github.com/Isha12D/Shim-Services/tree/development"
    },
    {
        id: 2,
        name: "Spotify Clone",
        image: img2,
        technologies: "ReactJs, Tailwind CSS",
        github: "https://github.com/Isha12D/Music-Spotify-"
    },
    {
        id: 3,
        name: "Password Generator - Tkinter",
        image: img4,
        technologies: "Python, MySQL",
        github: "https://github.com/Isha12D/Password-Generator"
    },
];

const Projects = () => {
  return (
    <div className='bg-black text-white py-20 overflow-x-hidden' id='projects'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen'>
            <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {projects.map((project) => (
                <div 
                    key={project.id} 
                    className='relative bg-gray-800 p-4 sm:p-6 rounded-lg transition-transform duration-300 hover:scale-105 max-w-xs mx-auto group'
                >
                    {/* Custom Gradient Shadow */}
                    <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:blur-lg z-0" 
                         style={{
                             background: 'linear-gradient(90deg, rgba(236,72,153,1) 0%, rgba(139,92,246,1) 100%)',
                             filter: 'blur(200px)'
                         }}></div>
                    
                    {/* Card Content */}
                    <div className="relative z-10">
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className='rounded-lg mb-4 w-full max-h-48 object-contain'
                        />
                        <h3 className='text-xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a 
                            href={project.github} 
                            className='inline-block bg-gradient-to-r from-pink-500 to-purple-700 text-white px-3 py-1 rounded-full cursor-pointer transition-all duration-300'
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;
