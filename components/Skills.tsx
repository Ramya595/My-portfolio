import React from "react";
import { Code, Blocks, Database, Bug, Cloud, Workflow } from "lucide-react";

type SkillCategory = {
  icon: React.ReactNode;
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Context API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material-UI",
      "Figma",
      "Accessibility (a11y)",
      "Lighthouse",
    ],
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: "Backend & Architecture",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices Architecture",
      "JWT",
      "OAuth",
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL Query Optimization",
      "Database Migration",
    ],
  },
  {
    icon: <Bug className="h-6 w-6" />,
    title: "Testing",
    skills: [
      "Jest",
      "Cypress (E2E)",
      "React Testing Library",
      "Pytest",
      "Mocha",
      "TDD",
    ],
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "DevOps & Cloud",
    skills: [
      "Git",
      "GitHub/GitLab Actions",
      "Docker",
      "CI/CD",
      "NGINX",
      "AWS (EC2, S3)",
    ],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Methodologies & Tools",
    skills: [
      "Agile & Scrum",
      "Jira",
      "Slack",
      "Requirements Gathering",
      "System Design",
      "Performance Optimization",
      "WebSockets",
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 md:mx-16 lg:mx-24">
          {skillCategories.map((category, index) => (
            <div key={index} className="border rounded-2xl p-5 hover:shadow-lg transition">
              <div className="flex items-center gap-3 pb-2">
                <div className="p-3 rounded-xl bg-gray-50">{category.icon}</div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1.5 rounded text-xs">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
