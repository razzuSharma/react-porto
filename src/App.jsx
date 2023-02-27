import "./index.css";
import React from "react";
import Projects from "./Projects";
import Contact from "./ContactPage";
import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import {
  FaReact,
  FaVuejs,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaJs,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Animator,
  batch,
  FadeIn,
  ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

function App() {
  const ZoomInScrollOut = batch(StickyIn(50, 10), FadeIn(), ZoomIn());
  const stylesICons = {
    FaReact,
    FaVuejs,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaLinux,
    FaJs,
  };
  return (
    <div className="App">
      <ScrollContainer>
        <section className=" h-screen w-screen bg-orange-50">
          <nav className="p-8 mb-12 flex justify-between">
            <h1 className="text-xl space-x-5 font-burtons">
              Developed by, <span className=" text-teal-500">RSD</span>
            </h1>
            <ul className="flex items-center space-x-5">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer" />
              </li>

              <li>
                <a
                  className=" bg-gradient-to-r text-white cursor-pointer hover:text-black from-cyan-500 to to-teal-400 px-4 py-2 rounded-md"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-5 text-center">
            <motion.h2
              className="font-mono font-bold mt-52 text-5xl tracking-widest	"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.69 }}
            >
              RAJU SHARMA DAHAL
            </motion.h2>
            <motion.h3
              className="font-mono font-semibold text-3xl tracking-widest"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.9 }}
            >
              <span className=" text-teal-500">WEB</span> DEVELOPER
            </motion.h3>
            <div className="flex justify-center">
              <p className="font-serif pt-4 text-center leading-3f w-2/4">
                As a front-end developer, I am passionate about creating
                visually appealing and user-friendly websites. I have experience
                in HTML, CSS, and JavaScript and I enjoy using these skills to
                bring designs to life.
              </p>
            </div>
          </div>
          <div className="text-center text-3xl font-bold"></div>
          <div className="flex text-xl tracking-wide justify-center gap-6 pt-5">
            <BsGithub />
            <BsLinkedin />
            <BsFacebook />
          </div>
        </section>
        <section className="h-screen w-screen  bg-orange-50 ">
          <ScrollPage>
            <motion.div className="text-center mt-40 justify-center flex flex-column gap-4">
              <motion.div
                className="block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaReact className="" />
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></motion.p>
              </motion.div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                onClick={() => setIsOpen2(!isOpen2)}
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaVuejs className="justify-center text-center" />
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></motion.p>
              </div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaGithub />
                </h1>

                <p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></p>
              </div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaHtml5 />
                </h1>

                <p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></p>
              </div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaCss3 />
                </h1>
                <p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></p>
              </div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaLinux />
                </h1>
                <p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></p>
              </div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50 sm:w-auto"
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaJs />
                </h1>
                <p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ dration: 1 }}
                  className="text-center"
                ></p>
              </div>
            </motion.div>
            <h1>
              <Animator animation={ZoomInScrollOut} className="md:text-center">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl mb-4">My Skills...</h2>
                </div>
              </Animator>
            </h1>
            <Projects  />
          </ScrollPage>
        </section>
        <section className="h-screen w-screen  bg-orange-50 ">
          <Contact/>
        </section>
      </ScrollContainer>
    </div>
  );
}
export default App;
