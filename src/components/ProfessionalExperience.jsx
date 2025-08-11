import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Python Web Developer Intern",
    organization: "AICTE",
    year: "2025",
    description: "Worked on developing dynamic web applications using Python, Flask, and basic frontend integration."
  },
  {
    title: "AI/ML Intern",
    organization: "EDUSKILLS - IBM SkillsBuild",
    year: "2024",
    description: "Built AI/ML models for real-world datasets, performed model training, evaluation, and deployment."
  },
  {
    title: "FMML Internship",
    organization: "IIIT Hyderabad",
    year: "2024",
    description: "Gained experience in Full Stack Machine Learning (FMML) including data preprocessing, training, and deployment pipelines."
  }
];

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
        Professional Experience
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <FaBriefcase className="text-green-400 text-2xl" />
              <span className="text-gray-400">{exp.year}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-green-300 mb-2">{exp.organization}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
