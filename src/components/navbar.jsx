"use client";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${
      darkMode 
        ? "bg-black/80 backdrop-blur-md border-white/10" 
        : "bg-white/80 backdrop-blur-md border-black/10"
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
        
        {/* LOGO - Flips Black/White */}
        <h1 className={`font-syne font-black text-3xl tracking-tighter uppercase transition-colors duration-700 ${
          darkMode ? "text-white" : "text-black"
        }`}>
          Christian<span className="opacity-50">.</span>
        </h1>

        {/* NAV LINKS - Flip Black/White */}
        <ul className="hidden md:flex gap-10 items-center font-syne font-bold text-xs tracking-[0.2em]">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setActiveSection(item.name.toLowerCase())}
                className={`transition-all duration-300 uppercase ${
                  darkMode 
                    ? activeSection === item.name.toLowerCase() ? "text-white border-b border-white" : "text-gray-500 hover:text-white"
                    : activeSection === item.name.toLowerCase() ? "text-black border-b border-black" : "text-gray-400 hover:text-black"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* YIN YANG TOGGLE BUTTON */}
        <button
          onClick={toggleDarkMode}
          className={`
            px-5 py-2 rounded-full font-syne font-bold text-xs transition-all duration-500 border-2
            ${darkMode
              ? "bg-white text-black border-white hover:bg-black hover:text-white"
              : "bg-black text-white border-black hover:bg-white hover:text-black"
            }
          `}
        >
          {darkMode ? "LIGHT" : "DARK"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;