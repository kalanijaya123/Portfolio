/*
import React from "react";
//import heroBg from "../Assets/1581013.jpg"; // Fix import path
import GalaxyBackground from "./GalaxyBackground";
import { FaLinkedin, FaFacebook, FaBehance, FaInstagram } from "react-icons/fa";


const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      <GalaxyBackground />
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-10">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
          <FaLinkedin size={26} className="text-white hover:text-blue-500"/>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
          <FaFacebook size={26} className="text-white hover:text-blue-500" />
        </a>
       
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-125">
          <FaInstagram size={26} className="text-white hover:text-blue-500" />
        </a>
      </div>

      <div className="text-center relative z-10">
        <h1 className="text-7xl font-bold">Hi, I'm <span className="text-7xl font-bold bg-gradient-to-br from-purple-600 to-blue-600 text-transparent bg-clip-text">Lahiru Imesh</span></h1>
        <p className="text-2xl mt-4 text-purple opacity-80">I am an undergraduate at the University of Moratuwa, focused on <br />developing my skills in IT and software development.</p>


        <div className="space-y-8 space-x-7">
            <button className="bg-transparent hover:bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold hover:text-white py-3 px-9 border border-white hover:border-transparent rounded-full transition duration-300">
            <a href="#contact">Contact Me</a>
            </button>

            <button className="bg-gradient-to-br from-purple-600 to-blue-600 hover:bg-transparent text-white font-bold py-3 px-5 rounded inline-flex items-center space-x-2 transition duration-300 border rounded-full border-blue-800 hover:border-white">
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
              </svg>
                <span>Download CV</span>
            </button>
      </div>
</div>

    </section>
  );
};

export default Hero;
*/


import React from "react";
import GalaxyBackground from "./GalaxyBackground";
import CV from '../Assets/CV.pdf';
import profilePic from '../Assets/PP.png';
import { TypeAnimation } from 'react-type-animation';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaFacebook, FaBehance, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/kalani-jayasundara/' },
  { icon: FaFacebook, url: 'https://web.facebook.com/kalani.jayasundara.422751/' },
 { icon: FaInstagram, url: 'https://www.instagram.com/_kalani__jayasundara_/' },

  { icon: FaGithub, url: 'https://github.com/kalanijaya123' },
];


const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-white relative overflow-hidden px-4"
    >
      {/* Social Icons */}
      {/* Sidebar Icons for Desktop (hidden on mobile) */}
<div className="hidden sm:flex absolute left-10 top-1/2 transform -translate-y-1/2 flex-col space-y-6 z-10">
{socialLinks.map(({ icon: Icon, url }, index) => (
  <a key={index} href={url} target="_blank" rel="noopener noreferrer">
    <Icon size={24} className="text-white hover:text-blue-500" />
  </a>
))}

</div>




      {/* Main Content with Profile Image */}
      <div className="flex flex-col sm:flex-row items-center justify-center relative z-10 max-w-5xl w-full gap-10">
        {/* Profile Image on the left */}
        <div className="flex-shrink-0 mb-8 sm:mb-0">
          <img
            src={profilePic}
            alt="Kalani Jayasundara profile"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-lg border-4 border-purple-500 bg-gray-900 hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          />
        </div>

        {/* Mobile Social Icons under buttons */}
        <div className="flex sm:hidden justify-center space-x-6 mt-6">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <Icon size={24} className="text-white hover:text-blue-500" />
            </a>
          ))}
        </div>
        {/* Text Content */}
        <div className="text-center sm:text-left flex-1">
      <h1 className="text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-col sm:flex-row sm:flex-wrap items-center sm:gap-2">
  <span>Hi, I'm</span>
  <span className="ml-3 bg-gradient-to-br from-purple-600 to-blue-600 text-transparent bg-clip-text">
    <TypeAnimation
      sequence={[
        'Kalani Jayasundara',
        2000,
        '',
        'Web Developer',
        2000,
        'UI/UX Designer',
        2000,
        'Kalani Jayasundara',
        2000,
      ]}
      speed={200}
      repeat={Infinity}
      cursor={true} // this adds the blinking |
    />
  </span>
</h1>



        <h2 className="text-base md:text-2xl mt-6 text-purple-200">
          I am an undergraduate at the University of Moratuwa, honing  <br className="hidden sm:inline" />
         my expertise in IT and crafting innovative software solutions.
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mt-10">
          <a
            href="#contact"
            className="bg-transparent hover:bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold hover:text-white py-3 px-11 border border-white hover:border-transparent rounded-full transition duration-300"
          >
            Contact Me
          </a>

          <a
            href={CV}
            download
            className="bg-gradient-to-br from-purple-600 to-blue-600 hover:bg-transparent text-white font-bold py-3 px-7 rounded-full border border-blue-800 hover:border-white flex items-center gap-2 transition duration-300"
          >
            <svg
              className="fill-current w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
