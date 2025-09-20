import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../Assets/img1.jpeg";
import image2 from "../Assets/img3.jpg";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Variants for slide animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Track slide direction for smooth slide animations
  const [direction, setDirection] = React.useState(0);

  useEffect(() => {
    setDirection(1); // always slide left to right for simplicity, you can customize
  }, [currentSlide]);

  return (
    <section
      id="about"
      className="text-white z-10 items-center justify-center min-h-screen"
    >
      <div className="container mx-auto flex flex-col gap-6 p-6">
        {/* First Row: Card 1, Card 3 (left), Card 2 (right) */}
        <div className="flex flex-col md:flex-row mt-16 gap-6">
          {/* Left Section: Card 1 and Card 3 */}
          <div className="flex flex-col gap-6 w-full md:w-2/5">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-gray-900 to-gray rounded-xl border border-gray-600 p-6 shadow-lg h-30"
            >
              <h2 className="text-xl font-bold">
                Tech enthusiast with a passion for development.
              </h2>
              <div className="h-4 bg-purple-600 rounded mt-4 opacity-50"></div>
            </motion.div>

            {/* Card 3 with Slides */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg h-80 md:h-60 overflow-hidden relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-6"
                >
                  {/* Slide content based on currentSlide */}
                  {currentSlide === 0 && (
                    <h2 className="text-3xl font-bold mt-4 mx-5">
                      Here are some{" "}
                      <span className="text-3xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">
                        skills{" "}
                      </span>
                      I’ve
                      <br />
                      been honing over the past 3 years
                    </h2>
                  )}
                  {currentSlide === 1 && (
                    <>
                      <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">
                        Frontend
                      </h2>
                      <div className="m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
                        {[
                          "React Js",
                          "Tailwind CSS",
                          "Javascript",
                          "Next Js",
                          "Material UI",
                          "Bootstrap",
                        ].map((skill) => (
                          <div
                            key={skill}
                            className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center"
                          >
                            <h3 className="text-white text-base">{skill}</h3>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {currentSlide === 2 && (
                    <>
                      <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">
                        Backend
                      </h2>
                      <div className="m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
                        {[
                          "Node Js",
                          "MongoDB",
                          "Postgre Sql",
                        
                          "MySQL",
                        ].map((skill) => (
                          <div
                            key={skill}
                            className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center"
                          >
                            <h3 className="text-white text-base">{skill}</h3>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {currentSlide === 3 && (
                    <>
                      <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">
                        Programming
                      </h2>
                      <div className="m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
                        {["C", "C#", "Java"].map((skill) => (
                          <div
                            key={skill}
                            className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center"
                          >
                            <h3 className="text-white text-base">{skill}</h3>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {currentSlide === 4 && (
                    <>
                      <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">
                        Design
                      </h2>
                      <div className="m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
                        {["Photoshop", "Figma", "Canva"].map(
                          (skill) => (
                            <div
                              key={skill}
                              className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center"
                            >
                              <h3 className="text-white text-base">{skill}</h3>
                            </div>
                          )
                        )}
                      </div>
                    </>
                  )}
                  {currentSlide === 5 && (
                    <>
                      <h2 className="text-2xl font-bold bg-gradient-to-br from-white to-blue-400 text-transparent bg-clip-text">
                        Tools & Platforms
                      </h2>
                      <div className="m-5 grid grid-cols-2 md:grid-cols-3 justify-items-center gap-4">
                        {["VS Code", "Postman", "Git", "Github"].map((skill) => (
                          <div
                            key={skill}
                            className="bg-purple-900 w-[6rem] h-12 border rounded-2xl border-gray-500 flex items-center justify-center"
                          >
                            <h3 className="text-white text-base">{skill}</h3>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Right Section: Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl p-6 shadow-lg flex flex-col w-full md:w-3/5 h-100 overflow-hidden relative"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-900 opacity-80"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-left mt-60 ml-0 md:ml-5">
             I believe in understanding<br />
challenges, then building<br />
solutions with impact
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Second Row: Card 4 (left), Card 5 and Card 6 (right) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section: Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-xl p-6 shadow-lg flex flex-col w-full md:w-3/5 h-75 relative overflow-hidden"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-white opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-left mt-60 ml-0 md:ml-5">
             Always tackling<br />
complex problems<br />
with innovative code
              </h2>
            </div>
          </motion.div>

          {/* Right Section: Card 5 and Card 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 w-full md:w-2/5"
          >
            {/* Card 6 */}
            <div className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-2xl p-6">
              <h2 className="text-2xl font-extrabold text-white tracking-wide mb-3">
                University of Moratuwa – Undergraduate
              </h2>
              <p className="text-purple-200 text-sm md:text-base mb-1">
                <span className="font-semibold">Degree:</span> BSc (Hons) in Information Technology and Management
              </p>
              <p className="text-purple-200 text-sm md:text-base mb-1">
                <span className="font-semibold">Duration:</span> 2023 – Present
              </p>
              <p className="text-purple-200 text-sm md:text-base mb-1">
                <span className="font-semibold">Current Year:</span> 3rd Year Undergraduate
              </p>
              <p className="text-purple-200 text-sm md:text-base mb-1">
                <span className="font-semibold">Focus Areas:</span> Full-Stack Development, UI/UX Design, Software Engineering
              </p>
             
              <p className="mt-4 text-purple-200 text-sm md:text-base">
                Engaged as a volunteer in university clubs and participated in multiple hackathons.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
