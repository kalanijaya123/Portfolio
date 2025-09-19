import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaGithub } from 'react-icons/fa';
import { SiOpenjdk, SiC, SiCplusplus, SiPython, SiPhp, SiDotnet, SiSpring, SiMysql, SiMongodb, SiPostgresql, SiGit, SiArduino } from 'react-icons/si';

const skillCards = [
  {
    id: 1,
    title: "Frontend",
    icons: [FaReact, FaHtml5, FaCss3Alt],
  },
  {
    id: 2,
    title: "Backend",
    icons: [SiPhp, SiDotnet, SiSpring],
  },
  {
    id: 3,
    title: "Programming",
  icons: [SiOpenjdk, FaJsSquare, SiC, SiCplusplus, SiPython],
  },
  {
    id: 4,
    title: "Tools & Platforms",
  icons: [SiGit, FaGithub, SiArduino, SiMysql, SiMongodb, SiPostgresql],
  },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="p-8 text-white min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center mt-4"
      >
        A showcase of my technical skills and tools I’ve worked with across various projects.
      </motion.p>

      <div className="m-20 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
        {skillCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.05 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            className="flex flex-col justify-between p-4 border border-purple-400/70 rounded-lg bg-gray-900 w-80 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-[#C0C0C0] text-center opacity-80 hover:opacity-100 transition-opacity mb-6 duration-300">
              {card.title}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mb-5">
              {card.icons
                .filter(Boolean)
                .map((Icon, index) => {
                  if (typeof Icon !== 'function') return null;
                  const iconName = Icon.displayName || Icon.name || '';
                  let color = '#FFFFFF';
                  let label = iconName.replace(/^Fa|^Si/, '');
                  switch (iconName) {
                    case 'FaReact': color = '#61DAFB'; label = 'React'; break;
                    case 'FaJsSquare': color = '#F7DF1E'; label = 'JavaScript'; break;
                    case 'FaCss3Alt': color = '#1572B6'; label = 'CSS3'; break;
                    case 'FaHtml5': color = '#E34F26'; label = 'HTML5'; break;
                    case 'SiPhp': color = '#777BB4'; label = 'PHP'; break;
                    case 'SiDotnet': color = '#512BD4'; label = '.NET'; break;
                    case 'SiSpring': color = '#6DB33F'; label = 'Spring'; break;
                    case 'SiOpenjdk': color = '#007396'; label = 'Java'; break;
                    case 'SiC': color = '#A8B9CC'; label = 'C'; break;
                    case 'SiCplusplus': color = '#00599C'; label = 'C++'; break;
                    case 'SiPython': color = '#3776AB'; label = 'Python'; break;
                    case 'SiGit': color = '#F05032'; label = 'Git'; break;
                    case 'FaGithub': color = '#181717'; label = 'GitHub'; break;
                    case 'SiArduino': color = '#00979D'; label = 'Arduino'; break;
                    case 'SiMysql': color = '#4479A1'; label = 'MySQL'; break;
                    case 'SiMongodb': color = '#47A248'; label = 'MongoDB'; break;
                    case 'SiPostgresql': color = '#4169E1'; label = 'PostgreSQL'; break;
                    default: color = '#FFFFFF'; label = iconName;
                  }
                  return (
                    <span key={index} className="relative group">
                      <Icon
                        size={40}
                        className="text-white hover:scale-110 transition-transform duration-300"
                        style={{ color }}
                      />
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 scale-0 group-hover:scale-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-transform duration-200 z-10 whitespace-nowrap pointer-events-none">
                        {label}
                      </span>
                    </span>
                  );
                })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;