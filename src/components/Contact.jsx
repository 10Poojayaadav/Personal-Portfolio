import React from "react";
import back from "../assets/backgroundContact.png";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bwakdqn",
        "template_vvz7h1i",
        e.target,
        "CKAwSSU_dsXPHmY4G"
      )
      .then(
        (result) => {
          e.target.reset();
          setStatus("Email sent successfully!");
        },
        (error) => {
          setStatus("Error sending email");
        }
      );
  };
  return (
    <div
      className="px-5 py-16 sm:py-12 lg:px-4 overflow-x-hidden"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col sm:flex-row mx-auto w-full max-w-6xl items-center justify-center sm:space-x-4">
    
       <div
          className="text-black  w-full sm:w-1/2 max-w-xl mb-8 sm:mb-0 "
          data-aos="fade-right"
        >
          <h2 className="font-bold text-3xl sm:text-4xl">Get in touch</h2>
          <p className="text-base sm:text-lg mt-4 text-gray-400">
            I love to hear from you! Whether you have a question,
            <br />
            suggestion, or just want to say hello, feel free to reach out.
            <br />I will get back to you as soon as possible.🙂
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt className="w-5 h-5" />
              <span>India, Uttar Pradesh, Lucknow</span>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-2 mt-4 text-gray-400">
              <FaEnvelope className="w-5 h-5" />
              <span>poojadmyadav@gmail.com</span>
            </div>
          </div>
        </div>
    
       
      
        <div
          className="w-full sm:w-1/2 max-w-xl bg-white rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-5 w-full py-5 px-5"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="123-456-789"
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="block w-full rounded-md bg-purple-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
