import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { X, MapPin, Phone, Mail, Linkedin, Award, CheckCircle } from "lucide-react";

interface SimpleResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SimpleResumeModal({ isOpen, onClose }: SimpleResumeModalProps) {
  // Prevent right-click and text selection to protect content
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleSelectStart = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const resumeData = {
    name: "Abhishek Mishra",
    title: "Backend Java Developer & Team Lead",
    contact: {
      phone: "+91-7063330674",
      email: "abhishekmsr2000@gmail.com",
      linkedin: "www.linkedin.com/in/abhishek-mishra-ba559b181"
    },
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Quotus Software Solutions",
        duration: "Jan 2023 - Present",
        location: "Noida, India",
        responsibilities: [
          "Led a team of 3 developers in designing and implementing microservices architecture",
          "Developed RESTful APIs using Spring Boot and Spring Framework",
          "Implemented database optimization resulting in 40% performance improvement",
          "Collaborated with cross-functional teams to deliver high-quality software solutions"
        ]
      },
      {
        title: "Software Engineer",
        company: "LTIMindtree",
        duration: "Oct 2021 - Dec 2022",
        location: "Mumbai, India",
        responsibilities: [
          "Developed and maintained Java-based enterprise applications",
          "Implemented Spring Security for authentication and authorization",
          "Worked on database design and optimization using MySQL and PostgreSQL",
          "Participated in Agile development methodologies and code reviews"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Technology (B.Tech)",
        field: "Computer Science and Engineering",
        institution: "Dr. A.P.J. Abdul Kalam Technical University",
        duration: "2017 - 2021",
        grade: "7.8 CGPA"
      }
    ],
    skills: [
      "Java", "Spring Boot", "Spring Framework", "Spring Security", "Microservices",
      "REST APIs", "MySQL", "PostgreSQL", "AWS", "Docker", "Git", "Maven",
      "JUnit", "Mockito", "Hibernate", "JPA", "Redis", "Apache Kafka"
    ],
    certifications: [
      "AWS Certified Cloud Practitioner",
      "OOPs in Java, Spring Boot Micro-Services, AWS Practitioner, SQL, Agile Methodology"
    ]
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-background border rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto select-none w-full relative"
        onContextMenu={handleContextMenu}

        style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold gradient-text">Resume</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Personal Info */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold gradient-text">{resumeData.name}</h1>
            <p className="text-xl text-muted-foreground">{resumeData.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                {resumeData.contact.phone}
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                {resumeData.contact.email}
              </div>
              <div className="flex items-center gap-1">
                <Linkedin className="h-4 w-4" />
                {resumeData.contact.linkedin}
              </div>
            </div>
          </div>

          {/* Experience */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>
                    <p className="font-medium text-primary mb-1">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </p>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-primary">{edu.field}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    <Badge variant="outline">{edu.grade}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-2">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}