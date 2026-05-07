import React, { useEffect, useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');

    // Apply or remove the 'dark' class on the root HTML element whenever the theme changes
    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [theme]);

    //check scroll and check navbar background
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll",handleScroll);
    },[]);

    const handleThemeSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    //smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        {id: "about", label: "About"},
        {id: "skills", label: "Skills"},
        {id: "experience", label: "Experience"},
        {id: "work", label: "Projects"},
        {id: "education", label: "Education"},
    ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 lg:px-[20vw] ${
        isScrolled ? "bg-white/80 dark:bg-[#050414]/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-gray-900 dark:text-white py-5 flex justify-between items-center transition-colors duration-300">
            {/*Logos*/}
            <div className='text-lg font-semibold cursor-pointer'>
            <span className='text-[#8245ec]'></span>
            <span className='text-[#8245ec]'>Saurabh</span>
            <span className='text-[#8245ec]'>/</span>
            <span className='text-[#8245ec]'>Sathawane</span>
            <span className='text-[#8245ec]'></span>
            </div>

            {/*Desktop*/}
            <ul className='hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 transition-colors'>
                {menuItems.map((item) =>(
                    <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
                      activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}>
                        <button onClick={() => handleMenuItemClick(item.id)}>
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            {/* social media icons*/}
            <div className='hidden md:flex space-x-4 items-center'>
                <a href="https://github.com/Saurabhsathawane17"
                target='_blank' rel='noopener noreferrer' className='text-gray-700 dark:text-gray-300 hover:text-[#8245ec] dark:hover:text-[#8245ec] transition-colors'
                >
                    <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/saurabh-sathawane"
                target='_blank' rel='noopener noreferrer' className='text-gray-700 dark:text-gray-300 hover:text-[#8245ec] dark:hover:text-[#8245ec] transition-colors'
                >
                    <FaLinkedin size={24} />
                </a>
                <button onClick={handleThemeSwitch} className="text-gray-700 dark:text-gray-300 hover:text-[#8245ec] ml-2 outline-none transition-colors">
                  {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
                </button>
            </div>
            {/*mobile menu icons */}
            <div className='md:hidden'>
                {isOpen ? (
                    <FiX 
                    className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <FiMenu
                    className="text-3xl text-[#8245ec] cursor-pointer"
                    onClick={() => setIsOpen(true)}
                    />
                )}
            </div>
        </div>
        {/*mobile menu items */}
        {isOpen && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-10/12 bg-white/95 dark:bg-[#050414]/90 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden transition-colors">
                <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 dark:text-gray-300">
                {menuItems.map((item) => (
                <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec] font-bold" : ""
                }`}
                >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
                </li>
            ))}
            <li>
            <div className="flex space-x-4 items-center">
              <a
                href="https://github.com/Saurabhsathawane17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-sathawane"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8245ec] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <button onClick={handleThemeSwitch} className="hover:text-[#8245ec] outline-none transition-colors">
                {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
              </button>
            </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar