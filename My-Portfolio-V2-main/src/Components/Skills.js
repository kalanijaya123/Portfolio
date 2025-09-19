import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import i1 from '../Assets/Skills/i1.png';
import i2 from '../Assets/Skills/i2.png';
import i3 from '../Assets/Skills/i3.png';
import i4 from '../Assets/Skills/i4.png';
import i5 from '../Assets/Skills/i5.png';
import i6 from '../Assets/Skills/i6.png';
import i7 from '../Assets/Skills/i7.png';
import i8 from '../Assets/Skills/i8.png';
import i9 from '../Assets/Skills/i9.png';
import i10 from '../Assets/Skills/i10.png';
import i13 from '../Assets/Skills/i13.png';
import i14 from '../Assets/Skills/i14.png';
import i15 from '../Assets/Skills/i15.png';
import i16 from '../Assets/Skills/i16.png';
import i17 from '../Assets/Skills/i17.png';
import i18 from '../Assets/Skills/i18.png';
import i19 from '../Assets/Skills/i19.png';
import i20 from '../Assets/Skills/i20.jpg';
import i22 from '../Assets/Skills/i22.png';
import i23 from '../Assets/Skills/i23.png';
import i24 from '../Assets/Skills/i24.png';

const skillCards = [
  {
    id: 1,
    title: "Frontend",
    image: [i7, i13, i17, i23, i24],
  },
  {
    id: 2,
    title: "Backend",
    image: [i20, i14, i16],
  },
  {
    id: 3,
    title: "Programming",
    image: [i2, i3, i9, i10, i18],
  },
  {
    id: 4,
    title: "Design",
    image: [i4, i8, i15, i1],
  },
  {
    id: 5,
    title: "Tools & Platforms",
    image: [i5, i6, i19, i22],
  }
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
              {card.image.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`tech-${index}`}
                  className="h-10 w-10 object-contain hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
