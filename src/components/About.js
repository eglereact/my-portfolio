import AboutImg from "../images/about3.svg";
import { Link as LinkScroll } from "react-scroll";
import cv from "./../images/eglereactcv.pdf";

function About() {
  return (
    <div id="about" className="py-10 max-w-5xl mx-auto">
      <div className="mx-5 md:mx-0 md:flex md:items-center md:justify-between">
        <div className="w-full">
          <img className="hidden md:block" src={AboutImg} alt="about me" />
        </div>
        <div className="w-full bg-[#F4F7F9] rounded-2xl p-5 md:mx-5">
          <h1 className="text-3xl text-gray-600 font-bold">About Me</h1>
          <p className="text-gray-600 my-5">
            I completed the Java programming course and now looking for an
            interesting job or internship in this area. I am a responsible,
            determined, studious, and detailed person. I accept challenges and I
            am ready to learn everything that is necessary. I am able to work in
            a team or on my own. I prefer ReactJs but I would also like to learn
            other languages.
          </p>
          <div className="flex">
            <a
              href={cv}
              download
              className="rounded mr-5 px-5 py-2.5 overflow-hidden group bg-gray-800 relative hover:bg-gradient-to-r 
            hover:from-[#FF8377] hover:to-[#fd8c82] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#fd8c82]
            transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 
              bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"
              ></span>
              <span className="relative">Download CV</span>
            </a>
            <LinkScroll
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              to="contact"
              offset={-50}
              className="rounded cursor-pointer inline-block px-5 py-2.5 overflow-hidden group bg-gray-800 relative
            hover:bg-gradient-to-r hover:from-[#FF8377] hover:to-[#fd8c82] text-white hover:ring-2 
            hover:ring-offset-2 hover:ring-[#fd8c82] transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 
              bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"
              ></span>
              <span className="relative">Contact Me</span>
            </LinkScroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
