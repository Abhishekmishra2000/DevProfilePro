import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cog, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Core Java", "SQL", "JavaScript", "HTML/CSS"],
    color: "primary",
    gradient: "from-primary to-chart-4"
  },
  {
    title: "Frameworks",
    icon: Cog,
    skills: ["Spring Boot", "Spring Cloud", "Hibernate", "Angular"],
    color: "chart-4",
    gradient: "from-chart-4 to-chart-2"
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: ["MySQL", "DynamoDB", "AWS Lambda", "AWS S3/SES"],
    color: "chart-2",
    gradient: "from-chart-2 to-chart-1"
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git/GitHub", "Jenkins", "Maven/Gradle", "JUnit/Postman"],
    color: "chart-1",
    gradient: "from-chart-1 to-primary"
  }
];

const certifications = [
  { name: "AWS Practitioner", icon: "fas fa-award" },
  { name: "CREST Awards", icon: "fas fa-trophy" },
  { name: "SPOT ON Awards", icon: "fas fa-star" },
  { name: "Spring Boot Expert", icon: "fas fa-certificate" }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className={`text-xl font-semibold text-${category.color} mb-4`}>
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          className="flex items-center justify-center text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <i className="fas fa-check text-chart-1 mr-2 text-xs" />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className={`bg-gradient-to-r ${skillCategories[index % skillCategories.length].gradient} text-white text-center p-4 hover:shadow-xl transition-all duration-300`}>
                  <CardContent className="p-0">
                    <i className={`${cert.icon} text-2xl mb-2 block`} />
                    <p className="font-semibold">{cert.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
