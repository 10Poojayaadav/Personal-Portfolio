import React from "react";
import background from "../assets/b5.png";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
    });
  }, []);
  return (
    <section
      className="bg-slate-800"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto text-center my-auto w-[90%]" data-aos="fade-right">
        <h2 className="text-4xl mb-4 font-bold">About Me</h2>
        <div className="max-w-[1140px] mx-auto mb-14">
          <p className="mb-2">
            Hi, I'm Pooja Yadav, a passionate Software Engineer specializing in
            developing scalable and user-friendly applications. With a knack for
            solving complex problems and a strong foundation in web
            technologies, I strive to deliver top-notch solutions that exceed
            expectations.
          </p>
          <p className="mb-2">
            I love learning new technologies, experimenting with innovative
            ideas, and turning concepts into functional and visually appealing
            projects.
          </p>
        </div>
        {/* Experiences */}
        <h2 className="text-3xl mb-5 font-bold">Experiences</h2>
        <div className="max-w-[700px] mx-auto mb-16">
          <div className="flex flex-col justify-center">
            <div className="w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                <div className="hidden sm:block w-1 bg-purple-700 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div>
                          <div className="p-4 text-left bg-[#ffffff40] rounded shadow">
                            <div className="flex justify-between gap-2">
                              <div>
                                <p className="text-white text-lg leading-1">
                                  Singsys Pte. Ltd.
                                </p>
                                <p className="text-gray-100 text-md">
                                  Software Engineer
                                </p>
                                <p className="text-gray-300 ">
                                  A Software Engineer is a professional who
                                  designs, develops, tests, and maintains
                                  software applications and systems. They use
                                  programming languages, algorithms, and
                                  problem-solving skills to create reliable and
                                  scalable solutions that meet user and business
                                  needs. 
                                </p>
                              </div>
                              <div className="text-right whitespace-nowrap">
                                <time className="text-sm text-gray-100 font-normal">
                                  2023-Present
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-purple-700 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 text-left bg-[#ffffff40] rounded shadow">
                          <div className="flex justify-between gap-2">
                            <div>
                              <p className="text-white text-lg leading-1">
                                Ease My Room
                              </p>
                              <p className="text-gray-100 text-md">
                                Software Engineer
                              </p>
                              <p className="text-gray-300">
                              Software Engineers work across various
                                  domains, including web development, mobile
                                  applications, and system infrastructure,
                                  ensuring efficiency, security, and innovation
                                  in technology.
                              </p>
                            </div>
                            <div className="text-right whitespace-nowrap">
                              <time className="text-sm text-gray-100 font-normal">
                                Apr 2023 - Sep 2023
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-purple-700 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education  */}
        <h2 className="text-3xl mb-5 font-bold mt-4">Education</h2>
        <div className="max-w-[700px] mx-auto">
          <div className="flex flex-col justify-center">
            <div className="w-full px-2 sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                <div className="hidden sm:block w-1 bg-purple-700 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div>
                          <div className="p-4 text-left bg-[#ffffff40] rounded shadow">
                            <div className="flex justify-between gap-2">
                              <div>
                                <p className="text-white text-lg leading-1">
                                  Bachalor's of Technology(CSE)
                                </p>
                                <p className="text-gray-300 text-md">
                                  Goel institute of technology & management
                                </p>
                              </div>
                              <div className="text-right whitespace-nowrap">
                                <time className="text-sm text-gray-100 font-normal">
                                  2020-2023
                                </time>
                                <p className="text-sm text-gray-400 font-normal">8.29 CGPA</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-purple-700 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="p-4 text-left bg-[#ffffff40] rounded shadow">
                          <div className="flex justify-between gap-2">
                            <div>
                              <p className="text-white text-lg leading-1">
                                Diploma (IT)
                              </p>
                              <p className="text-gray-300 text-md">
                                Government Polytechnic Lucknow
                              </p>
                            </div>
                            <div className="text-right whitespace-nowrap">
                              <time className="text-sm text-gray-100 font-normal">
                                2017-2020
                              </time>
                              <p className="text-sm text-gray-400 font-normal">77.9%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-purple-700 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
