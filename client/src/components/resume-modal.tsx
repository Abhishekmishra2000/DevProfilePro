import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { X, MapPin, Phone, Mail, Linkedin, Award, CheckCircle } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeData = {
    name: "Abhishek Mishra",
    title: "Backend Java Developer & Team Lead",
    contact: {
      phone: "+91-7063330674",
      email: "abhishekmsr2000@gmail.com",
      linkedin: "www.linkedin.com/in/abhishek-mishra-ba559b181"
    },
    summary: "Dedicated and result-driven Backend Developer with 3.6 years of experience in crafting robust server-side solutions. Proficient in Java programming, Spring Framework, and microservices architecture. Currently working as a Team Lead, guiding a team of 4-5 developers through project planning, code reviews, and technical decision-making. Committed to staying informed about industry trends and contributing to project success through continuous learning and expertise expansion.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Quotus Software Solutions",
        location: "Bhubaneswar",
        duration: "Mar 2025 - Present",
        project: "Secure Card – A Secure Financial Data Management Platform",
        achievements: [
          "Designed and developed Secure Card, a secure financial data management platform for travel agencies using Java 21, AWS Lambda, and DynamoDB, ensuring encrypted handling of sensitive card data via AWS KMS.",
          "Implemented AES encryption and OTP-based 2FA authentication, enhancing data security and user access control.",
          "Built a modular, serverless architecture using the Serverless Framework and Gradle, enabling scalable and cost-efficient deployments.",
          "Integrated AWS SES for email notifications and S3 for secure file storage, facilitating secure communication and file management.",
          "Developed a responsive AngularJS frontend, providing a seamless user interface for card data submission and confirmation workflows."
        ]
      },
      {
        title: "Backend Java Developer",
        company: "LTIMindtree Limited",
        location: "Hyderabad",
        duration: "Jan 2022 – Dec 2023",
        achievements: [
          "Fault Replication Tool: Developed a Fault Replication Tool with Java and Spring Boot to streamline issue replication across multiple application environments (production, certification, development) using various databases. Customized Spring Data JPA configurations, including data sources, entity and transaction managers, which enhanced debugging efficiency by 30%.",
          "Automated Report Generation Tool: Developed an Automated Report Generation Tool that retrieves data from databases and integrates with external services through REST APIs to create and track tasks in real time. Leveraged the Java Mail API to automatically generate and send reports, streamlining the entire reporting process.",
          "Microservices Transition and Development: Helped move a monolithic insurance platform to a microservices architecture by developing and maintaining APIs using Java and Spring Boot. This made the system more scalable and flexible.",
          "Monolithic Application Maintenance: Maintained the legacy monolithic application by addressing defects and implementing both major and minor enhancements, ensuring its continued performance and stability throughout the transition to the new microservices architecture.",
          "Unit Testing: Executed JUnit testing within a test-driven development framework, utilizing Jenkins to automate the build process, package applications, containerize deployments, and create test containers for efficient testing."
        ]
      }
    ],
    education: {
      degree: "Bachelor of Science in Information Technology Management",
      university: "Ravenshaw University",
      location: "Cuttack, Odisha",
      duration: "Aug 2018 – Sep 2021"
    },
    skills: {
      languages: ["Core Java", "SQL", "Angular", "HTML", "CSS"],
      frameworks: ["Spring Boot", "Spring Cloud", "Hibernate", "JSP"],
      microservices: ["RESTful APIs"],
      databases: ["MySQL", "DynamoDB"],
      tools: ["Apache Kafka", "Maven", "Gradle", "Git", "JUnit", "Postman", "Jenkins", "Kubernetes", "CI/CD Pipeline"],
      softSkills: ["Creative Problem-Solving", "Teamwork", "Adaptability"],
      cloud: ["AWS(Lambda, KMS, SES, S3)"]
    },
    certifications: [
      "Awarded with several CREST and SPOT ON awards for taking the lead and delivering the task with Zero defects.",
      "OOPs in Java, Spring Boot Micro-Services, AWS Practitioner, SQL, Agile Methodology"
    ]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className="text-2xl font-bold gradient-text">Resume</span>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center border-b pb-6"
          >
            <h1 className="text-3xl font-bold gradient-text mb-2">{resumeData.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{resumeData.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                {resumeData.contact.phone}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                {resumeData.contact.email}
              </div>
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-1" />
                {resumeData.contact.linkedin}
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-primary">Summary</h2>
            <p className="text-muted-foreground leading-relaxed">{resumeData.summary}</p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-primary">Experience</h2>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-chart-4">{exp.title}</h3>
                        <p className="font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {exp.duration}
                      </Badge>
                    </div>
                    {exp.project && (
                      <p className="font-semibold text-chart-2 mb-3">{exp.project}</p>
                    )}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-chart-1 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-primary">Education</h2>
            <Card className="p-4">
              <CardContent className="p-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{resumeData.education.degree}</h3>
                    <p className="text-muted-foreground">{resumeData.education.university}</p>
                    <p className="text-sm text-muted-foreground">{resumeData.education.location}</p>
                  </div>
                  <Badge variant="outline">{resumeData.education.duration}</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Languages:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {resumeData.skills.languages.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                
                <h4 className="font-semibold mb-2">Frameworks:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {resumeData.skills.frameworks.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>

                <h4 className="font-semibold mb-2">Databases:</h4>
                <div className="flex flex-wrap gap-1">
                  {resumeData.skills.databases.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Tools & Technology:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {resumeData.skills.tools.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>

                <h4 className="font-semibold mb-2">Cloud:</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {resumeData.skills.cloud.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>

                <h4 className="font-semibold mb-2">Soft Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {resumeData.skills.softSkills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-3 text-primary">Certification And Recognition</h2>
            <ul className="space-y-2">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start text-sm">
                  <Award className="h-4 w-4 text-chart-1 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Close Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex justify-center pt-4 border-t"
          >
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-primary to-chart-4 text-white px-8 py-2"
            >
              Close Resume
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}