import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  return (
    <div className="bg-black text-white py-24" id="education">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Education
        </h3>

        <div className="space-y-8">
          {/* B.Tech */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                B.Tech in Computer Science & Artificial Intelligence
              </h4>
              <span className="flex items-center gap-2 text-green-400">
                <FaCalendarAlt /> 2022 - 2026
              </span>
            </div>
            <p className="text-cyan-300 font-medium">
              Kakinada Institute of Engineering and Technology | CGPA: 7.58
            </p>
            <p className="text-gray-300 mt-2">
              Focusing on software development, data structures, algorithms, and emerging technologies.
            </p>
          </div>

          {/* Intermediate */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                Intermediate - MPC
              </h4>
              <span className="flex items-center gap-2 text-green-400">
                <FaCalendarAlt /> 2020 - 2022
              </span>
            </div>
            <p className="text-cyan-300 font-medium">
              Narayana Junior College | Percentage: 71%
            </p>
            <p className="text-gray-300 mt-2">
              Mathematics, Physics, Chemistry with a focus on analytical thinking and problem-solving.
            </p>
          </div>

          {/* SSC */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <FaGraduationCap className="text-cyan-400" />
                SSC
              </h4>
              <span className="flex items-center gap-2 text-green-400">
                <FaCalendarAlt /> 2019 - 2020
              </span>
            </div>
            <p className="text-cyan-300 font-medium">
              St. Theresa’s Girls High School | Percentage: 87%
            </p>
            <p className="text-gray-300 mt-2">
              Strong foundation in science and mathematics with consistent academic excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
