import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FaReact,
  FaVuejs,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaJs,
  FaShare,
} from "react-icons/fa";
const HomePage = () => {
  return (
    <section className="mt-20 flex justify-center">
      <div className="flex items-center max-w-screen-xl mx-auto p-4 bg-red">
        {/* Column 1: Name */}
        <div className="w-1/2 pr-8">
          <h1 className="text-5xl font-semibold mb-4 uppercase">
            Hello there,
          </h1>
          <p className="text-gray-600">
            Welcome to my website. I'm{" "}
            <span className="text-red-500 font-bold">Raju Sharma Dahal</span>, a
            web developer passionate about creating elegant and modern web
            applications.
          </p>
          <div className="flex gap-1">
            <h2 className="mt-3">Connect With me</h2>
            <span className="mt-7 transform rotate-180">
              <FaShare />
            </span>
          </div>
          <div className="flex mt-2 gap-5 text-red mb-5">
            <a
              href="https://github.com/razzuSharma"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="hover:text-gray-800 transition"
              />
            </a>
            <a
              href="https://twitter.com/Razzu_Sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="xl"
                className="hover:text-gray-800 transition"
              />
            </a>
          </div>
        </div>
        {/* Column 2: Image */}
        <div className="w-1/2 flex justify-end">
          <img
            src="/src/assets/image.jpg"
            alt="Your Name"
            className="w-1/2 h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
