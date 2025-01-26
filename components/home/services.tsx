"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Stroke Rehabilitation",
    description:
      "We help survivors regain skills through physical, occupational, and speech therapy, enhancing mobility, communication, and daily function.",
    image: "/service7.jpg", // Replace with actual image path
  },
  {
    title: "Home Physiotherapy",
    description:
      "Providing you with personalized therapy at home to improving mobility, strength, and independence through tailored exercises and functional activities.",
    image: "/service6.jpg", // Replace with actual image path
  },

  {
    title: "Musculoskeletal Conditions",
    description:
      "We treat musculoskeletal conditions with tailored therapies to alleviate pain, improve mobility, and restore function for bones, muscles, and joints.",
    image: "/service4.jpg", // Replace with actual image path
  },
  {
    title: "Post-Surgical Rehabilitation",
    description:
      "Post-surgical rehabilitation facilitates recovery with personalized therapies, enhancing strength, mobility, and function, while reducing pain and preventing complications.",
    image: "/service8.jpg", // Replace with actual image path
  },
  {
    title: "General Fitness",
    description:
      "Achieve your fitness goals with personalized training programs, expert guidance, and motivational support to enhance strength, endurance, and overall health.",
    image: "/service5.jpg", // Replace with actual image path
  },
];

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12 lg:p-16 bg-gray-50"
      id="service"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-600 mb-12"
      >
        Our Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-left text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
