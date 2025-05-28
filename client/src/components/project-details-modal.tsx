import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, X, Eye, Github, Star, Calendar, Users, Code } from "lucide-react";

interface ProjectDetailsModalProps {
  project: {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    color: string;
    details?: {
      overview: string;
      features: string[];
      techHighlights: string[];
      metrics: {
        label: string;
        value: string;
        icon: string;
      }[];
      timeline: string;
      teamSize: string;
      challenges: string[];
    };
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const projectDetailsMap = {
  "Secure Card Platform": {
    overview: "A comprehensive secure financial data management platform designed specifically for travel agencies, featuring end-to-end encryption and multi-factor authentication.",
    features: [
      "AES-256 encryption for all sensitive card data storage and transmission",
      "OTP-based Two-Factor Authentication with time-based tokens",
      "Serverless architecture using AWS Lambda for cost-effective scaling",
      "Real-time data validation and fraud detection mechanisms", 
      "Secure file upload and management with AWS S3 integration",
      "Email notification system with AWS SES for transaction alerts",
      "Responsive Angular frontend with Material Design components"
    ],
    techHighlights: [
      "Java 21 with latest features and performance improvements",
      "AWS KMS for enterprise-grade key management",
      "DynamoDB with optimized partition keys for high performance",
      "Serverless Framework for Infrastructure as Code",
      "Gradle for efficient build automation and dependency management"
    ],
    metrics: [
      { label: "Security Level", value: "99.9%", icon: "fas fa-shield-alt" },
      { label: "Uptime", value: "99.95%", icon: "fas fa-clock" },
      { label: "Response Time", value: "<200ms", icon: "fas fa-tachometer-alt" },
      { label: "Data Encryption", value: "AES-256", icon: "fas fa-lock" }
    ],
    timeline: "6 months",
    teamSize: "4 developers",
    challenges: [
      "Implementing PCI DSS compliance for card data handling",
      "Optimizing serverless cold start times for better performance",
      "Building robust error handling for distributed systems"
    ]
  },
  "Fault Replication Tool": {
    overview: "An advanced debugging tool that streamlines issue replication across multiple application environments with automated data source configuration.",
    features: [
      "Multi-environment support (Production, Staging, Development)",
      "Automated Spring Data JPA configuration switching",
      "Custom entity and transaction manager setup per environment",
      "Real-time issue tracking and logging system",
      "Automated test case generation from production issues",
      "Performance metrics collection and analysis",
      "Integration with existing CI/CD pipelines for automated testing"
    ],
    techHighlights: [
      "Spring Boot with advanced configuration management",
      "Multiple database connection handling with connection pooling",
      "Custom annotation processing for environment-specific beans",
      "Advanced logging with structured JSON output",
      "JUnit 5 integration for automated test execution"
    ],
    metrics: [
      { label: "Efficiency Gain", value: "30%", icon: "fas fa-chart-line" },
      { label: "Bug Resolution", value: "45% faster", icon: "fas fa-bug" },
      { label: "Test Coverage", value: "85%", icon: "fas fa-check-circle" },
      { label: "Environments", value: "3 Active", icon: "fas fa-server" }
    ],
    timeline: "4 months",
    teamSize: "3 developers",
    challenges: [
      "Managing complex database configurations across environments",
      "Ensuring data consistency during environment switches",
      "Building reliable automated test case generation"
    ]
  },
  "Report Generation Tool": {
    overview: "A comprehensive automated reporting system that integrates with multiple data sources and external services to generate and distribute reports in real-time.",
    features: [
      "Multi-source data aggregation from databases and APIs",
      "RESTful API integration with external services and third-party systems",
      "Automated report scheduling with cron-like expressions",
      "Java Mail API integration for automated email distribution",
      "Real-time task tracking and progress monitoring",
      "Customizable report templates with dynamic content generation",
      "Error handling and retry mechanisms for failed operations"
    ],
    techHighlights: [
      "Spring Boot with advanced scheduling capabilities",
      "Jackson for JSON processing and data transformation",
      "Apache POI for Excel report generation",
      "Java Mail API with HTML email templates",
      "RESTTemplate for external API communication"
    ],
    metrics: [
      { label: "Reports/Day", value: "500+", icon: "fas fa-file-alt" },
      { label: "Automation", value: "95%", icon: "fas fa-robot" },
      { label: "Delivery Rate", value: "99.8%", icon: "fas fa-envelope" },
      { label: "Processing Time", value: "<5min", icon: "fas fa-stopwatch" }
    ],
    timeline: "3 months",
    teamSize: "2 developers",
    challenges: [
      "Handling large datasets efficiently in memory-constrained environments",
      "Building resilient email delivery with retry mechanisms",
      "Creating flexible report templates for various business needs"
    ]
  }
};

export function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  const details = projectDetailsMap[project.name as keyof typeof projectDetailsMap];
  if (!details) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span className={`text-2xl font-bold text-${project.color}`}>
              {project.name}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {details.timeline}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {details.teamSize}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {details.overview}
            </p>
          </motion.div>

          {/* Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {details.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <Card className={`text-center p-4 bg-gradient-to-br from-${project.color}/10 to-${project.color}/5 border-${project.color}/20`}>
                    <CardContent className="p-0">
                      <i className={`${metric.icon} text-2xl text-${project.color} mb-2 block`} />
                      <div className={`text-2xl font-bold text-${project.color} mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Key Features & Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {details.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-start text-sm"
                >
                  <CheckCircle className="h-4 w-4 text-chart-1 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Technical Highlights</h3>
            <div className="space-y-2">
              {details.techHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-start text-sm"
                >
                  <Code className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Technical Challenges Solved</h3>
            <div className="space-y-2">
              {details.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-start text-sm"
                >
                  <Star className="h-4 w-4 text-chart-4 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className={`bg-${project.color}/10 text-${project.color} border-${project.color}/20`}
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex justify-between items-center pt-4 border-t"
          >
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                <Eye className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </div>
            <Button
              onClick={onClose}
              className={`bg-gradient-to-r from-${project.color} to-chart-4 text-white`}
            >
              Close
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}