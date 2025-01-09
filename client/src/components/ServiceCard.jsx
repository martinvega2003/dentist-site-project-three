import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Button from './Button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ image, title, description, services, professionals, path, isCategorycard }) => {

  const categoryCard = (
    <div className="bg-transparent p-6 rounded-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <img
        src={image || 'https://via.placeholder.com/400x200'}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
        {/* Services */}
        <ul className="mt-4 space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FiCheck className="text-blue-500 mr-2" />
              {service.name}
            </li>
          ))}
        </ul>
        {/* Professionals */}
        <p className="mt-4 text-gray-600 text-sm">
          <span className="font-medium">Professionals:</span> {professionals.join(', ')}
        </p>
        {/* Learn More Button */}
        <div className="mt-6 w-full">
          <Link to={path}>
            <Button label="Learn More" className="w-full hover:scale-100" />
          </Link>
        </div>
      </div>
    </div>
  )

  const serviceCard = (
    <div className="bg-transparent p-6 rounded-lg overflow-hidden transition-transform transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Image */}
      <img
        src={image || 'https://via.placeholder.com/400x200'}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
        {/* Description */}
        <p className="text-left text-sm text-gray-800">
          {description}
        </p>
        {/* Learn More Button */}
        <div className="mt-6 w-full">
          <Link to={path}>
            <Button label="Learn More" className="w-full hover:scale-100" />
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    isCategorycard ? categoryCard : serviceCard
  );
};

export default ServiceCard;

