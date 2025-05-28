import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, Trophy, Target } from "lucide-react";

const skillLevels = [
  {
    name: "Spring Boot Mastery",
    level: 95,
    icon: "🚀",
    description: "Advanced microservices architecture & performance optimization",
    achievements: ["Built 15+ production apps", "Zero-downtime deployments", "Custom auto-configurations"]
  },
  {
    name: "Java Expertise", 
    level: 92,
    icon: "☕",
    description: "Deep understanding of JVM, concurrency & design patterns",
    achievements: ["Java 21 features", "Multi-threading expert", "Performance tuning"]
  },
  {
    name: "AWS Cloud Solutions",
    level: 88,
    icon: "☁️", 
    description: "Serverless architecture, Lambda functions & cloud security",
    achievements: ["Lambda expert", "KMS encryption", "Cost optimization"]
  },
  {
    name: "Database Design",
    level: 90,
    icon: "🗄️",
    description: "SQL optimization, NoSQL solutions & data modeling",
    achievements: ["Query optimization", "Schema design", "Data migration"]
  }
];

const interactiveFeatures = [
  {
    icon: Zap,
    title: "Real-time Code Execution",
    description: "Live coding environment with instant feedback",
    color: "text-yellow-500"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions", 
    description: "Smart code completion and optimization tips",
    color: "text-purple-500"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Unlock milestones and track learning progress",
    color: "text-gold-500"
  },
  {
    icon: Target,
    title: "Performance Metrics",
    description: "Real-time application monitoring and analytics",
    color: "text-green-500"
  }
];

export function InteractiveSkills() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skillLevels.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSkillClick = (index: number) => {
    setIsAnimating(true);
    setActiveSkill(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentSkill = skillLevels[activeSkill];

  return (
    <div className="space-y-8">
      {/* Interactive Skill Radar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold mb-6">Interactive Skill Showcase</h3>
        
        <div className="relative">
          <motion.div
            className="w-80 h-80 mx-auto relative bg-gradient-to-br from-primary/10 to-chart-4/10 rounded-full border-4 border-primary/20"
            animate={{ rotate: isAnimating ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {skillLevels.map((skill, index) => {
              const angle = (index * 90) - 90; // Start from top
              const isActive = index === activeSkill;
              const radius = 120;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.button
                  key={skill.name}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary to-chart-4 scale-125 shadow-lg' 
                      : 'bg-white dark:bg-slate-800 hover:scale-110 shadow-md'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                  onClick={() => handleSkillClick(index)}
                  whileHover={{ scale: isActive ? 1.25 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                </motion.button>
              );
            })}

            {/* Center Display */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              key={activeSkill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {currentSkill.level}%
              </div>
              <div className="text-sm font-semibold text-center px-4">
                {currentSkill.name}
              </div>
              <div className="text-xs text-muted-foreground text-center px-6 mt-2">
                {currentSkill.description}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Achievements */}
        <motion.div
          className="mt-8"
          key={`achievements-${activeSkill}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {currentSkill.achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {achievement}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Features Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-6">
          <Button
            onClick={() => setShowFeatures(!showFeatures)}
            className="bg-gradient-to-r from-primary to-chart-4 text-white px-6 py-3 rounded-full"
          >
            {showFeatures ? 'Hide' : 'Explore'} Interactive Features
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {showFeatures && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {interactiveFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className={`w-12 h-12 ${feature.color} mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/10 to-chart-4/10 flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}