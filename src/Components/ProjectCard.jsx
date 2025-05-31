import React from "react";

const ProjectCard = (props) => {
  const { title, description, tags, image } = props;

  return (
    <div className="w-64 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[1px] shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="bg-black rounded-3xl text-white flex flex-col items-center p-4 space-y-4">
        <img src={image} alt={title} className="w-20 h-20 rounded-full border-4 border-white object-cover" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-center text-sm text-gray-300">{description}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-black border border-white text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
