import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaMicrochip, FaLinkedin, FaGithub, FaReact, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiDotnet, SiPostgresql, SiCplusplus, SiArduino, SiMongodb, SiNestjs, SiTailwindcss, SiPython,SiLaravel, SiMysql } from "react-icons/si";
import BNR from "../Assets/BNR.jpg";
import PF from "../Assets/PF.png";
import ECOM from "../Assets/ECOM.jpg";
import YTSUM from "../Assets/YTSUM.png";
import HYDRO1 from "../Assets/HYDRO1.jpeg";
import HYDRO2 from "../Assets/HYDRO2.jpeg";
import EVE1 from "../Assets/EVE1.png";
import EVE2 from "../Assets/EVE2.png";
import EVE3 from "../Assets/EVE3.png";
import EVE4 from "../Assets/EVE4.png";
import EVE5 from "../Assets/EVE5.png";
import EVE6 from "../Assets/EVE6.png";
import DIS from "../Assets/DIS.png";

// Project data
const projectCards = [
  {
    id: 1,
    title: "AUTOMATED HYDROPONICS SYSTEM",
    description:
      "An innovative system using Arduino to automate plant care, integrating sensors for real-time monitoring and control of water levels, pH, and nutrient supply, enhancing agricultural efficiency.",
    images: [HYDRO1, HYDRO2],
    technologies: [SiCplusplus, SiArduino, FaMicrochip],
    linkedin: "https://www.linkedin.com/posts/kalani-jayasundara_techinnovation-hydroponics-hardwareengineering-activity-7253040770507526144-k_Y-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERYRmAB9d7ECCJNz9GafWwqQee9cdmcwlE",
  },
  {
    id: 2,
    title: "Evelora – Role-Based Assessment Platform (Web Application)",
    description:
      "A full-stack role-based assessment platform to hire recruiters with React.js, ASP.NET (C#), PostgreSQL, and Azure—featuring RBAC for user permissions, job posting management, quiz results analysis with real-time dashboards and stored procedures, and secure RESTful APIs documented via Swagger for seamless integration.",
    images: [EVE4, EVE1, EVE2, EVE3, EVE5, EVE6],
    technologies: [FaReact, SiDotnet, SiPostgresql, SiTailwindcss],
    githubFrontend: "https://github.com/sandaru921/EVEROLA-react-frondend", // Replace with actual frontend repo link
    githubBackend: "https://github.com/sandaru921/EVELORA",
    linkedin: "https://www.linkedin.com/posts/your-link",
  },
  {
    id: 3,
    title: "Event Discovery Platform (Web Application)",
    description:
    " A full-stack event discovery platform built with React.js, Laravel, and MySQL, featuring a 3-tier architecture, RESTful APIs, optimized database schemas, user authentication, event CRUD operations, and a responsive interface for seamless event exploration and management..",
    images: [DIS],
  technologies: [FaReact, SiLaravel, SiMysql],
    github: ": https://github.com/kalanijaya123/Eventdiscovery-platform.git",
     },
 
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Carousel component for each project card
const ProjectCarousel = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic image transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Manual navigation via dots
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt={`${title} screenshot ${currentImageIndex + 1}`}
        className="h-52 w-full rounded-t-lg object-cover"
      />
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-blue-500 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="p-8 min-h-screen"
    >
      <h1 className="text-3xl font-bold text-white text-center">Projects</h1>
      <p className="text-lg text-gray-300 text-center mt-6">
        My experience as an IT Undergraduate and SE Enthusiast.
      </p>

      <div
        ref={ref}
        className="m-20 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6"
      >
        {projectCards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="flex flex-col justify-between p-2 shadow-lg rounded-lg bg-gray-900 w-80 transition-all duration-300 hover:shadow-blue-500/30"
          >
            <ProjectCarousel images={card.images} title={card.title} />
            <h3 className="p-4 text-xl font-bold text-[#C0C0C0] opacity-60 hover:opacity-100 transition-opacity duration-300">
              {card.title}
            </h3>
            <p className="px-4 pb-2 text-[#C0C0C0] opacity-60 hover:opacity-100 transition-opacity duration-300">
              {card.description}
            </p>

            {/* Social media + technologies icons */}
            <div className="flex items-center justify-between px-4 mt-4 mb-4 opacity-80">
              {/* Social media icons */}
              <div className="flex gap-4">
                {card.linkedin && (
                  <a
                    href={card.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-transform transform hover:scale-125"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {card.github ? (
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 transition-transform transform hover:scale-125"
                  >
                    <FaGithub size={20} />
                  </a>
                ) : (
                  <>
                    {card.githubFrontend && (
                      <div className="group relative">
                        <a
                          href={card.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400 transition-transform transform hover:scale-125"
                        >
                          <FaGithub size={20} />
                        </a>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Frontend
                        </span>
                      </div>
                    )}
                    {card.githubBackend && (
                      <div className="group relative">
                        <a
                          href={card.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-400 transition-transform transform hover:scale-125"
                        >
                          <FaGithub size={20} />
                        </a>
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Backend
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
              {/* Technology icons */}
              <div className="flex gap-3 pr-4">
                {card.technologies?.map((TechIcon, index) => (
                  <TechIcon
                    key={index}
                    size={20}
                    className="text-white hover:text-cyan-400 opacity-80 transition-transform transform hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;