import "./index.css";
import React from "react";
import {
  BsFillMoonStarsFill,
  BsGithub,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import { FaReact, FaVuejs, FaGithub } from "react-icons/fa";
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

import { useState } from "react";

function App() {
  // const regularZoom = batch(StickyIn(50,20),FadeIn(), ZoomIn())
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const ZoomInScrollOut = batch(StickyIn(50, 10), FadeIn(), ZoomIn());
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
            <p className="font-serif pt-4 leading-3f">
              As a front-end developer, I am passionate about creating visually
              appealing and user-friendly websites. I have experience in HTML,
              CSS, and JavaScript and I enjoy using these skills to bring
              designs to life. In my portfolio, you will find a selection of my
              recent projects that highlight my abilities in front-end
              development. My work includes responsive design, cross-browser
              compatibility, and a strong focus on user experience.
            </p>
          </div>
          <div className="text-center text-3xl font-bold"></div>
          <div className="flex text-xl tracking-wide justify-center gap-6 pt-5">
            <BsGithub />
            <BsLinkedin />
            <BsFacebook />
          </div>
        </section>
        <section className="h-screen w-screen bg-gradient-to-t  from-gray-100 to to-teal-100 ">
          <ScrollPage>
            <motion.div className="text-center mt-40 justify-center  flex flex-column gap-4">
              <motion.div
                className="block max-w-sm p-6 bg-white-50 border  border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-50"
                layout
                onClick={() => setIsOpen(!isOpen)}
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaReact className="" />
                </h1>
                {isOpen && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ dration: 1 }}
                    className="text-center"
                  >
                    REACT
                  </motion.p>
                )}
              </motion.div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border  border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700   w-50"
                layout
                onClick={() => setIsOpen2(!isOpen2)}
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaVuejs className="justify-center text-center" />
                </h1>
                {isOpen2 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ dration: 1 }}
                    className="text-center"
                  >
                    VUE JS
                  </motion.p>
                )}
              </div>
              <div
                className=" block max-w-sm p-6 bg-white-50 border  border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700   w-50"
                layout
                onClick={() => setIsOpen3(!isOpen3)}
                transition={{ layout: { duration: 0.6, type: "spring" } }}
              >
                <h1>
                  <FaGithub />
                </h1>
                {isOpen3 && <p   initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ dration: 1 }}
                    className="text-center" >GITHUB</p>}
              </div>
            </motion.div>
            <h1>
              <Animator animation={ZoomInScrollOut}>My Skills...</Animator>
            </h1>
          </ScrollPage>
        </section>
      </ScrollContainer>
    </div>
  );
}
export default App;
