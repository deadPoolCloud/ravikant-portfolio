import React, { useState } from 'react';
import { Home, User, Briefcase, Code, Award } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const NavButton = ({ icon: Icon, section, label }) => (
    <button 
      className={`flex items-center p-2 rounded-md transition-colors ${
        activeSection === section 
          ? 'bg-blue-600 text-white' 
          : 'hover:bg-blue-100 text-gray-700'
      }`}
      onClick={() => setActiveSection(section)}
    >
      <Icon className="mr-2" size={20} />
      {label}
    </button>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Ravikant Pathak</h1>
            <p className="text-xl text-gray-600 mb-6">QA Engineer | Test Automation Specialist</p>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-800">
                A dedicated QA professional with over 1.5 years of experience in web and mobile testing, 
                specializing in functional, regression, and UI testing for AI-powered applications. 
                Committed to delivering reliable, user-centered web solutions through comprehensive 
                testing strategies and automation frameworks.
              </p>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <a 
                href="mailto:ravikantpathak489@gmail.com" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Contact Me
              </a>
              <a 
                href="https://linkedin.com/in/ravikantpathak489" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Profile</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• QA Engineer with expertise in web and mobile testing</li>
                  <li>• Specialization in functional and regression testing</li>
                  <li>• Strong focus on test automation and quality assurance</li>
                  <li>• Proficient in AI-powered application testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <p className="font-medium">B.Tech, Mechanical Engineering</p>
                <p className="text-gray-600">Coochbehar Government Engineering College</p>
                <p className="text-gray-600">2018 - 2022 | CGPA: 8.65</p>
              </div>
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-xl font-semibold">QA Tester | Globsyn Business School LLP</h3>
                <p className="text-gray-600 mb-4">07/2024 - Present | Kolkata</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <li>Designed automated testing frameworks using Selenium WebDriver</li>
                  <li>Developed reusable test components, reducing test script development by 30%</li>
                  <li>Enhanced test coverage through API and UI automation</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-xl font-semibold">Manual Tester | Idreambiz</h3>
                <p className="text-gray-600 mb-4">03/2023 - 07/2024 | Noida</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <li>Implemented automated testing frameworks for web applications</li>
                  <li>Conducted API testing, maintaining 99% API uptime</li>
                  <li>Identified and documented 1,200+ defects</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Testing Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manual Testing</li>
                  <li>• Functional Testing</li>
                  <li>• Regression Testing</li>
                  <li>• UI/UX Testing</li>
                  <li>• Performance Testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Selenium</li>
                  <li>• Java</li>
                  <li>• Postman</li>
                  <li>• REST Assured</li>
                  <li>• Jenkins</li>
                  <li>• JIRA</li>
                  <li>• Git</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Test Case Design</li>
                  <li>• Defect Management</li>
                  <li>• Continuous Integration</li>
                  <li>• Problem Solving</li>
                  <li>• Communication</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-xl font-semibold">Interactive Virtual Tutor (IVT)</h3>
                <p className="text-gray-600 mb-4">AI-driven Learning Platform</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <li>Built end-to-end test automation framework</li>
                  <li>Created test suites with reusable page objects</li>
                  <li>Technologies: Selenium, Java, TestNG, Jenkins, JIRA</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-xl font-semibold">Meeting500mg</h3>
                <p className="text-gray-600 mb-4">Meeting Management & Chat Application</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <li>Established comprehensive test automation framework</li>
                  <li>Conducted extensive API and UI testing</li>
                  <li>Technologies: Selenium, Java, Postman, REST Assured</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-md">
                <h3 className="text-xl font-semibold">Borrower Portal</h3>
                <p className="text-gray-600 mb-4">Real Estate Loan Processing System</p>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Ravikant Pathak</div>
          <div className="space-x-4 flex">
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
      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">© 2024 Ravikant Pathak. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
