import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Github } from "lucide-react";
import { ProjectDetailsModal } from "./project-details-modal";

const projects = [
  {
    name: "Secure Card Platform",
    description: "Secure financial data management platform for travel agencies with AES encryption, OTP-based 2FA, and serverless architecture.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Java 21", "AWS Lambda", "DynamoDB", "AngularJS"],
    color: "primary"
  },
  {
    name: "Fault Replication Tool",
    description: "Streamlined issue replication across multiple environments with customized Spring Data JPA configurations, improving debugging efficiency by 30%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Spring Boot", "Spring Data JPA", "Multi-DB"],
    color: "chart-4"
  },
  {
    name: "Report Generation Tool",
    description: "Automated system for data retrieval, REST API integration, and report generation with Java Mail API for timely delivery and task tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Java Mail API", "REST APIs", "Automation"],
    color: "chart-2"
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewCode = (projectName: string) => {
    // In a real application, this would open GitHub repository
    console.log(`Opening GitHub for: ${projectName}`);
  };

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing solutions that drive efficiency and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 text-${project.color}`}>
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`bg-${project.color}/10 text-${project.color} text-xs`}
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewProject(project)}
                      className="text-primary hover:text-primary/80"
                    >
                      <Eye className="mr-1 h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleViewCode(project.name)}
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectDetailsModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
