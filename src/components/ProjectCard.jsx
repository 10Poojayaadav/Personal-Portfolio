export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
            <h4 className="text-lg font-bold">{title}</h4>
            <span className="text-sm mt-2">{description}</span>
          </div>
        </div>
      </div>
    );
  };
  