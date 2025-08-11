import React from "react";
import { FaCode, FaDatabase } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const SkillBar = ({ skill, level }) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm text-gray-300 mb-1">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-teal-400 h-2 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

function TechnicalSkills() {
  return (
    <section className="py-16 bg-[#0B1120] text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#00FFCA] mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaCode className="text-[#00FFCA] text-2xl mr-2" />
              <h3 className="text-lg font-semibold">Programming Languages</h3>
            </div>
            <SkillBar skill="Python" level={90} />
            <SkillBar skill="Java" level={75} />
            <SkillBar skill="JavaScript" level={70} />
            <SkillBar skill="C Programming" level={80} />
          </div>

          {/* Web Development */}
          <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <MdOutlineWeb className="text-[#00FFCA] text-2xl mr-2" />
              <h3 className="text-lg font-semibold">Web Development</h3>
            </div>
            <SkillBar skill="React.js" level={80} />
            <SkillBar skill="HTML/CSS" level={86} />
            <SkillBar skill="Node.js" level={75} />
            <SkillBar skill="Express.js" level={70} />
          </div>

          {/* Database & Tools */}
          <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <FaDatabase className="text-[#00FFCA] text-2xl mr-2" />
              <h3 className="text-lg font-semibold">Database & Tools</h3>
            </div>
            <SkillBar skill="MongoDB" level={80} />
            <SkillBar skill="MySQL" level={70} />
            <SkillBar skill="Git/GitHub" level={75} />
          </div>

          {/* AI & Data Science */}
          <div className="bg-[#111827] p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <GiArtificialIntelligence className="text-[#00FFCA] text-2xl mr-2" />
              <h3 className="text-lg font-semibold">AI & Data Science</h3>
            </div>
            <SkillBar skill="Machine Learning" level={85} />
            <SkillBar skill="NLP" level={78} />
            <SkillBar skill="Scikit-learn" level={80} />
            <SkillBar skill="Deep Learning" level={75} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills;
