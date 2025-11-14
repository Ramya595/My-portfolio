import React from "react";
import { Code, Server, Database, Wrench, CheckCircle2, Users, Briefcase } from "lucide-react";

type ExperienceItem = {
  icon: any;
  color: string;
  title: string;
  description: string;
};

const experienceItems: ExperienceItem[] = [
  {
    icon: Code,
    color: "text-blue-500",
    title: "Full-Stack Development",
    description:
      "Built end-to-end web applications using React, Next.js, Node.js, and FastAPI — handling the complete lifecycle from concept to deployment.",
  },
  {
    icon: Server,
    color: "text-green-500",
    title: "Backend & APIs",
    description:
      "Engineered RESTful APIs and microservices with JWT and OAuth 2.0 authentication for secure, scalable backend systems.",
  },
  {
    icon: Database,
    color: "text-orange-500",
    title: "Database Optimization",
    description:
      "Migrated monolithic systems to microservices, optimized SQL queries, and reduced latency by 20%.",
  },
  {
    icon: Wrench,
    color: "text-purple-500",
    title: "CI/CD & DevOps",
    description:
      "Automated Dockerized CI/CD pipelines using Jenkins and GitLab CI, reducing deployment times by 50%.",
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-500",
    title: "Quality Assurance",
    description:
      "Implemented automated testing (Jest, Cypress, Pytest) achieving over 90% code coverage and 40% fewer post-release bugs.",
  },
  {
    icon: Users,
    color: "text-pink-500",
    title: "Collaboration & Leadership",
    description:
      "Led requirement sessions, designed Figma prototypes, and collaborated cross-functionally with teams to deliver on time.",
  },
];

const ExperienceCard: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-600" />
          Work Experience
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Full Stack Developer
            </h3>
            <p className="text-sm text-gray-500">
              Sep 2021 – Present | Hyderabad, India
            </p>
          </div>

          <p className="text-gray-600 mb-6">
            Designed and developed 10+ scalable web applications using modern
            technologies, focusing on clean architecture, performance, and
            deployment excellence.
          </p>

          <ul className="space-y-4 text-gray-700">
            {experienceItems.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <div>
                  <strong>{item.title}:</strong> {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ExperienceCard;
