import React from "react";
import { FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Healthcare Chatbot",
    tech: ["Python", "NLP", "MongoDB", "Streamlit"],
    description:
      "Developed an AI-powered chatbot to assist users with healthcare-related queries, integrated with MongoDB for storing and retrieving health records.",
    type: "AI / Full-Stack"
  },
  {
    title: "Sign Language to Text Converter",
    tech: ["Python", "OpenCV", "CNN"],
    description:
      "Real-time system to translate hand gestures into text for communication assistance for the hearing-impaired.",
    type: "AI / Computer Vision"
  },
  {
    title: "Sleep Prediction Using ANN",
    tech: ["Python", "ANN", "OpenCV"],
    description:
      "ANN model to predict sleep quality based on lifestyle parameters like screen time, physical activity, and diet.",
    type: "AI / Deep Learning"
  },
  {
    title: "Pet Adoption Website",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Responsive platform to connect pet seekers with adoptable pets through an interactive interface.",
    type: "Frontend"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
        Featured Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCode className="text-cyan-400 text-2xl" />
              <span className="bg-cyan-900 text-cyan-300 px-3 py-1 text-xs rounded-full">
                {proj.type}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-700 text-cyan-300 px-3 py-1 text-xs rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
