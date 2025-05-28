import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Java & Spring Boot", percentage: 90 },
  { name: "Microservices Architecture", percentage: 85 },
  { name: "AWS Cloud Services", percentage: 80 },
  { name: "Database Management", percentage: 88 },
  { name: "DevOps & CI/CD", percentage: 75 },
];

const stats = [
  { value: "3.6+", label: "Years Experience", color: "text-primary" },
  { value: "15+", label: "Projects Completed", color: "text-chart-4" },
  { value: "5", label: "Team Members", color: "text-chart-2" },
  { value: "10+", label: "Awards Won", color: "text-chart-1" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const finalValue = parseInt(stat.value.replace(/\D/g, ""));
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
          }
          
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(currentValue);
            return newStats;
          });
        }, 50);
      });
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating efficient, scalable solutions that drive business success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              Currently working as a Team Lead, guiding a team of 4-5 developers through project planning,
              code reviews, and technical decision-making. My expertise spans from developing fault replication
              tools to architecting secure financial data management platforms.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in Java Spring Boot applications, microservices architecture, and cloud technologies.
              My experience includes transitioning monolithic applications to microservices and implementing
              robust security measures for sensitive data handling.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mt-8" ref={ref}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                        {animatedStats[index]}{stat.value.includes('+') ? '+' : ''}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
