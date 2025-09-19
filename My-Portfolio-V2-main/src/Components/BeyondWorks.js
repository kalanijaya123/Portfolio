import React from 'react';
import { motion } from 'framer-motion';
import BOC from '../Assets/BOC.jpg';
import AIE from '../Assets/AIE.jpg';
import WIE from '../Assets/WIE.png';
import FIT from '../Assets/FIT.jpeg';


const projectCards = [
  {
    id: 1,
    title: "INTERNSHIP TRAINEE - Bank Of Ceylon (2022 May- 2022 December)",
    description: "Completed a six-month internship at Bank Of Ceylon, gaining hands-on experience in banking operations, financial procedures, and customer service.",
    image: BOC,
  },
  {
    id: 2,
    title: "Aiesec in Colombo South",
    description: "I volunteered as a Ingoing Global Volunteer and  Marketing Team Member for Overhaul 4.0 and Innovators, as well as a Member of the Information Management Team and Organizing Committee for OTM 3.1 . I contributed to event branding, promotional content, and public relations efforts to enhance engagement and visibility.",
    image: AIE,
  },
  {
    id: 3,
    title: "IEEE  WIE STUDENT BRANCH UNIVERSITY OF MORATUWA",
    description: "I volunteered as a Delegate Committee Member for HackElite 1.0 , contributed to event coordination, branding, and engagement initiatives to enhance visibility and participation.",
    image: WIE,
  },
   {
    id: 4,
    title: "FIT Moments - Official Media Unit of the Faculty of Information Technology, University of Moratuwa",
    description: "I  am volunteering  in Creative Design Pillar, contributing to event branding and creative initiatives for events like the ICITR International Conference to enhance engagement and visibility.",
    image: FIT,
  },
  
];

const BeyondWorks = () => {
  return (
    <section id="beyondworks" className="p-8 text-white min-h-screen">
      <h2 className="text-3xl font-bold text-center">Beyond Works</h2>
      <p className="text-center mt-4">Any additional work experience and achievements.</p>

      <div className="m-20 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6">
        {projectCards.map((card) => (
          <motion.div
            key={card.id}
            className="flex flex-col justify-between p-2 border border-purple-400/70 rounded-lg bg-gray-900 w-80 transition-all shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={card.image}
              alt={card.title}
              className="h-52 w-full rounded-t-lg object-cover"
              whileHover={{ scale: 0.96 }}
              transition={{ duration: 0.4 }}
            />
            <motion.h3
              className="p-4 text-xl font-bold text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h3>
            <motion.p
              className="px-4 pb-2 text-[#C0C0C0] opacity-60"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {card.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeyondWorks;
