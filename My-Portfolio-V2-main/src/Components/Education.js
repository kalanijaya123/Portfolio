import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Information Technology and Management (Hons)",
      institution: "University of Moratuwa",
      duration: "2022 - 2027",
      description:
        "Pursuing a degree in Information Technology and Management, specializing in software development and innovative technologies.",
      achievements: [],
      color: "blue",
    },
    {
      id: 2,
      institution: "Maliyadeva Girls College, Kurunegala",
      duration: "2018 - 2021",
      description:
        "Completed GCE Advanced Level (2021) in the Biological Science stream.",
      achievements: [
        "GCE Advanced Level (2021) Chemistry- B Biology - C Physics - C",
        "Z-Score - 1.1111",
      ],
      color: "green",
    },
    {
      id: 3,
      institution: "Maliyadeva Girls College, Kurunegala",
      duration: "2007 - 2017",
      description:
        "Completed GCE Ordinary Level.",
      achievements: [
        "GCE Ordinary Level (2017) - 9 A's including ICT as an elective subject",
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-gray-900/50 backdrop-blur-sm",
        border: "border-blue-400/30",
        icon: "bg-blue-500",
        text: "text-blue-400",
        line: "bg-blue-400",
      },
      green: {
        bg: "bg-gray-900/50 backdrop-blur-sm",
        border: "border-green-400/30",
        icon: "bg-green-500",
        text: "text-green-400",
        line: "bg-green-400",
      },
      purple: {
        bg: "bg-gray-900/50 backdrop-blur-sm",
        border: "border-purple-400/30",
        icon: "bg-purple-500",
        text: "text-purple-400",
        line: "bg-purple-400",
      },
    };
    return colorMap[color];
  };

  return (
    <section
      id="education"
      className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-white min-h-screen"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Educational Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            My academic path and achievements that shaped my knowledge and skills
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          {educationData.map((edu, index) => {
            const colors = getColorClasses(edu.color);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.02 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8 sm:mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 md:left-1/2 md:-translate-x-2 w-4 h-4 ${colors.icon} rounded-full border-4 border-gray-900 shadow-lg z-10`}
                ></div>

                {/* Connecting line to card */}
                <div
                  className={`absolute top-2 w-6 md:w-12 h-0.5 ${colors.line} ${
                    isLeft
                      ? "left-8 md:right-1/2 md:left-auto md:mr-2"
                      : "left-8 md:left-1/2 md:ml-2"
                  }`}
                ></div>

                {/* Education Card */}
                <div
                  className={`ml-12 sm:ml-16 md:ml-0 ${
                    isLeft
                      ? "md:w-5/12 md:mr-auto md:pr-4 lg:pr-8"
                      : "md:w-5/12 md:ml-auto md:pl-4 lg:pl-8"
                  }`}
                >
                  <div
                    className={`${colors.bg} ${colors.border} border-2 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    {/* Card Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-start mb-2 sm:mb-3">
                        <GraduationCap
                          className={`${colors.text} mr-2 sm:mr-3 flex-shrink-0 mt-0.5`}
                          size={20}
                        />
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                          {edu.institution}
                        </h3>
                      </div>

                      {edu.degree && (
                        <h4 className="text-base sm:text-lg font-semibold text-gray-300 mb-2 ml-7 sm:ml-8">
                          {edu.degree}
                        </h4>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center mb-3 sm:mb-4 text-gray-400 ml-7 sm:ml-8">
                      <Calendar size={14} className="mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{edu.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base ml-7 sm:ml-8">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    {edu.achievements.length > 0 && (
                      <div className="ml-7 sm:ml-8">
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${colors.icon} rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
