"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/gallery1.jpg", alt: "Image 1" },
  { src: "/gallery2.jpg", alt: "Image 2" },
  { src: "/gallery3.jpg", alt: "Image 3" },
  { src: "/gallery4.jpg", alt: "Image 4" },
  { src: "/gallery5.jpg", alt: "Image 5" },
];

export const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="gallery"
      className="p-6 md:p-12 lg:p-16 bg-gray-50"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-blue-600 mb-12"
      >
        Our Gallery
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
