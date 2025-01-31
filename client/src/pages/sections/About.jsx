import React from 'react';
import image from "../../images/dentists-looking-at-camera.jpg"
import { professionalsData as teamMembers } from '../../data/professionalsData';
import { ProfessionalCard } from '../../components/ProfessionalCard';

const About = () => {
  

  return (
    <section id='about' className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-600">
            About Our Clinic
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover our history, values, and the dedicated team making your smile brighter every day.
          </p>
        </div>

        {/* History and Values */}
        <div className="lg:flex lg:space-x-8 mb-16">
          <div className="lg:w-1/2">
            <img
              src={image || "https://via.placeholder.com/600x400"} // Placeholder for history image
              alt="Our Clinic"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 p-6 border-2 border-blue-500 rounded-br-[100px]">
            <h3 className="text-2xl font-semibold text-blue-500">
              Our History & Values
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Founded in 2005, our clinic has been dedicated to providing top-notch dental care
              with a focus on patient comfort and satisfaction. We believe in creating a welcoming
              environment where everyone can achieve the smile they deserve.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Our core values include excellence in care, compassion for our patients, and commitment
              to using the latest technology for optimal results.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-left text-2xl lg:text-4xl font-bold text-blue-600 mb-8">
            Meet Our Team Members
          </h3>
          <div className="flex flex-col justify-start items-start gap-8">
            {teamMembers.map((member, index) => (
              <ProfessionalCard
                key={index}
                name={member.name}
                image={member.image}
                role={member.role}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
