import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Quotus Software Solutions",
    location: "Bhubaneswar",
    duration: "Mar 2025 - Present",
    project: "Secure Card - Financial Data Management Platform",
    achievements: [
      "Designed secure financial platform using Java 21, AWS Lambda, and DynamoDB with KMS encryption",
      "Implemented AES encryption and OTP-based 2FA authentication for enhanced security",
      "Built modular serverless architecture using Serverless Framework and Gradle",
      "Developed responsive AngularJS frontend with seamless user workflows"
    ],
    technologies: ["Java 21", "AWS Lambda", "DynamoDB", "AngularJS"],
    color: "primary"
  },
  {
    title: "Backend Java Developer",
    company: "LTIMindtree Limited",
    location: "Hyderabad",
    duration: "Jan 2022 - Dec 2023",
    project: "Key Projects & Achievements",
    achievements: [
      "Developed Fault Replication Tool enhancing debugging efficiency by 30%",
      "Built Automated Report Generation Tool with Java Mail API integration",
      "Led microservices transition from monolithic insurance platform",
      "Implemented TDD with JUnit and automated CI/CD with Jenkins"
    ],
    technologies: ["Spring Boot", "Microservices", "JUnit", "Jenkins"],
    color: "chart-4"
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building robust solutions and leading teams across different domains
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="timeline-item mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold text-${experience.color} mb-1`}>
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-medium mb-1">{experience.company}</h4>
                      <p className="text-muted-foreground">{experience.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge 
                        variant="secondary" 
                        className={`bg-${experience.color}/10 text-${experience.color} px-3 py-1`}
                      >
                        {experience.duration}
                      </Badge>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className={`font-semibold mb-3 text-${experience.color === 'primary' ? 'chart-4' : 'chart-2'}`}>
                      {experience.project}
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-4 w-4 text-chart-1 mt-1 mr-2 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="outline" 
                          className={`bg-${experience.color}/5 text-${experience.color} border-${experience.color}/20`}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
