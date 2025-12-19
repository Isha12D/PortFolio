import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ThemeContext } from '../Context/ThemeContext';
import img1 from '../assets/BWlogo.jpg';
import img2 from '../assets/s1.png';
import img3 from '../assets/s2.png';
import img4 from '../assets/tkinter.jpg';

const projects = [
  {
    id: 1,
    name: "Goal Buddy",
    image: "https://i.pinimg.com/736x/8b/10/c6/8b10c65dcd3f2773cc201bcc707517e5.jpg",
    technologies: "Full Stack Project with socket-io integration",
    github: "https://github.com/Isha12D/Goal-Buddy",
    desc: ` GoalBuddy is a full-stack app using React, Tailwind CSS, Node.js, Express, and MongoDB. It lets users set and track personal and shared goals with friends in real-time via Socket.IO chat. Progress is visualized with Chart.js, and all data is stored efficiently in MongoDB.`,
    live: 'soon',
  },
  {
    id: 2,
    name: "Shim Services - A home service website",
    image: img1,
    technologies: "FullStack Project",
    github: "https://github.com/Isha12D/Shim-Services/tree/development",
    desc: `Shim Services is a full-stack website (built using ReactJS, Node.js, Express, MySQL) for discovering and booking local home service providers. It features secure login, dynamic listings, easy booking, and support for payments, ratings, and reviews.`,
    live: 'soon',
  },
  {
    id: 3,
    name: "Upcycle Bay - A step to sustainable environment",
    image: "https://i.pinimg.com/736x/ea/11/2b/ea112bc03d038a6cac149468ea01fc97.jpg",
    technologies: "FullStack Project",
    github: "https://github.com/Isha12D/Shim-Services/tree/development",
    desc: `Upcycle Bay is a platform (built using ReactJS, Tailwind CSS, Firebase) that promotes eco-friendly living through DIY projects and sustainable products, encouraging users to creatively reuse waste and reduce carbon emissions.`,
    live: 'soon',
  },
  {
    id: 4,
    name: "IshaTreats - A sweet management shop",
    image: "https://i.pinimg.com/1200x/8c/2c/15/8c2c15b853871306b02aa218f9bf6f77.jpg",
    technologies: "FullStack Project",
    github: "https://github.com/Isha12D/IshaTreats",
    desc: `Isha Treats is a full-stack sweets e-commerce web application featuring user authentication, role-based admin access, cart management, and responsive UI. Built using React (Vite) + Tailwind CSS for the frontend, Node.js, Express.js, and MongoDB for the backend, with secure JWT authentication and modern UX elements like skeleton loaders and protected actions.`,
    live: 'https://clinquant-tiramisu-2ad88a.netlify.app/',
  },
  {
    id: 5,
    name: "Spotify Clone",
    image: img2,
    technologies: "ReactJs, Tailwind CSS",
    github: "https://github.com/Isha12D/Music-Spotify-",
    desc: `Spotify Clone is a responsive music streaming website built using React and Tailwind CSS. It mimics core features of Spotify like browsing playlists, playing songs, and a sleek audio player interface. The app uses React Context for state management and provides a modern, interactive user experience.`,
    live: 'soon',
  },
  {
    id: 6,
    name: "Password Generator - Tkinter",
    image: img4,
    technologies: "Python, MySQL",
    github: "https://github.com/Isha12D/Password-Generator",
    desc: `Password Generator is a simple project built using Python and Tkinter. It allows users to generate secure and random passwords based on selected criteria like length and character types. The tool includes a clean GUI and supports saving passwords to a local database using MySQL.`,
    live: 'soon',
  },
];

const Projects = () => {
  const [modalOpenId, setModalOpenId] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  const openModal = (id) => setModalOpenId(id);
  const closeModal = () => setModalOpenId(null);

  return (
    <div className={`py-20 relative ${darkMode ? 'bg-black text-white' : 'bg-orange-50 text-black'}`} id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          className="relative pb-16"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="mt-4">
              <div className="relative group flex justify-center items-center">
                <div
                  className="absolute w-[320px] h-[370px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 z-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(236,72,153,0.7), rgba(139,92,246,0.2))',
                    filter: 'blur(50px)',
                  }}
                ></div>

                <div
                  className={`relative z-10 w-[300px] h-[350px] p-4 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between ${
                    darkMode ? 'bg-gray-800' : 'bg-pink-100'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-lg w-full h-[150px] object-cover mb-2"
                  />

                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <p className="text-gray-400 text-sm mt-1">{project.technologies}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <button
                      onClick={() => openModal(project.id)}
                      className="bg-gradient-to-r from-pink-500 to-purple-700 text-white text-sm px-4 py-1 rounded-full hover:brightness-110 transition"
                    >
                      Desc
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 underline hover:text-blue-500"
                    >
                      View on GitHub
                    </a>

                    {project.live!='soon' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 underline hover:text-blue-500"
                      >
                        Live
                      </a>
                    )
                    }

                  </div>

                </div>

                {/* Modal */}
                {modalOpenId === project.id && (
                  <>
                    <div
                      className={`fixed inset-0 bg-opacity-60 backdrop-blur-sm z-40 ${
                        darkMode ? 'bg-black' : 'bg-orange-50'
                      }`}
                      onClick={closeModal}
                    ></div>

                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                      <div
                        className={`w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg p-6 relative 
                        shadow-[0_0_2px_2px_rgba(219,39,119,0.2),0_0_2px_2px_rgba(139,92,246,0.4)]
                        transition-transform duration-300 ${
                          darkMode ? 'bg-gray-900 text-white' : 'bg-pink-100 text-black'
                        }`}
                      >
                        <h3 className="font-bold text-lg mb-4">Details</h3>
                        <p className="mb-6">{project.desc}</p>
                        <div className="flex justify-end">
                          <button
                            onClick={closeModal}
                            className="bg-gradient-to-r from-pink-500 to-purple-700 text-sm px-4 py-1 rounded-full hover:brightness-70 transition"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-500 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center select-none">
          &#10094;
        </div>
        <div className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-500 bg-opacity-40 hover:bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center select-none">
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Projects;
