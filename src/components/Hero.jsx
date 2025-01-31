import React from "react";
import { useState, useEffect } from "react";
import HeroImage from "../assets/header-img.png";
import { ReactTyped } from "react-typed";
import background from "../assets/b3.png";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ scrollToSection }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section
    style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
  >
    <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-10 w-full ">
      <div>
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="p-2 bg-purple-700 text-white fixed top-4 left-4 z-50 rounded-md shadow-lg"
            aria-label="Toggle Menu"
          >
            {/* Burger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}
        <div className="flex items-center space-x-3 fixed top-4 z-50 right-4">
          <a href="mailto:poojadmyadav@gmail.com" target="_blank">
            <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
          <a
            href="https://www.linkedin.com/in/pooja-yadav-7b56ba233"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
  
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full z-50 w-[75%] md:w-64 bg-gray-800 text-white shadow-xl transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-300"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  
          {/* Sidebar Links */}
          <ul className="mt-16 space-y-4 px-6">
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={() => {
                toggleSidebar();
                scrollToSection("home");
              }}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={() => {
                toggleSidebar();
                scrollToSection("about");
              }}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={() => {
                toggleSidebar();
                scrollToSection("skills");
              }}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={() => {
                toggleSidebar();
                scrollToSection("projects");
              }}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-blue-500 transition-colors"
              onClick={() => {
                toggleSidebar();
                scrollToSection("contact");
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
  
      <div
        className="min-h-[600px] max-w-[90%] mx-auto flex flex-col md:flex-row items-center"
        data-aos="zoom-in"
      >
        <div className="w-full md:w-2/3 pt-8">
          <div className="max-w-[700px]">
            <div className="border-l-4 border-purple-600 pl-4 md:pl-6">
              <h4 className="text-gray-100 text-lg md:text-xl mb-2">
                Welcome to my Portfolio
              </h4>
              <div>
                <h1 className="text-3xl md:text-4xl">
                  Hi! I'm Pooja,
                  <br />{" "}
                </h1>
                <h1 className="text-xl md:text-2xl">I'm a</h1>
  
                <ReactTyped
                  strings={[
                    "BackEnd Developer",
                    "Web Developer",
                    "Full-stack Developer",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  attr="placeholder"
                  loop
                >
                  <input
                    type="text"
                    className="text-lg md:text-2xl font-bold block w-full bg-transparent text-white outline-none mb-4"
                  />
                </ReactTyped>
              </div>
            </div>
            <p className="text-white text-sm md:text-md mb-6">
              Full-Stack Software Engineer  <br/>
               Expertise in Laravel, Vue.js, React,
              Node.js Creating Scalable and Robust Web Applications
            </p>
            <a
              href="mailto:poojadmyadav@gmail.com"
              className="inline-block bg-purple-700 text-white rounded-lg p-2 md:p-3 mr-3"
            >
              Let’s Connect
            </a>
            <a
              href="https://drive.google.com/file/d/1MM5IW5Nhams0H62XTno9fMxaui3yb_Dc/view?ts=6773ce40"
              target="_blank"
              className="inline-block bg-purple-700 text-white rounded-lg p-2 md:p-3"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <div className="flex justify-center items-center">
            <img
              src={HeroImage}
              alt=""
              className="h-64 w-64 md:h-96 md:w-96 rounded-full shadow-custom"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
