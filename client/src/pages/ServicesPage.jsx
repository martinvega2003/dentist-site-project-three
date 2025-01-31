import React from 'react'
import HeroSection from '../components/HeroSection'
import { motion } from 'framer-motion'
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import ContactPage from './sections/Contact';
import AppointmentBooking from '../components/AppointmentBooking';

export const ServicesPage = ({category}) => {

    const services = category.services

  return (
    <section className='w-full h-fit flex flex-col justify-start items-center'>
        <HeroSection image={category.image} heading={category.heading} subheading={category.subheading} />

        <div id='about' className="w-full h-fit py-20 px-4 sm:px-16 flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start bg-blue-600 text-white">
            <h2 className="text-4xl w-1/2 my-4 hidden md:block">
                A Brief Overview On {category.title}
            </h2>
            <p className="text-xl text-gray-200 sm:w-1/2 md:mx-4 text-justify md:text-left">
                {category.description}
            </p>
        </div>

        <div id='services' className="relative bg-gray-50 py-16 w-full">
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
                        Explore Our {category.title} Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Browse our range of services and discover what makes us 
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
                        {services.map((service, index) => {
                            return (
                                <div className="bg-transparent p-6 rounded-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">
                                    {/* Image */}
                                    <img
                                        src={service.image || 'https://via.placeholder.com/400x200'}
                                        alt={service.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-blue-600">{service.name}</h3>
                                        {/* Description */}
                                        <p className="text-left text-sm text-gray-800">
                                        {service.subheading}
                                        </p>
                                        {/* Learn More Button */}
                                        <div className="mt-6 w-full">
                                        <Link to={"/services/" + category.title + "/" + (index + 1)}>
                                            <Button label="Learn More" className="w-full hover:scale-100" />
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </motion.div>
            </div>
        </div>

        <div className="w-full">
            <Benefits />
        </div>
        <div className='w-full'>
            <ContactPage />
        </div>
        <div className="w-full">
            <Testimonials />
        </div>
        <div className="w-full">
            <AppointmentBooking />
        </div>
    </section>
  )
}
