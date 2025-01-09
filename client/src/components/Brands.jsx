import React from 'react';
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook } from 'react-icons/fa';

const Brands = () => {
  const brands = [
    { id: 1, Icon: FaApple },
    { id: 2, Icon: FaGoogle },
    { id: 3, Icon: FaMicrosoft },
    { id: 4, Icon: FaAmazon },
    { id: 5, Icon: FaFacebook },
  ];

  return (
    <section className="py-12 bg-blue-500">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl lg:text-4xl font-bold text-white text-center mb-8">
          Trusted by Leading Brands
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center bg-white shadow-md rounded-lg p-4"
            >
              <brand.Icon className="text-blue-500 text-5xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
