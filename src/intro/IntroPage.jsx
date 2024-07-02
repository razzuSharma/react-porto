import React from 'react';

const IntroPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-500">
      <div className="text-center md:p-12 lg:p-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Hi, I'm Raju Sharma Dahal
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white">
          A passionate Software Developer
        </p>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-2xl font-semibold text-white mb-4">My Socials</h2>
        <div className="flex space-x-6">
          <a href="https://twitter.com" className="text-white hover:text-gray-200 transition-colors duration-200">
            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.936 4.936 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.389 4.49 13.973 13.973 0 01-10.141-5.146 4.921 4.921 0 001.523 6.573 4.902 4.902 0 01-2.231-.616c-.054 2.281 1.581 4.415 3.949 4.894a4.93 4.93 0 01-2.224.084 4.927 4.927 0 004.604 3.418A9.867 9.867 0 010 19.539a13.945 13.945 0 007.548 2.212c9.058 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-200 transition-colors duration-200">
            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.12 20.16H3.57V9.01h3.55v11.15zM5.35 7.51c-1.14 0-2.06-.93-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.13-.93 2.06-2.06 2.06zM20.16 20.16h-3.54v-5.45c0-1.3-.03-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88v5.54h-3.55V9.01h3.41v1.52h.05c.47-.89 1.61-1.82 3.32-1.82 3.55 0 4.2 2.34 4.2 5.39v6.06z" />
            </svg>
          </a>
          <a href="https://github.com" className="text-white hover:text-gray-200 transition-colors duration-200">
            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.387.6.111.793-.261.793-.577v-2.221c-3.337.724-4.042-1.416-4.042-1.416-.547-1.387-1.335-1.757-1.335-1.757-1.092-.746.083-.73.083-.73 1.207.083 1.841 1.239 1.841 1.239 1.072 1.837 2.809 1.306 3.492.999.107-.776.42-1.306.762-1.606-2.665-.302-5.467-1.335-5.467-5.933 0-1.312.469-2.383 1.236-3.222-.125-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.048.138 3.006.404 2.291-1.552 3.296-1.23 3.296-1.23.655 1.652.244 2.873.119 3.176.77.839 1.235 1.91 1.235 3.222 0 4.607-2.806 5.627-5.476 5.921.431.37.815 1.102.815 2.222v3.293c0 .318.19.692.798.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://instagram.com" className="text-white hover:text-gray-200 transition-colors duration-200">
            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.244 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.244 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.976-1.248-2.244-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.976-.976 2.244-1.248 3.608-1.31 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.257 0-3.667.012-4.947.071-1.475.068-2.973.387-4.094 1.507-1.12 1.121-1.439 2.619-1.507 4.094-.059 1.28-.071 1.69-.071 4.947s.012 3.667.071 4.947c.068 1.475.387 2.973 1.507 4.094 1.121 1.12 2.619 1.439 4.094 1.507 1.28.059 1.69.071 4.947.071s3.667-.012 4.947-.071c1.475-.068 2.973-.387 4.094-1.507 1.12-1.121 1.439-2.619 1.507-4.094.059-1.28.071-1.69.071-4.947s-.012-3.667-.071-4.947c-.068-1.475-.387-2.973-1.507-4.094-1.121-1.12-2.619-1.439-4.094-1.507-1.28-.059-1.69-.071-4.947-.071zM12 5.838c-3.403 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.325c-2.296 0-4.163-1.868-4.163-4.163s1.868-4.163 4.163-4.163 4.163 1.868 4.163 4.163-1.868 4.163-4.163 4.163zm6.406-11.845c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44 1.44-.644 1.44-1.44-.644-1.44-1.44-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
