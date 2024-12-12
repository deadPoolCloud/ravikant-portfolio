import React, { useState, useEffect } from 'react';
import profileImage from './profilepic/new.png';
import homeback from './profilepic/homebg.jpg';
import homebackPhone from './profilepic/phoneHome.jpg';
import {
  Home, User, Briefcase, Code, Award
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Navigation Button Component for Mobile
  const MobileNavButton = ({ icon: Icon, section, label }) => (
    <button
      className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all 
        ${activeSection === section
          ? 'bg-blue-700 text-white'
          : 'hover:bg-blue-600 hover:text-white text-gray-300'
        }`}
      onClick={() => setActiveSection(section)}
    >
      <Icon size={20} className="mb-1" />
      <span className="text-xs">{label}</span>
    </button>
  );

  // Navigation Button Component for Desktop
  const DesktopNavButton = ({ icon: Icon, section, label }) => (
    <button
      className={`flex items-center p-2 rounded-lg transition-all 
        ${activeSection === section
          ? 'bg-blue-700 text-white'
          : 'hover:bg-blue-600 hover:text-white text-gray-300'
        }`}
      onClick={() => setActiveSection(section)}
    >
      <Icon className="mr-2" size={20} />
      <span className="text-base">{label}</span>
    </button>
  );

  // Render Mobile Navigation
  const renderMobileNavigation = () => (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-1 p-2">
          <MobileNavButton icon={Home} section="home" label="Home" />
          <MobileNavButton icon={User} section="about" label="About" />
          <MobileNavButton icon={Briefcase} section="experience" label="Exp" />
          <MobileNavButton icon={Code} section="skills" label="Skills" />
          <MobileNavButton icon={Award} section="projects" label="Projects" />
        </div>
      </div>
    </nav>
  );

  // Render Desktop Navigation
  const renderDesktopNavigation = () => (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4 flex">
          <DesktopNavButton icon={Home} section="home" label="Home" />
          <DesktopNavButton icon={User} section="about" label="About" />
          <DesktopNavButton icon={Briefcase} section="experience" label="Experience" />
          <DesktopNavButton icon={Code} section="skills" label="Skills" />
          <DesktopNavButton icon={Award} section="projects" label="Projects" />
        </div>
      </div>
    </nav>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div
            className="about-section"
            style={{
              backgroundImage: `url(${homeback})`, // This is a fallback; media queries handle the rest
            }}
          >
            <div className="about-section-overlay"></div>
            <div className="about-section-content">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ravikant Pathak</h1>
              <p className="text-white mb-4 text-base md:text-lg leading-relaxed">
                I'm a QA Engineer with 2 years of experience in ensuring quality for cutting-edge applications, 
                specializing in functional, regression, and UI testing with automated solutions.
              </p>
              <p className="text-white mb-4 text-base md:text-lg leading-relaxed">
                Skilled in Selenium, TestNG, and Jenkins, I collaborate with cross-functional teams to 
                deliver robust software solutions that exceed user expectations.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href="mailto:ravikantpathak489@gmail.com"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all"
                >
                  Contact Me
                </a>
                <a
                  href="https://linkedin.com/in/ravikantpathak489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        );

        case 'about':
          return (
            <div className="about-section">
              <div className="container mx-auto p-4 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left side: Professional Profile */}
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
                      <p className="text-base md:text-lg text-gray-300 mb-4">
                        As a QA Engineer, I specialize in ensuring software quality through strategic testing and automation.
                      </p>
                      <p className="text-base md:text-lg text-gray-300 mb-4">
                        I focus on building robust automation solutions that streamline testing processes, minimize errors, and integrate seamlessly with CI/CD pipelines.
                      </p>
                    </div>
                    {/* Display Image */}
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Right side: Education & Training */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Education</h3>
                    <p className="text-base md:text-lg text-gray-300 mb-2">
                      B.Tech in Mechanical Engineering | Coochbehar Government Engineering College, 2018 - 2022
                    </p>
                    <p className="text-gray-300 text-base md:text-lg mb-4">CGPA: 8.65</p>
                    <p className="text-gray-300 text-base md:text-lg mb-4">
                      Despite a mechanical engineering background, I transitioned to QA, applying my analytical problem-solving skills to software testing and automation.
                    </p>
        
                    <h3 className="text-2xl font-bold mb-4">Training & Certifications</h3>
                    <ul className="list-disc pl-6 text-base md:text-lg text-gray-300 mb-4">
                      <li className="mb-2">Certified in Advanced Selenium Automation</li>
                      <li className="mb-2">ISTQB Certified Tester – Foundation Level</li>
                      <li className="mb-2">AWS Certified Cloud Practitioner (planned)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );

      case 'experience':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-bold mb-6">Work Experience</h2>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">QA Tester - Globsyn Business School LLP</h3>
              <p className="text-lg text-gray-300 mb-4">
                <strong>07/2024 - Present, Sec 5, Kolkata</strong>
                <br />
                Globsyn Business School is a leading educational institution focusing on innovative learning solutions and AI-driven educational platforms.
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-300">
                <li className="mb-2">Designed and implemented automated testing frameworks using Selenium WebDriver, incorporating best practices for maintainability and scalability.</li>
                <li className="mb-2">Developed reusable test components and page object models, resulting in 30% faster test script development.</li>
                <li className="mb-2">Created comprehensive testing strategies combining automated and manual testing, reducing testing cycles by 30%.</li>
                <li className="mb-2">Enhanced test coverage through API and UI automation, resulting in 20% reduction in production bug reports.</li>
                <li className="mb-2">Implemented data-driven testing frameworks using Selenium with Java, improving test efficiency and maintenance.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">Manual Tester - Idreambiz</h3>
              <p className="text-lg text-gray-300 mb-4">
                <strong>03/2023 - 07/2024, Sec 142, Noida</strong>
                <br />
                iDreamBiz is a technology solutions provider specializing in digital transformation, software development, and cloud-based services.
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-300">
                <li className="mb-2">Collaborated with cross-functional teams to perform manual functional testing for web applications, focusing on usability and performance across different browsers and devices.</li>
                <li className="mb-2">Designed and executed test cases for complex web applications, ensuring all features were fully tested from a user perspective.</li>
                <li className="mb-2">Created and maintained detailed bug reports using JIRA, tracking them through the entire lifecycle, from discovery to resolution, ensuring timely fixes and updates.</li>
                <li className="mb-2">Worked closely with developers to reproduce defects, identify root causes, and propose possible solutions for efficient bug resolution.</li>
                <li className="mb-2">Performed regression testing on new software releases, identifying issues and preventing production defects from reaching end-users.</li>
                <li className="mb-2">Participated in Agile ceremonies, including daily stand-ups, sprint planning, and retrospectives, contributing to the smooth and efficient development cycle.</li>
                <li className="mb-2">Tested integration points and APIs, ensuring the seamless functionality of web services, databases, and third-party services within the platform.</li>
                <li className="mb-2">Provided feedback and suggestions on UI/UX improvements, helping to refine the user interface based on user testing and feedback.</li>
                <li className="mb-2">Supported user acceptance testing (UAT) for key clients, ensuring that software met all business and functional requirements before final deployment.</li>
                <li className="mb-2">Contributed to the creation of test documentation, including test plans, test cases, and test data management, improving future testing efficiency.</li>
              </ul>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-bold mb-6">Skills</h2>
            <ul className="list-disc pl-6 text-lg text-gray-300">
              <li className="mb-2">Manual Testing (Functional, Regression, and UI Testing)</li>
              <li className="mb-2">Test Automation (Selenium WebDriver, TestNG, JUnit)</li>
              <li className="mb-2">Performance Testing (JMeter)</li>
              <li className="mb-2">API Testing (Postman, Rest Assured)</li>
              <li className="mb-2">Continuous Integration (Jenkins)</li>
              <li className="mb-2">Version Control (Git, GitHub)</li>
              <li className="mb-2">Programming Languages (Java, Python)</li>
              <li className="mb-2">Defect Tracking and Reporting (JIRA)</li>
              <li className="mb-2">Database Testing (MySQL, SQL Queries)</li>
              <li className="mb-2">Cloud Testing (AWS, Docker)</li>
              <li className="mb-2">Test Reporting (Allure, TestNG Reports)</li>
              <li className="mb-2">Automation Framework Development (Page Object Model, Data-Driven, Keyword-Driven)</li>
              <li className="mb-2">Agile Methodology (Scrum, Kanban)</li>
            </ul>
          </div>
        );

      case 'projects':
        return (
          <div className="p-8 text-white">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <ul className="list-disc pl-6 text-lg text-gray-300">
              <li className="mb-4">
                <strong>Interactive Virtual Tutor (IVT)</strong> - <em>QA Tester</em>
                <p className="mt-2">
                  Contributed to the QA process for Globsyn Business School's AI-driven learning platform, which provides personalized education experiences for students.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Built a comprehensive end-to-end test automation framework using Selenium WebDriver, ensuring efficient testing workflows.</li>
                  <li>Developed reusable page objects and test suites for web interfaces, significantly improving testing consistency and reusability.</li>
                  <li>Reduced regression testing time by 50% through automation, accelerating release cycles and improving platform reliability.</li>
                  <li>Collaborated with cross-functional teams using Jenkins for continuous integration and JIRA for issue tracking.</li>
                  <li>Performed API testing using Postman, ensuring smooth interaction between system components.</li>
                  <li>Technologies: Selenium WebDriver, TestNG, Jenkins, JIRA, Java, Maven, Postman.</li>
                </ul>
              </li>

              <li className="mb-4">
                <strong>GBSO Portal</strong> - <em>QA Tester</em>
                <p className="mt-2">
                  Played a critical role in preparing the GBSO portal for its release by November 2024, ensuring a smooth user experience and complete functionality.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Addressed key technical challenges, including SSL configuration and the implementation of course lock/unlock features.</li>
                  <li>Ensured all essential features were tested, validated, and included as part of the final release.</li>
                  <li>Performed thorough regression and functional testing to maintain application stability across updates.</li>
                  <li>Collaborated effectively with developers and stakeholders using JIRA to manage issues and prioritize resolutions.</li>
                  <li>Technologies: Selenium WebDriver, Java, SQL, JIRA.</li>
                </ul>
              </li>




              <li className="mb-4">
                <strong>Meeting500mg</strong> - <em>QA Tester</em> (05/2023 - 07/2024)
                <p className="mt-2">
                  Contributed to the QA process for Meeting500mg, a Meeting Management and Chat Application designed as an alternative to platforms like Flock, Zoom, Skype, and Slack. Played a key role in ensuring application stability and improving the overall user experience.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Designed and implemented a robust test automation framework using Selenium, covering core functionalities.</li>
                  <li>Performed comprehensive functional, regression, and performance testing to identify and resolve issues efficiently.</li>
                  <li>Collaborated closely with development teams via JIRA and Git for bug tracking and version control.</li>
                  <li>Validated back-end integrations through API testing using Postman and Rest-assured.</li>
                  <li>Improved application stability by reducing defect rates by 25% and cutting testing cycle times by 30% through automation.</li>
                </ul>
              </li>

              <li className="mb-4">
                <strong>Borrower Portal</strong> - <em>QA Tester</em> (03/2023 - 07/2024)
                <p className="mt-2">
                  Played a vital role in the QA efforts for Borrower Portal, a real estate loan processing system designed to streamline interactions between borrowers and loan approvers.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Developed and maintained automated test suites using Selenium, focusing on data validation and key feature automation.</li>
                  <li>Performed in-depth regression testing to ensure application stability during updates and releases.</li>
                  <li>Used Postman for API testing to validate seamless back-end communication and data accuracy.</li>
                  <li>Collaborated effectively with cross-functional teams using JIRA and Git for issue tracking and resolution.</li>
                  <li>Enhanced the application's quality by identifying and resolving critical defects, ensuring a smooth user experience.</li>
                </ul>
              </li>

            </ul>
          </div>
        );



      // Add similar updates for 'experience', 'skills', and 'projects'
      default:
        return null;
    }
  };


  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-300 flex flex-col overflow-x-hidden"
      style={{
        width: '100vw',
        maxWidth: '100%',
        overscrollBehaviorX: 'none'
      }}
    >
      {/* Conditional Navigation Rendering */}
      {isMobile ? (
        <>
          {renderMobileNavigation()}
          <div className="flex-grow overflow-y-auto pt-20">
            {renderSection()}
          </div>
        </>
      ) : (
        <>
          {renderDesktopNavigation()}
          <main className="flex-grow container mx-auto">
            {renderSection()}
          </main>
        </>
      )}

      <footer className="bg-gray-800 p-4 text-center">
        <p className="text-gray-400 text-sm">© 2024 Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
