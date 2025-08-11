import React from "react";
import { FaCertificate, FaDownload } from "react-icons/fa";

const certifications = [
  {
    title: "Python Web Developer Intern",
    organization: "AICTE",
    year: "2025",
    level: "Internship",
    description: "Completed a virtual internship focused on Python-based web development, backend APIs, and deployment practices.",
    link: "#"
  },
  {
    title: "ZScaler Virtual Internship",
    organization: "AICTE",
    year: "2025",
    level: "Internship",
    description: "Gained hands-on experience in cloud security concepts and ZScaler’s zero-trust architecture.",
    link: "#"
  },
  {
    title: "AI/ML Intern",
    organization: "EDUSKILLS, APSSDC - IBM SkillsBuild",
    year: "2024",
    level: "Internship",
    description: "Worked on AI and ML projects involving model training, evaluation, and data preprocessing.",
    link: "#"
  },
  {
    title: "Machine Learning",
    organization: "Infosys Springboard",
    year: "2025",
    level: "Professional",
    description: "Comprehensive training on supervised and unsupervised machine learning models and deployment.",
    link: "#"
  },
  {
    title: "FMML Internship",
    organization: "IIIT Hyderabad",
    year: "2024",
    level: "Internship",
    description: "Focused on Full Stack Machine Learning (FMML) including problem definition, solution design, and ML pipelines.",
    link: "#"
  },
  {
    title: "Oracle Cloud Infrastructure Certified AI Foundation Associate",
    organization: "Oracle University",
    year: "2025",
    level: "Professional",
    description: "Certification in AI services and solutions on Oracle Cloud Infrastructure.",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
        Certifications & Achievements
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <FaCertificate className="text-green-400 text-2xl" />
              <span className="text-gray-400">{cert.year}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-green-300 mb-2">{cert.organization}</p>
            <span className="text-sm text-gray-400 mb-3 block">
              {cert.level}
            </span>
            <p className="text-gray-300 mb-4">{cert.description}</p>
            <a
              href={cert.link}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-400 border border-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition"
            >
              <FaDownload className="mr-2" /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
