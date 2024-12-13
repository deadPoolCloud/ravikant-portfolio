import React, { useState, useEffect, useRef } from 'react';
import profileImage from './profilepic/new.png';
import homeback from './profilepic/phoneHome.jpg';
import { Home, User, Briefcase, Code, Award } from 'lucide-react';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close menu after selection
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

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
  const NavButton = ({ icon: Icon, label, refToScroll, isActive, onClick }) => (
    <button
      className={`flex items-center p-2 rounded-lg transition-all w-full sm:w-auto text-left sm:text-center 
        ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-600 hover:text-white text-gray-300'}`}
      onClick={() => {
        scrollToSection(refToScroll);
        onClick && onClick();
      }}
    >
      <Icon className="mr-2" size={20} />
      <span className="text-base">{label}</span>
    </button>
  );

  // Mobile Menu Toggle
  const MobileMenuToggle = () => (
    <button
      className="md:hidden fixed top-4 right-4 z-60 bg-gray-700 p-2 rounded-md"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className="block w-5 h-0.5 bg-white mb-1"></span>
      <span className="block w-5 h-0.5 bg-white mb-1"></span>
      <span className="block w-5 h-0.5 bg-white"></span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Mobile Menu Toggle */}
      {isMobile && <MobileMenuToggle />}

      {/* Navigation Bar */}
      <nav className={`
        bg-gray-800 shadow-md fixed w-full z-50 transition-all duration-300
        ${isMobile
          ? `${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
             fixed top-0 right-0 w-64 h-full p-4 flex flex-col`
          : 'p-4 flex justify-center items-center'
        }
      `}>
        <div className={`
          container mx-auto 
          ${isMobile
            ? 'flex flex-col space-y-4'
            : 'flex justify-center items-center space-x-4'
          }
        `}>
          {sections.map((section) => (
            <NavButton
              key={section.id}
              icon={section.id === 'home' ? Home :
                section.id === 'about' ? User :
                  section.id === 'experience' ? Briefcase :
                    section.id === 'skills' ? Code : Award}
              label={section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              refToScroll={section.ref}
              isActive={activeSection === section.id}
              onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
            />
          ))}
        </div>
      </nav>

      {/* Rest of the existing content remains the same, with slight mobile adjustments */}
      {/* Home Section */}
      <div
  ref={homeRef}
  className="min-h-screen flex items-center justify-center px-4 pt-16 bg-custom bg-cover bg-center"
  style={{
    backgroundImage: `url(${homeback})`,
  }}
>
  <div className="text-center max-w-2xl mx-auto p-6 bg-black bg-opacity-50 rounded-lg">
    <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
      Ravikant Pathak
    </h1>
    <h2 className="text-lg md:text-2xl font-semibold mb-4 text-gray-300">
      Software Tester and Automation Expert
    </h2>
    <p className="text-white mb-4 text-sm md:text-lg leading-relaxed">
      With 2 years of experience in ensuring seamless software functionality,
      I specialize in functional, regression, and UI testing. My approach combines
      meticulous manual testing with automation techniques to deliver robust
      and high-performing applications.
    </p>
  </div>
</div>



      {/* About Section */}
      <div ref={aboutRef} className="min-h-screen bg-gray-1500 p-4 md:p-8 pt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="w-full md:w-1/2 px-4">
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              I am a dedicated professional with 2 years of experience in software quality assurance, focusing on functional, regression, and UI testing.
              My expertise lies in leveraging manual and automation testing techniques to ensure the robustness and reliability of applications.
              I have contributed to the success of multiple projects, including AI-powered productivity apps and real estate loan processing systems.
            </p>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              My approach prioritizes efficiency and attention to detail, ensuring seamless user experiences while adhering to industry standards.
              With a passion for continuous learning, I stay updated on the latest trends and tools in quality assurance and software testing.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
            <img
              src={profileImage}
              alt="Profile"
              className="w- md:w-80 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Remaining sections with similar mobile-friendly adjustments */}
      {/* Experience Section */}
      <div ref={experienceRef} className="min-h-screen bg-gray-800 p-4 md:p-8 pt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Work Experience</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* First Job Experience */}
          <div className="bg-gray-700 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              Software Quality Assurance Engineer
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-2">
              Persistent Systems | June 2022 - Present
            </p>
            <ul className="list-disc list-inside text-gray-300 text-xs md:text-sm space-y-2">
              <li>Developed and executed comprehensive test plans for AI-powered productivity applications</li>
              <li>Implemented automated testing scripts using Selenium and TestNG, improving test coverage by 40%</li>
              <li>Collaborated with cross-functional teams to identify and resolve software defects</li>
              <li>Conducted thorough regression and functional testing for multiple software releases</li>
            </ul>
          </div>

          {/* Second Job Experience */}
          <div className="bg-gray-700 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              Junior QA Analyst
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-2">
              Techolution | Jan 2022 - May 2022
            </p>
            <ul className="list-disc list-inside text-gray-300 text-xs md:text-sm space-y-2">
              <li>Performed manual and automated testing for real estate loan processing systems</li>
              <li>Created detailed bug reports and worked closely with developers to resolve issues</li>
              <li>Developed test cases and test scenarios for various software modules</li>
              <li>Assisted in maintaining and updating test documentation</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div ref={skillsRef} className="min-h-screen bg-gray-900 p-4 md:p-8 pt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Technical Skills</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Testing Skills */}
          <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Testing Skills</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-300 text-xs md:text-sm">
              <span>Manual Testing</span>
              <span>Functional Testing</span>
              <span>Regression Testing</span>
              <span>UI Testing</span>
              <span>API Testing</span>
              <span>Performance Testing</span>
            </div>
          </div>

          {/* Automation Tools */}
          <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Automation Tools</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-300 text-xs md:text-sm">
              <span>Selenium WebDriver</span>
              <span>TestNG</span>
              <span>JUnit</span>
              <span>Cucumber</span>
              <span>Postman</span>
              <span>SoapUI</span>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Programming Languages</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-300 text-xs md:text-sm">
              <span>Java</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Additional Skills</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-300 text-xs md:text-sm">
              <span>Git</span>
              <span>JIRA</span>
              <span>Jenkins</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div ref={projectsRef} className="min-h-screen bg-gray-800 p-4 md:p-8 pt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-center">Projects</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Project 1 */}
          <div className="bg-gray-700 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              Automated Testing Framework
            </h3>
            <p className="text-gray-300 text-xs md:text-sm mb-4">
              Developed a comprehensive test automation framework using Selenium WebDriver and TestNG for end-to-end testing of web applications.
            </p>
            <div className="flex flex-wrap gap-2 text-gray-300">
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Java</span>
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Selenium</span>
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">TestNG</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              API Testing Suite
            </h3>
            <p className="text-gray-300 text-xs md:text-sm mb-4">
              Created an automated API testing suite using Postman and Newman for validating RESTful web services performance and reliability.
            </p>
            <div className="flex flex-wrap gap-2 text-gray-300">
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Postman</span>
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Newman</span>
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">JSON</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-700 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              Performance Testing Dashboard
            </h3>
            <p className="text-gray-300 text-xs md:text-sm mb-4">
              Developed a performance testing dashboard using JMeter to monitor and analyze application response times and resource utilization.
            </p>
            <div className="flex flex-wrap gap-2 text-gray-300">
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">JMeter</span>
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Performance Testing</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-700 rounded-lg p-4 md:p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
              Mobile App Testing Framework
            </h3>
            <p className="text-gray-300 text-xs md:text-sm mb-4">
              Implemented an automated mobile app testing framework using Appium for cross-platform mobile application testing.
            </p>
            <div className="flex flex-wrap gap-2 text-gray-300">
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Appium</span>
              <span className="bg-gray-600 px-2 py-1 rounded text-xs">Mobile Testing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;