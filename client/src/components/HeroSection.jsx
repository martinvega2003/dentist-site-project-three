import { motion } from 'framer-motion';
import Button from './Button';

const HeroSection = ({ heading, subheading, image }) => {
  return (
    <section
      id="home"
      className="relative bg-hero-pattern bg-cover bg-center h-fit py-12 flex items-center overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Circle */}
        <div className="absolute w-48 h-48 bg-blue-200 rounded-full opacity-50 top-16 left-16 md:top-24 md:left-24 blur-xl"></div>

        {/* Dots */}
        <div className="absolute w-24 h-24 bg-gradient-to-r from-blue-300 to-blue-400 opacity-60 rounded-full bottom-20 right-20 md:bottom-32 md:right-32 blur-md"></div>

        {/* Minimalistic Rectangles */}
        <div className="absolute bg-blue-100 w-40 h-1 top-12 right-24 opacity-30 rotate-12"></div>
        <div className="absolute bg-blue-100 w-40 h-1 bottom-24 left-16 opacity-30 -rotate-12"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50 z-0"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 relative z-10 px-6">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {heading || 'Your Smile, Our Priority'}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {subheading || 'Professional dental care for your best smile.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Button label="Book Appointment" variant="primary" />
          </motion.div>
          <motion.p
            className="text-blue-500 font-medium text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Call Now: (123) 456-7890
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={image || 'https://via.placeholder.com/500x500'}
            alt="Dental Care"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;