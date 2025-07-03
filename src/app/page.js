"use client"
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Steps } from "./components/Steps";
import { ContactMe } from "./components/ContactMe";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && (
        <nav dir="rtl" className="bg-white text-black p-4">
          <ul className="text-3xl font-semibold">
            <li className="my-4">
              <a 
                href="#steps" 
                className="hover:text-blue-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('steps');
                  if (element) {
                    const offsetTop = element.offsetTop - 150; // Adjust this value for your desired offset
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
              >
                איך זה עובד
              </a>
            </li>
            <li className="my-4">
              <a 
                href="#contact" 
                className="hover:text-blue-600 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const offsetTop = element.offsetTop - 80; // Adjust this value for your desired offset
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
              >
                צור קשר
              </a>
            </li>
          </ul>
        </nav>
      )}
      <Hero />
      <div id="steps">
        <Steps />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </div>
  );
}
