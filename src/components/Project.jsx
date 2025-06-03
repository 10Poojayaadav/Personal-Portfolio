import { useState, useEffect, useRef } from "react";
import ProjectImage1 from "../assets/project/p (8).png";
import ProjectImage2 from "../assets/project/p (7).png";
import ProjectImage3 from "../assets/project/p (9).png";
import ProjectImage4 from "../assets/project/p (1).png";
import ProjectImage5 from "../assets/project/p (2).png";
import ProjectImage6 from "../assets/project/p (3).png";
import ProjectImage7 from "../assets/project/p (4).png";
import ProjectImage8 from "../assets/project/p (5).png";
import ProjectImage9 from "../assets/project/p (6).png";
import ProjectImage10 from "../assets/project/p (10).png";
import ProjectImage11 from "../assets/project/p (11).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);

  const projectsTab1 = [
    {
      title: "Sq-Web",
      description:
        "This Vue.js project is a real-time communication platform featuring seamless chat functionality and instant notifications. Users can engage in private or group chats with real-time message updates, typing indicators, and read receipts.",
      imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://web.spiritualquotient.org/",
      skills: "Vue.js",
    },
    {
      title: "EveryNation(Admin Panel)",
      description:
        "This is Admin Panel of Sq-Web and Mobile app created with laravel technology with robust and very interactive design",
      imgUrls: [ProjectImage7],
      skills: "laravel, Socket, FCM, Firebase",
      // url: "https://google.com",
    },
    {
      title: "Shivam Yoga(Admin Panel)",
      description:
        "This is a Admin Panel of shivam Yoga application use for manage all the section with payment gateway",
      imgUrls: [ProjectImage8],
      skills: "laravel, Socket, FCM, Firebase, strip",
      // url: "https://google.com",
    },
  ];

  const projectsTab2 = [
    {
      title: "Prominence(Admin Panel)",
      description:
        "This is a Admin Panel of Prominence application use for manage all the section with payment gateway and notification",
      imgUrls: [ProjectImage10],
      skills: "React.js, Redux",
      // url: "https://google.com",
    },
    {
      title: "Prominence(Website)",
      description:
        "This is React.js project created to book the ride some kind of uber, ola",
      imgUrls: [ProjectImage4, ProjectImage5, ProjectImage6],
      url: "https://prominencesingapore.com/",
      skills: "React.js, Redux",
    },
    {
      title: "Body Inc(Admin Panel)",
      description:
        "This is a Admin Panel of Body Inc application use for manage all the section with payment gateway with notification and chat section",
      imgUrls: [ProjectImage9],
      skills: "laravel, Socket, FCM, Firebase, strip",
      // url: "https://google.com",
    },
  ];

  const projectsTab3 = [
    {
      title: "Spiritual Quotient (API)",
      description: "API for Android and IOS application",
      imgUrls: [ProjectImage7],
      skills: "laravel, Socket, FCM, Firebase, strip",
      url: "https://play.google.com/store/search?q=spiritual%20quotient&c=apps",
    },
    {
      title: "Body Inc (API)",
      description: "API for Android and IOS application",
      imgUrls: [ProjectImage9],
      skills: "laravel, Socket, FCM, Firebase, strip",
      url: "https://play.google.com/store/search?q=BodyInc&c=apps",
    },
    {
      title: "Promonince (API)",
      description: "API for Android and IOS application",
      imgUrls: [ProjectImage10],
      skills: "laravel, Socket, FCM, Firebase, strip",
      url: "https://play.google.com/store/apps/details?id=com.prominence.chauffer",
    },
  ];
  const projectsTab4 = [
    {
      title: "AI Game Designer Visualizer",
      description:
        "Featuring animated reasoning flow, confidence filters, and narration in both text and voice Built with React Tailwind CSS for a fun, interactive, and visual hackathon experience.",
      imgUrls: [ProjectImage11],
      skills: "React.js, Redux",
      url: "https://ai-game-designer.vercel.app/",
    },
    
  ];

  const getProjectsForActiveTab = () => {
    switch (activeTab) {
      case 1:
        return projectsTab1;
      case 2:
        return projectsTab2;
      case 3:
        return projectsTab3;
      case 4:
        return projectsTab4;
      default:
        return projectsTab1;
    }
  };

  const openPopup = (project, event) => {
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({
      top: window.scrollY + rect.top,
      left: rect.left,
    });
    setSelectedProject(project);
  };

  const projects = getProjectsForActiveTab();

  const closePopup = () => setSelectedProject(null);

  return (
    <div ref={containerRef} className="bg-gray-900 text-white py-28">
      {/* Section Title */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2">
          Explore some of the projects I’ve worked on across different areas.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10 px-4 flex-wrap gap-4">
        {["Tab 1", "Tab 2", "Tab 3","Tab 4"].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`px-6 py-2 text-sm font-medium rounded-lg transition ${
              activeTab === index + 1
                ? "bg-purple-600 text-white"
                : "bg-gray-700 hover:bg-purple-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 mb-5">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={(event) => openPopup(project, event)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,255,255,0.6)] cursor-pointer"
          >
            <img
              src={project.imgUrls ? project.imgUrls[0] : project.imgUrls}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg md:text-xl font-semibold mb-2">
                {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedProject && (

        <>
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40"></div>
         <div
          className="absolute left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg p-6 w-full max-w-2xl shadow-lg z-50 overflow-y-auto max-h-[90vh] "
          style={{ top: popupPosition.top }}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-4xl text-white hover:text-gray-300 z-50 font-bold"
          >
            ×
          </button>

          {/* Image Swiper */}
          <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {selectedProject.imgUrls.map((imgUrl, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={imgUrl}
                  alt={`Slide ${idx}`}
                  className="w-full h-60 sm:h-80 object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Project Info */}
          <h4 className="text-xl md:text-2xl font-semibold mt-4">
            {selectedProject.title}
          </h4>
          <p className="text-gray-400 mt-2">{selectedProject.description}</p>
          <p className="text-gray-400 mt-2">Skills: {selectedProject.skills}</p>
          {selectedProject.url && (
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline mt-4 inline-block"
            >
              Visit Project
            </a>
          )}
        </div>
        </>
       
      )}
    </div>
  );
};
