import React from 'react';
import { FaTooth, FaShieldAlt, FaHeartbeat } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';

const benefits = [
  {
    icon: <FaTooth className="text-4xl text-white" />,
    title: "Dentistry for Everyone",
    description: "We accept all major insurance plans, making dental care accessible and affordable for the whole family.",
  },
  {
    icon: <FaHeartbeat className="text-4xl text-white" />,
    title: "Emergency Services",
    description: "Don't live with the pain! Our clinic offers 24/7 emergency dental services to ensure you get relief when you need it most.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-white" />,
    title: "Safe and Hygienic",
    description: "We follow strict sterilization protocols and use the latest technology to ensure a safe and clean environment.",
  },
  {
    icon: <GiHealthNormal className="text-4xl text-white" />,
    title: "Comprehensive Care",
    description: "From preventive care to advanced procedures, our clinic provides all the services you need under one roof.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Our Clinic?
          </h2>
          <p className="text-lg text-blue-200">
            Discover the unparalleled benefits of working with our team of experts. Your smile is in safe hands.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-500 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{benefit.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              {/* Description */}
              <p className="text-blue-200">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
