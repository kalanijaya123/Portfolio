import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const graphicWorks = [
  {
    id: 1,
    eventName: "Data Storm 5.0",
    designs: [
      {
        title: "Event Poster",
        image: "/assets/graphic-designs/data-storm-poster.jpg", // Replace with actual image path
        description: "Main promotional poster for the event branding.",
        link: "https://example.com/data-storm-poster",
      },
      {
        title: "Social Media Banner",
        image: "/assets/graphic-designs/data-storm-banner.jpg",
        description: "Custom banner for social media campaigns.",
        link: "https://example.com/data-storm-banner",
      },
      {
        title: "Flyer Design",
        image: "/assets/graphic-designs/data-storm-flyer.jpg",
        description: "Printable flyer for on-campus distribution.",
        link: "https://example.com/data-storm-flyer",
      },
    ],
  },
  {
    id: 2,
    eventName: "PR Avenue 2024–25",
    designs: [
      {
        title: "Logo Design",
        image: "/assets/graphic-designs/pr-avenue-logo.jpg",
        description: "Event logo incorporating PR elements.",
        link: "https://example.com/pr-avenue-logo",
      },
      {
        title: "Invitation Card",
        image: "/assets/graphic-designs/pr-avenue-invite.jpg",
        description: "Elegant invitation for participants.",
        link: "https://example.com/pr-avenue-invite",
      },
    ],
  },
  {
    id: 3,
    eventName: "Overhaul 4.0",
    designs: [
      {
        title: "Marketing Poster",
        image: "/assets/graphic-designs/overhaul-poster.jpg",
        description: "High-impact poster for marketing team.",
        link: "https://example.com/overhaul-poster",
      },
      {
        title: "Infographic",
        image: "/assets/graphic-designs/overhaul-infographic.jpg",
        description: "Event infographic highlighting key features.",
        link: "https://example.com/overhaul-infographic",
      },
    ],
  },
  {
    id: 4,
    eventName: "Innovators Conference",
    designs: [
      {
        title: "Branding Kit",
        image: "/assets/graphic-designs/innovators-kit.jpg",
        description: "Complete branding kit including badges and banners.",
        link: "https://example.com/innovators-kit",
      },
    ],
  },
  {
    id: 5,
    eventName: "HackElite 1.0",
    designs: [
      {
        title: "Hackathon Badge",
        image: "/assets/graphic-designs/hackelite-badge.jpg",
        description: "Custom badges for delegates.",
        link: "https://example.com/hackelite-badge",
      },
      {
        title: "Event Schedule",
        image: "/assets/graphic-designs/hackelite-schedule.jpg",
        description: "Visual schedule for the hackathon.",
        link: "https://example.com/hackelite-schedule",
      },
    ],
  },
  {
    id: 6,
    eventName: "ICITR International Conference",
    designs: [
      {
        title: "Conference Poster",
        image: "/assets/graphic-designs/icitr-poster.jpg",
        description: "Official conference poster design.",
        link: "https://example.com/icitr-poster",
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

  return (
  <section id="sampels" className="p-8 min-h-screen text-white" style={{ backgroundColor: '#0f172a' }}>
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
                    {work.designs.map((design, designIndex) => (
                      <div key={designIndex} className="bg-gray-700 rounded-md overflow-hidden">
                        <img
                          src={design.image}
                          alt={design.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-white mb-2">{design.title}</h3>
                          <p className="text-gray-300 text-sm mb-3">{design.description}</p>
                          <a
                            href={design.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
                          >
                            View Design <FaExternalLinkAlt className="ml-1" />
                          </a>
                        </div>
                      </div>
                    ))}
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