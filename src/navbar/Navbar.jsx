import React from "react";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">Logo</span>
          <div className="flex space-x-8 text-gray-900">
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <a href="/blogs">Blogs</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
