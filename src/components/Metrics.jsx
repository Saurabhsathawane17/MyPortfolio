import React from 'react';
import { metrics } from '../constants.js';

const Metrics = () => {
  return (
    <section className="py-12 w-full flex flex-col items-center justify-center">
      {/* 1. Static Metrics (from constants.js) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full px-5 mb-16">
        {metrics.map((metric) => (
          <div key={metric.id} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-white/20 shadow-lg dark:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/50">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
              {metric.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-medium text-center">
              {metric.title}
            </p>
          </div>
        ))}
      </div>

      {/* 2. Live GitHub Metrics */}
      <div className="flex flex-col items-center w-full max-w-5xl px-5 mt-4">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 transition-colors duration-300 text-center">
          My <span className="text-purple-500">GitHub</span> Contributions
        </h3>
        
        {/* Live Stats Cards (Updates automatically via API) */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=Saurabhsathawane17&theme=tokyonight&hide_border=true&background=0d081f&cache_seconds=86400" 
            alt="Saurabh's Live GitHub Streak" 
            className="rounded-2xl shadow-lg border border-gray-200 dark:border-white/20 dark:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/50"
          />
        </div>
      </div>
    </section>
  );
};

export default Metrics;