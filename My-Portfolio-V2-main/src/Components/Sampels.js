import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import OV1 from '../Assets/OV1.png';
import OV2 from '../Assets/OV2.png';
import OV3 from '../Assets/OV3.png';
import RT1 from '../Assets/RT1.png';
import RT2 from '../Assets/RT2.png';
import RT3 from '../Assets/RT3.png';
import RT4 from '../Assets/RT4.png'; 
import FM1 from '../Assets/FM1.png';
import FM2 from '../Assets/FM2.png';
import FM3 from '../Assets/FM3.png';
import FM4 from '../Assets/FM4.png';    
import NO1 from '../Assets/NO1.png';
import NO2 from '../Assets/NO2.png';
import NO3 from '../Assets/NO3.png';
import NO4 from '../Assets/NO4.png';    
import IC1 from '../Assets/IC1.png';
import IC2 from '../Assets/IC2.png';
import IC3 from '../Assets/IC3.png';    

const graphicWorks = [
  {
    id: 1,
    eventName: "Overhaul 4.0",
    designs: [
      {
        title: "Event Poster",
        images: [OV1, OV2, OV3],
        description: "Main promotional poster for the event branding.",
      },
     
    ],
  },
  {
    id: 2,
    eventName: "Innovators",
    designs: [
      {
        title: "Branding Kit",
        images: [RT1, RT2, RT3, RT4],
     
      },
    
    ],
  },

  {
    id: 3,
    eventName: "ICITR International Conference",
    designs: [
      {
        title: "Conference Poster",
        images: [IC1, IC2, IC3],
        description: "Official conference poster design.",
      },
    ],
  },
  {
    id: 3,
    eventName: "Fit Moments",
    designs: [
      {
       
        images: [FM1, FM2, FM3, FM4],
      
      },
    ],
  },
    {
    id: 3,
    eventName: "Others",
    designs: [
      {
        title: " Poster,logos, Flyers",
        images: [NO1, NO2, NO3, NO4],
       
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Sampels = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  // Function to handle switching to a specific image in the carousel
  const setImageIndex = (workId, designIndex, imageIndex) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [`${workId}-${designIndex}`]: imageIndex,
    }));
  };

  return (
  <section id="sampels" className="p-8 min-h-screen text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Graphic Design Works
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
      >
        Showcasing my contributions to event branding and promotional materials through creative graphic designs.
      </motion.p>

      <div className="max-w-6xl mx-auto m-12">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white bg-opacity-10 p-8 rounded-xl shadow-lg border border-gray-600"
        >
          {graphicWorks.map((work, index) => (
            <motion.div
              key={work.id}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-purple-900 rounded-lg shadow-lg overflow-hidden border border-gray-700"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">
                  {work.eventName}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {work.designs.map((design, designIndex) => {
                    const currentImageIndex =
                      currentImageIndices[`${work.id}-${designIndex}`] || 0;
                    return (
                      <div
                        key={designIndex}
                        className="bg-gray-700 rounded-md overflow-hidden p-2 flex flex-col items-center"
                      >
                        {/* Carousel Container with z-index for hover */}
                        <div className="relative w-full h-72 overflow-visible">
                          <motion.img
                            src={design.images[currentImageIndex]}
                            alt={design.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-150 hover:z-10 cursor-pointer rounded-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        {/* Navigation Dots */}
                        {design.images.length > 1 && (
                          <div className="flex justify-center mt-2 space-x-2">
                            {design.images.map((_, imgIdx) => (
                              <button
                                key={imgIdx}
                                onClick={() => setImageIndex(work.id, designIndex, imgIdx)}
                                className={`w-3 h-3 rounded-full ${
                                  currentImageIndex === imgIdx
                                    ? "bg-purple-400"
                                    : "bg-gray-400"
                                } hover:bg-purple-300 transition-colors duration-200`}
                              />
                            ))}
                          </div>
                        )}
                        <h3 className="font-semibold text-white mt-2 mb-1 text-center">
                          {design.title}
                        </h3>
                        <p className="text-gray-300 text-xs mb-2 text-center">
                          {design.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sampels;