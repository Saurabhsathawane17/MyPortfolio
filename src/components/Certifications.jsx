import React from 'react';
import { certifications } from '../constants.js';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
        Certifications
      </h2>
      <div className="flex flex-col max-w-4xl w-full px-5 relative border-l-2 border-purple-500/30 ml-4 md:ml-0">
        {certifications.map((cert) => (
          <div key={cert.id} className="mb-10 ml-6 relative group">
            <span className="absolute -left-[35px] top-1 w-5 h-5 bg-purple-500 rounded-full border-4 border-white dark:border-[#050414] group-hover:scale-110 transition-transform"></span>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-white/20 p-6 rounded-2xl shadow-sm dark:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition-all duration-300 hover:scale-[1.03]">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
              <p className="text-md font-semibold text-purple-600 dark:text-purple-400 mt-1">{cert.issuer}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">{cert.date}</span>
              <p className="text-gray-700 dark:text-gray-300 text-base">{cert.desc}</p>
              {cert.link !== "#" && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 transition-colors">
                  View Certificate &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;