import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import { motion } from 'framer-motion';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { servicesData as services } from '../../data/servicesData';

const Services = () => {
  return (
    <section id="services" className="relative bg-gray-50 py-16">
      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-blue-100 text-6xl">
        <AiOutlineStar />
      </div>
      <div className="absolute bottom-10 right-10 text-pink-100 text-8xl">
        <AiOutlineHeart />
      </div>

      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading and Description */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-4">
            Explore Our Comprehensive Dental Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Whether you're looking for routine check-ups, specialized treatments, or cosmetic enhancements, 
            our experienced team is here to help. Browse our range of services and discover what makes us 
            the preferred choice for your dental care.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              services={service.services}
              professionals={service.professionals}
              path={"services/" + (index + 1)}
              isCategorycard={true}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
