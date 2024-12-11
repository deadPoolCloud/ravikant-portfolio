import React, { useState, useEffect } from 'react';
import { 
  Home, User, Briefcase, Code, Award, Menu, X, 
  Mail, Linkedin, FileText 
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation Button Component
  const NavButton = ({ icon: Icon, section, label }) => (
    <button
      className={`flex items-center p-2 rounded-lg transition-all transform 
        ${activeSection === section
          ? 'bg-blue-700 text-white scale-105'
          : 'hover:bg-blue-600 hover:text-white text-gray-300'
        } 
        ${isMobile ? 'w-full justify-center text-lg py-3' : ''}`}
      onClick={() => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
      }}
    >
      <Icon className="mr-2" size={20} />
      {!isMobile && <span className="text-base">{label}</span>}
    </button>
  );

  // Render Mobile Navigation
  const renderMobileNavigation = () => (
    <div 
      className={`fixed bottom-0 left-0 w-full bg-gray-800 z-50 transition-all duration-300 
        ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="grid grid-cols-5 gap-1 p-2">
        <NavButton icon={Home} section="home" label="Home" />
        <NavButton icon={User} section="about" label="About" />
        <NavButton icon={Briefcase} section="experience" label="Exp" />
        <NavButton icon={Code} section="skills" label="Skills" />
        <NavButton icon={Award} section="projects" label="Projects" />
      </div>
    </div>
  );

  // Render Desktop Navigation
  const renderDesktopNavigation = () => (
    <nav className="bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-500">Ravikant Pathak</div>
        <div className="space-x-4 flex">
          <NavButton icon={Home} section="home" label="Home" />
          <NavButton icon={User} section="about" label="About" />
          <NavButton icon={Briefcase} section="experience" label="Experience" />
          <NavButton icon={Code} section="skills" label="Skills" />
          <NavButton icon={Award} section="projects" label="Projects" />
        </div>
      </div>
    </nav>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="text-center p-6 animate-fadeIn">
            <h1 className="text-4xl font-bold mb-4 text-white">Ravikant Pathak</h1>
            <p
              dir="ltr"
              className="CDt4Ke zfr3Q mb-6"
              style={{
                textAlign: 'justify',
                whiteSpace: 'normal',
                color: '#ffffff',
                fontSize: '13pt',
                lineHeight: '1.6',
              }}
            >
              Hi, I am <span style={{ fontWeight: 'bold', fontSize: '13pt', color: '#ffffff' }}>Ravikant Pathak</span>, a
              <span style={{ fontWeight: 'bold', fontFamily: 'Lato', fontSize: '13pt', color: '#ffffff' }}> QA Engineer </span>
              with 2 years of professional experience in ensuring the quality and reliability of cutting-edge applications,
              including AI-powered platforms. I specialize in functional, regression, and UI testing while delivering automated
              solutions for quality assurance.
            </p>
            <p
              className="CDt4Ke zfr3Q mb-6"
              style={{
                textAlign: 'justify',
                whiteSpace: 'normal',
                color: '#ffffff',
                fontSize: '13pt',
                lineHeight: '1.6',
              }}
            >
              My expertise lies in designing and implementing efficient automated solutions using tools like Selenium, TestNG,
              and Jenkins, streamlining testing processes, and accelerating development cycles while maintaining high standards
              of performance and functionality.
            </p>
            <p
              className="CDt4Ke zfr3Q mb-6"
              style={{
                textAlign: 'justify',
                whiteSpace: 'normal',
                color: '#ffffff',
                fontSize: '13pt',
                lineHeight: '1.6',
              }}
            >
              I am passionate about collaborating with cross-functional teams to identify and resolve critical issues, ensuring
              robust software systems that meet and exceed end-user expectations. Whether it's functional validation, end-to-end
              testing, or ensuring consistent quality across complex workflows, I approach each challenge with a meticulous and
              innovative mindset.
            </p>
            <div className="mt-6 flex justify-center gap-4">
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
        );

      case 'about':
        return (
          <div className="p-8 text-white flex flex-wrap">
            {/* Professional Profile Section (Left Side) */}
            <div className="w-full md:w-1/2 mb-12 pr-8">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
                <p className="text-lg text-gray-300 mb-4">
                  As a dedicated QA Engineer, I specialize in ensuring the quality of both web and mobile applications through comprehensive testing strategies and automation. With expertise in test automation, AI-powered testing, and a focus on delivering high-quality software, I aim to contribute to products that exceed functional and user-experience expectations. My background includes hands-on experience with Selenium, Appium, TestNG, and other automation tools that allow me to build scalable, efficient frameworks.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  I have a passion for creating robust automation frameworks that not only streamline testing processes but also minimize human error, improving efficiency and overall product quality. My approach is rooted in continuous improvement—whether it's automating repetitive test cases or optimizing performance through tools like JMeter. I am well-versed in integrating these automation practices into CI/CD pipelines using Jenkins, ensuring that continuous testing is an integral part of the development lifecycle.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  In addition to my technical skills, I excel in collaborating with cross-functional teams in agile environments, focusing on sprint goals and adapting quickly to project requirements. My experience in AI-driven testing gives me a unique ability to test intelligent features, ensuring they perform as intended under various conditions. Through these efforts, I contribute to delivering software that is not only functional but also performs optimally, providing users with seamless experiences.
                </p>
              </div>
            </div>

            {/* Right Side (Education & Training Section) */}
            <div className="w-full md:w-1/2">
              {/* Education Section */}
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-lg text-gray-300 mb-2">
                B.Tech in Mechanical Engineering | Coochbehar Government Engineering College, 2018 - 2022
              </p>
              <p className="text-gray-300 text-lg mb-4">CGPA: 8.65</p>
              <p className="text-gray-300 text-lg mb-4">
                Although my degree is in Mechanical Engineering, my deep interest in technology and software engineering led me to transition into Quality Assurance. During my academic journey, I honed problem-solving skills that now help me approach testing challenges from a structured, analytical perspective. My coursework and internships allowed me to explore various technical domains, and ultimately, I found my passion in software testing and automation.
              </p>

              {/* Training & Certifications Section */}
              <h3 className="text-2xl font-bold mb-4">Training & Certifications</h3>
              <ul className="list-disc pl-6 text-lg text-gray-300 mb-4">
                <li className="mb-2">Certified in Advanced Selenium Automation</li>
                <li className="mb-2">ISTQB Certified Tester – Foundation Level</li>
                <li className="mb-2">Tricentis Tosca AE1 and AE2 (in progress)</li>
                <li className="mb-2">AWS Certified Cloud Practitioner (planned)</li>
                <li className="mb-2">Certified Jenkins Engineer (planned)</li>
              </ul>
              <p className="text-lg text-gray-300 mb-4">
                In addition to my degree, I have undergone specialized training that has provided me with practical knowledge and skills to excel in the field of software testing. A comprehensive Software Testing course at QSpiders Kolkata has further refined my skills in both manual and automation testing, making me well-equipped to handle real-world testing challenges. The course included hands-on experience with tools like Selenium, TestNG, Postman, and JMeter, covering aspects from test case creation to performance testing and API testing.
              </p>
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
          <div className="flex-grow overflow-y-auto pb-20">
            {renderSection()}
          </div>
          {renderMobileNavigation()}
          <button 
            onClick={toggleMobileMenu} 
            className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full z-50 shadow-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
        <p className="text-gray-400 text-sm">© 2024 Ravikant Pathak. All Rights Reserved.</p>
      </footer>
    </div>
  );

}

export default App;
