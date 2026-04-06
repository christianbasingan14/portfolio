import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import { supabase } from './supabaseClient';
import ContactForm from "./components/ContactForm";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [skills, setSkills] = useState([]); // State to hold DB skills

  // 1. Initialize AOS Animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  // 2. Handle Dark Mode Class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // 3. Fetch Skills and Test Connection
  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from('skills').select('*');
      if (error) {
        console.error("Supabase Error:", error.message);
      } else {
        console.log("Supabase Connected! Data:", data);
        setSkills(data); // Store the objects from DB
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className={`transition-all duration-700 min-h-screen font-inter ${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    }`}>
      
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="text-center z-10 px-4">
          <h1 data-aos="zoom-out" className="font-syne text-7xl md:text-9xl font-extrabold uppercase tracking-tighter leading-none">
            Christian. <br /> 
          </h1>
          <p data-aos="fade-up" data-aos-delay="300" className="mt-6 text-lg md:text-xl uppercase tracking-[0.3em] opacity-70">
              Creative Developer & UI Designer
          </p>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h2 className="font-syne text-5xl font-bold uppercase mb-6">I am Christian.</h2>
          <p className="text-lg leading-relaxed opacity-80">
            I am a Ojt Intern and Aspiring to be an <span className="font-bold">Front End Developer</span> and <span className="font-bold">UI Designer</span>.
            Like Yin and Yang, a great website needs the structure of clean code and the fluidity of bold design. 
          </p>
        </div>
        
        <div data-aos="fade-left" className="relative flex justify-center items-center">
            <div className={`absolute w-72 h-72 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
            <img 
              src="/christian-Photoroom.png" 
              alt="Christian" 
              className="relative z-10 w-full max-w-md grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
            />
        </div>
      </section>

      {/* --- SKILLS SECTION (Now Dynamic) --- */}
      <section id="skills" className={`py-24 px-6 md:px-20 ${darkMode ? 'bg-zinc-900' : 'bg-gray-100'} transition-colors`}>
        <h2 data-aos="fade-down" className="font-syne text-center text-4xl font-bold uppercase mb-16 tracking-widest">Mastered Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.length > 0 ? (
            skills.map((skill, i) => (
              <div key={skill.id} data-aos="flip-up" data-aos-delay={i * 100} className={`p-8 border ${darkMode ? 'border-zinc-700 hover:bg-white hover:text-black' : 'border-gray-300 hover:bg-black hover:text-white'} transition-all cursor-default text-center font-syne font-bold uppercase`}>
                {skill.name}
              </div>
            ))
          ) : (
            <p className="col-span-full text-center opacity-50">Loading tools from database...</p>
          )}
        </div>
      </section>

      {/* --- FOOTER & CONTACT FORM --- */}
      <footer id="contact" className={`py-20 text-center transition-colors ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <h2 data-aos="zoom-in" className="font-syne text-6xl md:text-8xl font-black uppercase tracking-tighter">Let's Talk</h2>
        
        {/* The Contact Form Component */}
        <ContactForm darkMode={darkMode} />

        <p className="mt-12 font-inter uppercase tracking-widest font-bold">Christianbasingan14@gmail.com</p>
        
        <div className="mt-12 flex justify-center gap-8 font-syne font-bold text-sm">
          <a href="https://www.instagram.com/chiyannn_14/" target="_blank" rel="noreferrer" className="hover:line-through transition-all">INSTAGRAM</a>
          <a href="https://github.com/christianbasingan14" target="_blank" rel="noreferrer" className="hover:line-through transition-all">GITHUB</a>
          <a href="https://www.facebook.com/worrystitch" target="_blank" rel="noreferrer" className="hover:line-through transition-all">FACEBOOK</a>
        </div>
        
        <p className="mt-10 text-[10px] opacity-50 uppercase tracking-[0.5em]">© 2026 Christian • FRONT END DEVELOPER</p>
      </footer>
    </div>
  );
};

export default App;