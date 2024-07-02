import React from "react";
import image1 from "../../src/assets/blog.png";
import image2 from "../../src/assets/ecommerce.png";
import image3 from "../../src/assets/restro.png";

// Project data

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

const imageMap = {
  "ShopMeY!": image2,
  "P-Blog": image1,
  "Restro Project": image3,
};

const Projects = () => {
  return (
    <div className="container mx-auto mt-20 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-wider mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={imageMap[project.title]}
              alt={project.title}
              className="object-cover h-48 md:h-64 w-full"
            />
            <div className="p-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 text-base mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full md:w-auto px-4 py-2 bg-teal-500 text-white rounded-md text-center hover:bg-teal-600 transition-colors duration-300"
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
