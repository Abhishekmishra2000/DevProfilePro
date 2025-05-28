import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Eye, Mail } from "lucide-react";
import { CodeBackground } from "./code-background";
import { ResumeModal } from "./resume-modal";

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
                src="@assets/WhatsApp Image 2025-05-28 at 11.45.40 AM.jpeg"
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
            <Button
              onClick={() => {
                console.log("Button clicked, showResume:", showResume);
                setShowResume(true);
                console.log("After setting, showResume should be true");
              }}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Eye className="mr-2 h-4 w-4" />
              View My Resume
            </Button>
            
            {/* Test button to force modal open */}
            <Button
              onClick={() => setShowResume(true)}
              variant="destructive"
              className="px-4 py-2"
            >
              TEST MODAL
            </Button>
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
      {console.log("Rendering ResumeModal with isOpen:", showResume)}
      <ResumeModal 
        isOpen={showResume}
        onClose={() => {
          console.log("Closing modal");
          setShowResume(false);
        }}
      />
    </section>
  );
}
