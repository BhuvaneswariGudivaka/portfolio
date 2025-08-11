import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-center">
      <div className="container mx-auto px-6">
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
          Gudivaka Bhuvaneswari
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          I don't just code — I create experiences.
        </p>

        {/* Subtitle */}
        <p className="mt-2 text-xl text-cyan-400">
          CSE-AI - Undergraduate
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-lg font-semibold transition duration-300"
          >
            Download Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg font-semibold cursor-pointer"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-300">
          <a href="https://www.linkedin.com/in/bhuvaneswari-gudivaka-629960288" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/BhuvaneswariGudivaka" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="mailto:gudivakabhuvaneswari25@gmail.com" className="hover:text-cyan-400">
            <FaEnvelope />
          </a>
        </div>

        {/* Scroll Down Icon */}
        <div className="mt-12 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
