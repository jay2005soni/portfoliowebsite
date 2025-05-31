import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <>
      <nav className='flex justify-between items-center bg-[#161616] p-4 fixed top-0 left-0 w-full z-50'>
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-pink-500 bg-clip-text text-transparent">
          Jaykishan Soni
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-white text-lg">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400">About</ScrollLink>
          <ScrollLink to="project" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400">Project</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400">Services</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400">Contact</ScrollLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full h-full bg-[#161616] text-white p-4 flex flex-col gap-6 z-50 md:hidden">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer hover:text-green-400" onClick={handleLinkClick}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-green-400" onClick={handleLinkClick}>About</ScrollLink>
            <ScrollLink to="project" smooth={true} duration={500} className="cursor-pointer hover:text-green-400" onClick={handleLinkClick}>Project</ScrollLink>
            <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-green-400" onClick={handleLinkClick}>Services</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-green-400" onClick={handleLinkClick}>Contact</ScrollLink>

            <button className="mt-6 bg-green-500 text-white py-2 rounded-full hover:bg-green-600 text-sm font-semibold w-full">
              Get In Touch
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
