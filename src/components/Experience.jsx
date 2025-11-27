import React from "react";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[10vw] md:px-[8vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-white h-full opacity-40"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-24`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-300 border-4 border-[#8245ec] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-20 shadow-lg">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`
                w-full sm:max-w-xl lg:max-w-2xl 
                bg-gray-900 backdrop-blur-md
                border border-white/20 
                rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                p-6 sm:p-8 
                transform transition duration-300 hover:scale-[1.03]
                ${index % 2 === 0 ? "sm:ml-[55%]" : "sm:mr-[55%]"}
              `}
            >
              {/* Header Section */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden shadow-md">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-gray-300 text-sm">{experience.company}</h4>
                  <p className="text-gray-500 text-sm mt-1">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-relaxed">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-200 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
