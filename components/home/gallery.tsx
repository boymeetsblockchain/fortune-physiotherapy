"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/gallery1.jpg", alt: "Image 1" },
  { src: "/gallery2.jpg", alt: "Image 2" },
  { src: "/gallery3.jpg", alt: "Image 3" },
  { src: "/gallery4.jpg", alt: "Image 4" },
  { src: "/gallery6.jpg", alt: "Image 6" },
  { src: "/gallery7.jpg", alt: "Image 7" },
  { src: "/gallery8.jpg", alt: "Image 8" },
];

export const Gallery = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="gallery"
      className="p-6 md:p-12 lg:p-16 bg-[#060012] text-white"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-[#4FC1FF] mb-12 uppercase tracking-widest"
      >
        Our Gallery
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
            className="overflow-hidden rounded-2xl shadow-lg border border-gray-700"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
