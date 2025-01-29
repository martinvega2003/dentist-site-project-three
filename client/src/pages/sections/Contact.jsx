import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 text-left">
            Get in Touch with Us
          </h2>
          <p className="text-lg text-gray-600 text-left">
            Have questions or need to book an appointment? We're here to help.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
          {/* Interactive Map */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345095533!2d-122.4194150846818!3d37.77492927975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814d6e9b5f37%3A0x5b5e7b72dc1d6e9b!2sRandom%20Business%20Location!5e0!3m2!1sen!2sus!4v1616109072834!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Business Location"
                className="rounded-lg shadow-lg"
              ></iframe>
              {/* Custom Marker */}
              <div
                className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg"
                title="Our Clinic"
              >
                <FaMapMarkerAlt size={24} />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full lg:w-1/2">
            {/* Address */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" /> Address
              </h3>
              <p className="text-gray-600">
                123 Dental Avenue, Suite 456 <br />
                San Francisco, CA, 94103
              </p>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" /> Phone
              </h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-blue-500" /> Email
              </h3>
              <p className="text-gray-600">contact@dentalclinic.com</p>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaClock className="text-blue-500" /> Working Hours
              </h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 6:00 PM <br />
                Saturday: 9:00 AM - 2:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

