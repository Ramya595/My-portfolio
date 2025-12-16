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
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Material-UI",
      "Figma",
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
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    icon: <Bug className="h-6 w-6" />,
    title: "Testing",
    skills: [
      "Jest",
      "React Testing Library",
      "Pytest",
    ],
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "DevOps & Cloud",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS (EC2, S3)",
    ],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Methodologies & Tools",
    skills: [
      "Agile & Scrum",
      "Jira",
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4">
      {/* Reduced left & right gap */}

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Skills
        </h2>

        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            mx-2 
            md:mx-6 
            lg:mx-10
          "
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                border 
                rounded-2xl 
                p-6 
                hover:shadow-xl 
                transition 
                bg-white 
              "
            >
              <div className="flex items-center gap-3 pb-2">
                <div className="p-3 rounded-xl bg-gray-50">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      bg-gray-200 
                      text-foreground 
                      px-3 
                      py-1.5 
                      rounded 
                      text-sm 
                      font-medium 
                      hover:bg-gray-300 
                      transition
                    "
                  >
                    {skill}
                  </span>
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
