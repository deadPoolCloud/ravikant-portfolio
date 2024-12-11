import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Award } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const NavButton = ({ icon: Icon, section, label }) => (
    <button 
      className={`flex items-center p-3 rounded-lg transition-all transform ${
        activeSection === section 
          ? 'bg-blue-700 text-white scale-105'
          : 'hover:bg-blue-600 hover:text-white text-gray-300'
      }`}
      onClick={() => setActiveSection(section)}
    >
      <Icon className="mr-3" size={24} />
      <span className="text-lg">{label}</span>
    </button>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center p-8 animate-fadeIn">
            <h1 className="text-5xl font-extrabold mb-6 text-white">Ravikant Pathak</h1>
            <p className="text-2xl text-gray-400 mb-6">QA Engineer | Test Automation Specialist</p>
            <div className="max-w-3xl mx-auto text-gray-300">
              <p className="text-lg">
                I’m a passionate QA Engineer with over 1.5 years of experience in web and mobile testing. 
                Specializing in functional, regression, and UI testing for AI-powered applications. 
                My focus is on creating high-quality, automated testing solutions that drive product excellence.
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-6 flex-wrap">
              <a 
                href="mailto:ravikantpathak489@gmail.com" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
              >
                Contact Me
              </a>
              <a 
                href="https://linkedin.com/in/ravikantpathak489" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Professional Profile</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>• QA Engineer with expertise in web and mobile testing</li>
                  <li>• Strong focus on test automation and quality assurance</li>
                  <li>• Experienced with AI-powered application testing</li>
                  <li>• Proficient in tools such as Selenium, Postman, and Jenkins</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <p className="font-medium text-gray-400">B.Tech, Mechanical Engineering</p>
                <p className="text-gray-500">Coochbehar Government Engineering College</p>
                <p className="text-gray-500">2018 - 2022 | CGPA: 8.65</p>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-extrabold mb-6">Work Experience</h2>
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-blue-400">QA Tester | Globsyn Business School LLP</h3>
                <p className="text-gray-400 mb-4">07/2024 - Present | Kolkata</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Designed and implemented automated testing frameworks using Selenium WebDriver</li>
                  <li>Reduced test script development time by 30% through reusable components</li>
                  <li>Enhanced test coverage via both API and UI automation</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-blue-400">Manual Tester | Idreambiz</h3>
                <p className="text-gray-400 mb-4">03/2023 - 07/2024 | Noida</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Developed test automation frameworks for web applications</li>
                  <li>Maintained 99% API uptime through comprehensive API testing</li>
                  <li>Identified and documented over 1,200 defects</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-extrabold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Testing Skills</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Manual Testing</li>
                  <li>• Functional & Regression Testing</li>
                  <li>• UI/UX Testing</li>
                  <li>• Performance & Load Testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Selenium</li>
                  <li>• Java</li>
                  <li>• Postman</li>
                  <li>• Jenkins</li>
                  <li>• Git & GitHub</li>
                  <li>• JIRA</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Test Case Design</li>
                  <li>• Communication & Teamwork</li>
                  <li>• Problem Solving</li>
                  <li>• Continuous Integration</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-extrabold mb-6">Featured Projects</h2>
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-blue-400">Interactive Virtual Tutor (IVT)</h3>
                <p className="text-gray-400 mb-4">AI-driven Learning Platform</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Built end-to-end test automation framework</li>
                  <li>Created reusable test suites with page objects</li>
                  <li>Technologies: Selenium, Java, TestNG, Jenkins, JIRA</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-blue-400">Meeting500mg</h3>
                <p className="text-gray-400 mb-4">Meeting Management & Chat Application</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Implemented comprehensive test automation framework</li>
                  <li>Conducted extensive API and UI testing</li>
                  <li>Technologies: Selenium, Java, Postman, REST Assured</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-blue-400">Borrower Portal</h3>
                <p className="text-gray-400 mb-4">Real Estate Loan Processing System</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  <li>Developed automated test suites for loan workflow</li>
                  <li>Focused on data validation and feature automation</li>
                  <li>Technologies: Selenium, JIRA, Git, Postman</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 overflow-x-hidden">
      <nav className="bg-gray-800 shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-3xl font-bold text-blue-500 mb-4 md:mb-0">Ravikant Pathak</div>
          <div className="space-x-4 flex flex-wrap justify-center">
            <NavButton icon={Home} section="home" label="Home" />
            <NavButton icon={User} section="about" label="About" />
            <NavButton icon={Briefcase} section="experience" label="Experience" />
            <NavButton icon={Code} section="skills" label="Skills" />
            <NavButton icon={Award} section="projects" label="Projects" />
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto">
        {renderSection()}
      </main>
      <footer className="bg-gray-800 p-6 text-center">
        <p className="text-gray-400">© 2024 Ravikant Pathak. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
