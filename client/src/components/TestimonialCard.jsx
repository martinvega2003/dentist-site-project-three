import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ image, name, text, rating, styleClass }) => {
  return (
    <div
      className={`min-w-[85%] xl:min-w-[1000px] h-fit md:h-[350px] flex flex-row items-start rounded-lg shadow-md overflow-hidden p-4 ${styleClass}`}
    >
      {/* Picture */}
      <div className="flex-none w-1/4">
        <img
          src={image}
          alt={`${name}'s picture`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="flex-grow pl-4">
        <h3 className="text-xl sm:text-4xl font-bold text-gray-800 sm:mb-4">{name}</h3>
        <p className="text-gray-600 text-md sm:text-2xl italic mb-3">"{text}"</p>
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 w-3 sm:w-5 h-3 sm:h-5" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

