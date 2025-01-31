import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'react-router-dom';
import useRedirect from './useRedirect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectTo = useRedirect()

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full h-[70px] md:h-[100px] z-50">
      <div className="container mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">DentalClinic</div>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links & Button */}
        <div className={`absolute top-16 left-0 w-full bg-white shadow-lg md:shadow-none md:static md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center md:flex-row md:items-center md:gap-1 lg:gap-6">
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0">
              <a href="#about">About</a>
            </li>
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0">
              <a href="#services">Services</a>
            </li>
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="p-4 md:p-0 flex justify-center items-center md:ml-6">
            <Button label="Book Appointment" variant="outline" onClick={() => redirectTo("/booking")} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;