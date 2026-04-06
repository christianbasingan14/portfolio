import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      darkMode 
        ? "bg-black/80 border-zinc-800 text-white" 
        : "bg-white/80 border-gray-200 text-black"
    } backdrop-blur-md`}>
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="font-syne font-black text-2xl tracking-tighter uppercase">
          CHRISTIAN<span className={darkMode ? "text-white" : "text-black"}>.</span>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-10 font-syne font-bold text-xs uppercase tracking-widest">
          <li><a href="#home" className="hover:opacity-50 transition-opacity">Home</a></li>
          <li><a href="#about" className="hover:opacity-50 transition-opacity">About</a></li>
          <li><a href="#skills" className="hover:opacity-50 transition-opacity">Tools</a></li>
          <li><a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a></li>
        </ul>

        {/* RIGHT SIDE: THEME + BURGER */}
        <div className="flex items-center gap-4">
          {/* THEME TOGGLE (Always Visible) */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? "hover:bg-zinc-800" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* BURGER BUTTON (Mobile Only) */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Slide Down) */}
      <div className={`absolute top-20 left-0 w-full transition-all duration-500 overflow-hidden md:hidden ${
        isOpen ? "max-h-screen border-b" : "max-h-0"
      } ${darkMode ? "bg-black border-zinc-800" : "bg-white border-gray-200"}`}>
        <ul className="flex flex-col items-center py-10 gap-8 font-syne font-bold text-lg uppercase tracking-widest">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Tools</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;