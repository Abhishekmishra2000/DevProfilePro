import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const javaCodeSnippets = [
  "@RestController",
  "@Service",
  "@Autowired",
  "@SpringBootApplication",
  "@Entity",
  "@Repository",
  "@Transactional",
  "public class UserService {",
  "@GetMapping(\"/api/users\")",
  "@PostMapping(\"/api/users\")",
  "ResponseEntity<User>",
  "@RequestBody User user",
  "Optional<User> findById(Long id)",
  "List<User> findAll()",
  "@Configuration",
  "@Component",
  "ApplicationContext context",
  "@Value(\"${app.name}\")",
  "JpaRepository<User, Long>",
  "@Query(\"SELECT u FROM User u\")",
  "CommandLineRunner",
  "@Profile(\"dev\")",
  "@ConditionalOnProperty",
  "WebMvcConfigurer",
  "@CrossOrigin(origins = \"*\")",
  "@PathVariable Long id",
  "@RequestParam String name",
  "HttpStatus.OK",
  "ResponseEntity.ok()",
  "@Valid @RequestBody",
  "BindingResult result",
  "@ExceptionHandler",
  "@ControllerAdvice",
  "ObjectMapper mapper",
  "@JsonProperty",
  "@JsonIgnore",
  "LocalDateTime.now()",
  "UUID.randomUUID()",
  "@PreAuthorize(\"hasRole('ADMIN')\")",
  "@Secured(\"ROLE_USER\")",
];

const springBootCode = [
  "spring.datasource.url=jdbc:mysql://localhost:3306/db",
  "spring.jpa.hibernate.ddl-auto=update",
  "spring.profiles.active=development", 
  "server.port=8080",
  "logging.level.org.springframework=DEBUG",
  "spring.jackson.serialization.write-dates-as-timestamps=false",
  "spring.jpa.show-sql=true",
  "spring.security.user.name=admin",
  "spring.cloud.gateway.routes[0].id=user-service",
  "eureka.client.service-url.defaultZone=http://localhost:8761/eureka",
  "management.endpoints.web.exposure.include=*",
  "spring.kafka.bootstrap-servers=localhost:9092",
  "spring.redis.host=localhost",
  "spring.mail.host=smtp.gmail.com",
  "aws.region=us-east-1",
];

export function CodeBackground() {
  const [codeElements, setCodeElements] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    delay: number;
    isSpringBoot: boolean;
  }>>([]);

  useEffect(() => {
    const elements = [];
    const allSnippets = [...javaCodeSnippets, ...springBootCode];
    
    for (let i = 0; i < 15; i++) {
      const isSpringBoot = Math.random() > 0.7;
      const snippets = isSpringBoot ? springBootCode : javaCodeSnippets;
      
      elements.push({
        id: i,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        isSpringBoot,
      });
    }
    
    setCodeElements(elements);
  }, []);

  return (
    <div className="code-background">
      {codeElements.map((element) => (
        <motion.div
          key={element.id}
          className={`floating-code ${element.isSpringBoot ? 'text-chart-4' : 'text-primary'}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: element.delay }}
        >
          {element.text}
        </motion.div>
      ))}
      
      {/* Matrix-style vertical code rain */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`matrix-${i}`}
          className="absolute text-chart-2 font-mono text-xs opacity-20"
          style={{
            left: `${(i + 1) * 12}%`,
            top: 0,
            height: '100%',
          }}
          animate={{
            y: ['0vh', '100vh'],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear',
          }}
        >
          {javaCodeSnippets.slice(i * 5, (i + 1) * 5).map((code, idx) => (
            <div key={idx} className="mb-4">
              {code}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}