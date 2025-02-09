"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12 lg:p-16 bg-gray-50"
      id="about"
    >
      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/oke.jpg" // Replace with actual image path
            alt="Fortune Physiotherapy Clinic"
            width={500}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          />
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-justify"
        >
          <h2 className="text-2xl text-center font-semibold text-gray-800">
            About Fortune Physiotherapy Clinic
          </h2>
          <p className="text-gray-700  text-left leading-relaxed">
            Established in 1998 by Professor Kayode Oke, Fortune Physiotherapy
            Clinic is a purpose-built facility with state-of-the-art equipment
            comparable to those in the developed world. The clinic features
            eight treatment suites and a well-equipped therapeutic gymnasium.
          </p>
          <p className="text-gray-700 text-left leading-relaxed">
            We are known for our professionalism, evidence-based practice, and
            comprehensive services in specialties such as orthopaedics,
            neurology, paediatrics, geriatrics, and health promotion. Our clinic
            provides both outpatient and home physiotherapy care services.
          </p>
        </motion.div>
      </div>

      {/* Specialty Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Our Services and Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/gallery3.jpg" // Replace with actual image path
              alt="Therapeutic Gymnasium"
              width={500}
              height={300}
              priority
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="space-y-4 text-left">
            <p className="text-gray-700 leading-relaxed">
              Fortune Physiotherapy Cliinic is a pioneer in the south-south
              geopolitical zone and was the first physiotherapy clinic in
              Nigeria to be accredited for internship training in Physiotherapy.
              We collaborate with occupational therapists, orthotics and
              prosthetics specialists, speech therapists, physicians, and
              surgeons to provide holistic care for our patients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our clinic has retainerships with prominent healthcare facilities,
              fostering interprofessional clinical services to achieve maximum
              outcomes for patients.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Facility Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Our Facility and Operating Hours
        </h2>
        <p className="text-gray-700 text-left max-w-4xl mx-auto leading-relaxed">
          Fortune Physiotherapy Clinic operates Monday to Friday from 8:00 AM to
          6:00 PM and on Saturdays from 8:00 AM to 3:00 PM. Our facility is
          equipped with a solar-powered system to ensure uninterrupted power for
          our sophisticated equipment.
        </p>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 text-center"
      >
        <h3 className="text-lg font-medium text-gray-800">
          Visit us today or contact us to learn more about how we can help you
          achieve optimal health and mobility.
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
