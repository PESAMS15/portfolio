import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiReact, SiExpress, SiMongodb } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Backend Developer.", "MERN Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">PESAMS</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
       
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="http://github.com/PESAMS15"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href="http://twitter.com/pesams15"><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/persy-studioz-967368253/"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner