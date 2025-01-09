import React from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { motion } from "framer-motion";
import { testimonialsData as testimonials } from "../../data/testimonialsData";

const Testimonials = () => {

  return (
    <motion.section
      className="bg-gray-100 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-12">
          <motion.h2
            className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hear from our satisfied clients about their experiences with us.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`w-full lg:w-4/5 ${
                index === 1
                  ? "lg:ml-[70px]"
                  : index === 2
                  ? "lg:ml-[140px]"
                  : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: index * 0.2 + 0.2,
              }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
