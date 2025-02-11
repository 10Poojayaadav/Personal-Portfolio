import React from "react";
import background from "../assets/b2.png";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  { name: "Java", percentage: 50 },
  { name: "Vue.js", percentage: 75 },
  { name: "PHP, Laravel", percentage: 73 },
  { name: "Vue.js", percentage: 75 },
  { name: "React.js, Redux", percentage: 75 },
  { name: "Web Development", percentage: 75 },
  { name: "MySQL", percentage: 75 },
  { name: "Node.js", percentage: 75 },
];
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section
      className="bg-gray-800 py-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2 className="text-3xl text-center mb-8 font-bold text-white">
          Skills
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10 px-5  rounded-xl bg-black lg:grid-cols-4 gap-6">
      
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-md p-2 bg-gray-900"
          >
            <div className="relative size-40 mx-auto">
              <svg
                className="rotate-[135deg] size-full"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-gray-200 dark:text-neutral-700"
                  strokeWidth="1.5"
                  strokeDasharray="100 100"
                  strokeLinecap="round"
                ></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-current text-blue-600 dark:text-blue-500"
                  strokeWidth="1.5"
                  strokeDasharray={`${skill.percentage} 100`}
                  strokeLinecap="round"
                ></circle>
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-500">
                  {skill.percentage}
                </span>
                <span className="text-blue-600 dark:text-blue-500 block">
                  {skill.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
