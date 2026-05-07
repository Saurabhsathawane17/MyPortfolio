import React from 'react'
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Work from "./components/Work.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BlurBlob from './components/BlurBlob.jsx';
import Metrics from './components/Metrics.jsx';
import Certifications from './components/Certifications.jsx';

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-[#050414] text-gray-900 dark:text-white transition-colors duration-300">

      <BlurBlob position={{ top: '3%', left: '15%' }} size={{ width: '600px', height: '600px' }} />

      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Metrics />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Certifications />
        <Contact />
        <div className="flex justify-center pb-5">
          <img src="https://hits.sh/saurabh-portfolio-opt0.onrender.com.svg?style=flat-square&label=Visits&color=8245ec&labelColor=251f38" alt="Visits Hit Counter" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App
