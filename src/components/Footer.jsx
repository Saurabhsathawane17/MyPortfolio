import React from 'react'
import {FaLinkedin, FaInstagram } from 'react-icons/fa';
const Footer = () => {

//smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  };
  return (
    <footer className='text-gray-900 dark:text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] transition-colors duration-300'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>
          Saurabh Sathawane
        </h2>
        {/*navigation link */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:"About",id:"about"},
            {name:"Skills",id:"skills"},
            {name:"Experience",id:"experience"},
            {name:"Projects",id:"projects"},
            {name:"Education",id:"education"},
          ].map((item,index) => (
            <button
            key={index}
            onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/*social media */}
        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            {icon: <FaLinkedin />,link:"https://Linkedin.com/in/saurabh-sathawane"},
            {icon: <FaInstagram />,link:"https://www.instagram.com/saurabhsathawane_16"},
          ].map((item,index) =>(
            <a
            key={index}
            href={item.link}
              target="_blank"
              rel="noopener norefferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
            </a>
          ))}
        </div>
        {/*copyright text*/}
        <p className='text-sm text-gray-600 dark:text-gray-400 mt-6 transition-colors'>
        © 2026 Saurabh Sathawane. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer