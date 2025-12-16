import React from "react";
import { Code, Server, Database, Wrench, CheckCircle2, Briefcase } from "lucide-react";

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
    title: "Frontend Development",
    description:
      "Experienced in creating responsive, reusable UI components and clean layouts using React, TypeScript, Redux, Tailwind CSS, Material-UI, and modern JavaScript practices. Comfortable converting Figma designs into user-friendly interfaces.",
  },
  {
    icon: Server,
    color: "text-green-500",
    title: "Backend & APIs",
    description:
      "Good understanding of building APIs and backend logic using FastAPI, Node.js and Express.js. Familiar with designing RESTful endpoints and working with real-world backend workflows.",
  },
  {
    icon: Database,
    color: "text-orange-500",
    title: "Database Knowledge",
    description:
      "Skilled in working with relational and NoSQL databases, including MySQL, PostgreSQL and MongoDB.Comfortable writing queries and understanding database structure and functionality.",
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-500",
    title: "Testing Fundamentals",
    description:
      "Familiar with basic testing concepts and tools such as Jest, React Testing Library and Pytest. Able to write simple tests to validate UI components and backend logic.",
  },
  {
    icon: Wrench,
    color: "text-purple-500",
    title: "Deployment & DevOps Basics",
    description:
      " Knowledgeable about Git, Docker, GitHub Actions, CI/CD concepts, and cloud platforms like AWS (EC2, S3) and Vercel. Understanding of how modern applications are deployed and managed in production environments.",
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
            Built scalable full-stack web applications with a strong focus on frontend and backend development, using React, TypeScript, Node.js, and FastAPI to deliver responsive UIs and robust APIs.
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
