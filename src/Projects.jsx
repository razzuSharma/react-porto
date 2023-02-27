import React from "react";
import image1 from "../src/assets/blog.png";
import image2 from "../src/assets/ecommerce.png";
import image3 from "../src/assets/restro.png";

const projects = [
  {
    title: "ShopMeY!",
    description:
      "A simple website for creating ecommerce application with dynamic APIs",
    imageUrl: image2,
    tags: ["React", "Tailwind"],
    link: "https://github.com/razzuSharma/ecommerce-website",
  },
  {
    title: "P-Blog",
    description: "Created blog posting from NEXT JS.",
    imageUrl: image1,
    tags: ["NEXTJS", "Tailwind"],
    link: "https://github.com/razzuSharma/nextBLog",
  },
  {
    title: "Restro Project",
    description: "A simple restaurant project with VUE",
    imageUrl: image3,
    tags: ["VUE JS", "Tailwind"],
    link: "https://github.com/razzuSharma/restro_project",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto mt-44 py-10">
      <h1 className="text- text-center tracking-wider mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="object-contain h-48 w-96 justify-center items-center"
            />
            <div className="p-5">
              <h2 className="text-lg font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 text-base mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap mb-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:text-black transition-colors duration-300 ease-in-out"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
