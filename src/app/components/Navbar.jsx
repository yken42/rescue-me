"use client";
import  React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


export const Navbar = ({ setIsOpen, isOpen }) => {
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 40; // Adjust this value for your desired offset
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className="">
      <ul className="flex justify-between items-center p-4 bg-[#fff] text-black">
        <li className="font-bold text-2xl"><a href="/">RESCME.</a></li>
        
        {/* Desktop Navigation */}
        <li className="hidden sm:flex space-x-8 space-x-reverse">
          <a 
            href="#steps"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('steps');
            }}
            className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium"
          >
            איך זה עובד
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="hover:text-blue-600 cursor-pointer transition-colors duration-200 font-medium"
          >
            צור קשר
          </a>
        </li>
        
        {/* Mobile Menu Button */}
        <li className="block sm:hidden text-3xl hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <IoMdMenu />}
        </li>
      </ul>
    </nav>
  );
};
