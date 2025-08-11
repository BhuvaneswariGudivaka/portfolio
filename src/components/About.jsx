import React from "react";
import { FaCode, FaBrain, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-black text-white py-24" id="about">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h3>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Introduction */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <p className="text-lg mb-4">
              Hi, I'm <span className="text-cyan-400 font-bold">Bhuvaneswari Gudivaka</span> — 
              a Computer Science & Artificial Intelligence undergraduate passionate about 
              building intelligent systems, innovative applications, and modern web experiences.
            </p>
            <p className="text-lg mb-6">
              I work with <span className="text-green-400 font-semibold">Python, AI/ML frameworks, and modern web technologies</span>. 
              My interests include AI-powered applications, NLP, data-driven solutions, and UI/UX design. 
              I love exploring emerging technologies, contributing to innovative projects, and continuously 
              upgrading my skills.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-cyan-800 px-3 py-1 rounded-full text-sm">
                AI/ML Developer
              </span>
              <span className="bg-green-800 px-3 py-1 rounded-full text-sm">
                Web Developer
              </span>
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm">
                Creative Thinker
              </span>
            </div>
          </div>

          {/* Right Side - Skill Highlights */}
          <div className="grid gap-6">
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex items-start gap-4">
              <FaCode className="text-cyan-400 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold">Full-Stack & AI Development</h4>
                <p className="text-gray-300">
                  Building intelligent apps with Python, React, Node.js, MongoDB, and AI/ML frameworks.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex items-start gap-4">
              <FaBrain className="text-green-400 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold">AI & Data Science Explorer</h4>
                <p className="text-gray-300">
                  Working with AI, NLP, and ML models to create real-world solutions in healthcare, automation, and analytics.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex items-start gap-4">
              <FaLightbulb className="text-yellow-400 text-3xl" />
              <div>
                <h4 className="text-xl font-semibold">Creative Thinker</h4>
                <p className="text-gray-300">
                  Transforming complex problems into elegant, user-focused solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
