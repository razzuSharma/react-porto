import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const IntroPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-transparent"
      style={{ overflowY: "hidden" }}
    >
      <div className="text-center md:p-12 lg:p-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Hi, I'm Raju Sharma Dahal
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white">
          A passionate Software Developer
        </p>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-4xl font-semibold text-white mb-4">My Socials</h2>
        <div className="flex justify-center space-x-6">
          <a
            className="text-white text-2xl hover:text-blue-50 cursor-pointer"
            href="https://twitter.com/Razzu_Sharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="text-white text-2xl hover:text-blue-50 cursor-pointer"
            href="https://github.com/razzuSharma"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="text-white text-2xl hover:text-blue-50 cursor-pointer"
            href="https://www.linkedin.com/in/raju-sharma-6a30671b0/"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
