import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, Mail } from "lucide-react";
import { CodeBackground } from "./code-background";
import { SimpleResumeModal } from "./simple-resume-modal";
import abhiImg from "../assets/Abhi.jpg";
import { FaAward, FaStar } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { SiSpring } from "react-icons/si";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [showResume, setShowResume] = useState(false);
  const fullText = "Backend Java Developer & Team Lead";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const viewResume = () => {
    console.log("View Resume clicked!");
    setShowResume(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Code Background */}
      <CodeBackground />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating absolute top-40 right-20 w-16 h-16 bg-chart-4/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="floating absolute bottom-40 left-20 w-12 h-12 bg-chart-2/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="floating absolute bottom-20 right-10 w-24 h-24 bg-chart-1/10 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
             <motion.img
  src={abhiImg}
  alt="Abhishek Mishra - Java Developer"
  className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-2xl"
  animate={{
    boxShadow: [
      "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
      "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
      "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
    ]
  }}
  transition={{ duration: 3, repeat: Infinity }}
/>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-chart-4 opacity-20 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="gradient-text">Abhishek</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-6 text-muted-foreground h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="border-r-2 border-primary pr-1">
              {typedText}
            </span>
          </motion.div>

          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Dedicated Backend Developer with 3.6+ years of experience crafting robust server-side solutions.
            Proficient in Java, Spring Framework, and microservices architecture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-primary to-chart-4 text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            {/* <button
              onClick={() => {
                console.log("Direct button clicked!");
                setShowResume(true);
              }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              View My Resume
            </button> */}
            

          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/abhishek-mishra-ba559b181"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin text-2xl" />
            </motion.a>
            <motion.a
              href="mailto:abhishekmsr2000@gmail.com"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope text-2xl" />
            </motion.a>
            <motion.a
              href="tel:+917063330674"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-phone text-2xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>

      {/* Resume Modal */}
      {showResume && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setShowResume(false)}
        >
          <div 
            className="bg-white dark:bg-gray-900 border rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto w-full relative p-6"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
            style={{ userSelect: 'none' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-primary">Resume - Abhishek Mishra</h2>
              <button 
                onClick={() => setShowResume(false)}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-primary mb-2">Abhishek Mishra</h1>
                <p className="text-xl text-gray-600 mb-4">Backend Java Developer & Team Lead</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span>📞 +91-7063330674</span>
                  <span>✉️ abhishekmsr2000@gmail.com</span>
                  <span>💼 LinkedIn: abhishek-mishra-ba559b181</span>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Experience</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Senior Software Engineer</h4>
                    <span className="text-sm bg-primary text-white px-2 py-1 rounded">Jan 2023 - Present</span>
                  </div>
                  <p className="font-medium text-primary mb-1">Quotus Software Solutions - Noida, India</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Led a team of 3 developers in designing and implementing microservices architecture</li>
                    <li>Developed RESTful APIs using Spring Boot and Spring Framework</li>
                    <li>Implemented database optimization resulting in 40% performance improvement</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Software Engineer</h4>
                    <span className="text-sm bg-primary text-white px-2 py-1 rounded">Oct 2021 - Dec 2022</span>
                  </div>
                  <p className="font-medium text-primary mb-1">LTIMindtree - Mumbai, India</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Developed and maintained Java-based enterprise applications</li>
                    <li>Implemented Spring Security for authentication and authorization</li>
                    <li>Worked on database design and optimization using MySQL and PostgreSQL</li>
                    <li>Participated in Agile development methodologies and code reviews</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
                <div>
                  <h4 className="font-semibold">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-primary">Computer Science and Engineering</p>
                  <p className="text-sm text-gray-600">Dr. A.P.J. Abdul Kalam Technical University</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-600">2017 - 2021</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">7.8 CGPA</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Spring Framework", "Spring Security", "Microservices", "REST APIs", "MySQL", "PostgreSQL", "AWS", "Docker", "Git", "Maven", "JUnit", "Mockito", "Hibernate", "JPA", "Redis", "Apache Kafka"].map((skill, index) => (
                    <span key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
  <h3 className="text-2xl font-bold text-center mb-8 text-primary">Certifications & Recognition</h3>
  <div className="flex flex-wrap justify-center gap-6">
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-400 text-white rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
      <MdWorkspacePremium size={36} className="mb-2" />
      <span className="font-semibold text-lg">AWS Practitioner</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-green-400 text-white rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
      <FaAward size={36} className="mb-2" />
      <span className="font-semibold text-lg">CREST Awards</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
      <FaStar size={36} className="mb-2" />
      <span className="font-semibold text-lg">SPOT ON Awards</span>
    </div>
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl px-8 py-6 min-w-[220px] shadow-lg">
      <SiSpring size={36} className="mb-2" />
      <span className="font-semibold text-lg">Spring Boot Expert</span>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
