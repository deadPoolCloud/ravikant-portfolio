import React, { useState, useEffect, useRef } from 'react';
import profileImage from './profilepic/new.png';
import homeback from './profilepic/homebg.jpg';
import { Home, User, Briefcase, Code, Award } from 'lucide-react';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const sections = [
    { id: 'home', ref: homeRef },
    { id: 'about', ref: aboutRef },
    { id: 'experience', ref: experienceRef },
    { id: 'skills', ref: skillsRef },
    { id: 'projects', ref: projectsRef },
  ];

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine the active section
      sections.forEach((section) => {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Navigation Button Component
  const NavButton = ({ icon: Icon, label, refToScroll, isActive }) => (
    <button
      className={`flex items-center p-2 rounded-lg transition-all ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white text-gray-300'
        }`}
      onClick={() => scrollToSection(refToScroll)}
    >
      <Icon className="mr-2" size={20} />
      <span className="text-base">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-md p-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          {sections.map((section) => (
            <NavButton
              key={section.id}
              icon={section.id === 'home' ? Home : section.id === 'about' ? User : section.id === 'experience' ? Briefcase : section.id === 'skills' ? Code : Award}
              label={section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              refToScroll={section.ref}
              isActive={activeSection === section.id}
            />
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <div 
  ref={homeRef} 
  className="min-h-screen flex items-center justify-center px-4" 
  style={{ 
    backgroundImage: `url(${homeback})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
  }}
>
  <div className="text-center max-w-2xl mx-auto p-6">
    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
      Ravikant Pathak
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-300">
      QA Engineer
    </h2>
    <p className="text-white mb-4 text-base md:text-lg leading-relaxed">
      With 2 years of experience in ensuring seamless software functionality, 
      I specialize in functional, regression, and UI testing. My approach combines 
      meticulous manual testing with automation techniques to deliver robust 
      and high-performing applications.
    </p>
  </div>
</div>



<div ref={aboutRef} className="min-h-screen bg-gray-900 p-8">
  <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
  <div className="flex flex-col md:flex-row gap-8">
    <div className="md:w-1/2">
      <p className="text-gray-300 mb-4">
        I am a dedicated professional with 2 years of experience in software quality assurance, focusing on functional, regression, and UI testing. 
        My expertise lies in leveraging manual and automation testing techniques to ensure the robustness and reliability of applications. 
        I have contributed to the success of multiple projects, including AI-powered productivity apps and real estate loan processing systems.
      </p>
      <p className="text-gray-300 mb-4">
        My approach prioritizes efficiency and attention to detail, ensuring seamless user experiences while adhering to industry standards. 
        With a passion for continuous learning, I stay updated on the latest trends and tools in quality assurance and software testing.
      </p>
      <p className="text-gray-300 mb-4">
        Beyond my professional life, I enjoy exploring new technologies, solving puzzles, and contributing to projects that make a difference.
      </p>

      {/* Education Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
        <p className="text-gray-300 text-base md:text-lg mb-2">
          B.Tech in Mechanical Engineering | Coochbehar Government Engineering College, 2018 - 2022
        </p>
        <p className="text-gray-300 text-base md:text-lg mb-4">CGPA: 8.65</p>
        <p className="text-gray-300 text-base md:text-lg">
          Despite a mechanical engineering background, I transitioned to QA, applying my analytical problem-solving skills to software testing and automation.
        </p>
      </div>
    </div>
    <div className="md:w-1/2">
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-[80%] h-[90%] object-cover rounded-lg"
        style={{ objectFit: 'cover' }} 
      />
    </div>
  </div>
</div>






      <div ref={experienceRef} className="min-h-screen bg-gray-800 p-8">
        <h2 className="text-4xl font-bold text-white mb-6">Work Experience</h2>
        <p className="text-gray-300">Details about work experience go here.</p>
      </div>

      <div ref={skillsRef} className="min-h-screen bg-gray-900 p-8">
        <h2 className="text-4xl font-bold text-white mb-6">Skills</h2>
        <ul className="text-gray-300">
          <li>Manual Testing</li>
          <li>Test Automation</li>
        </ul>
      </div>

      <div ref={projectsRef} className="min-h-screen bg-gray-800 p-8">
        <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>
        <p className="text-gray-300">Details about projects go here.</p>
      </div>
    </div>
  );
}

export default App;
