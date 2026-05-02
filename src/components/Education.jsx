import React from "react";
import { education } from "../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-8 transform -translate-x-1/2 w-[3px] bg-white h-full opacity-40"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-16`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-8 transform -translate-x-1/2 -translate-y-2 bg-gray-300 border-4 border-[#8245ec] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex justify-center items-center z-20 shadow-lg">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`
                w-[calc(100%-4rem)] sm:w-full sm:max-w-xl lg:max-w-2xl 
                bg-gray-900 backdrop-blur-md
                border border-white/20 
                rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                p-6 sm:p-8 
                transform transition duration-300 hover:scale-[1.03]
                ${index % 2 === 0 ? "ml-16 sm:ml-[55%]" : "ml-16 sm:ml-0 sm:mr-[55%]"}
              `}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 mb-4 sm:mb-0 bg-white rounded-md overflow-hidden shadow-md shrink-0">
                  <img
                    src={edu.img}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white break-words">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300 break-words">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold break-words">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400 break-words">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;