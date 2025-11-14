import React from "react";

type Project = {
  title: string;
  description: string;
  result: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: "OmniCommerce SaaS Platform",
    description:
      "Designed and developed a scalable multi-tenant B2B SaaS app with modular architecture, real-time updates, and secure APIs using Next.js and FastAPI.",
    result:
      "Improved user retention by 30% and reduced bugs by 40% via automated CI/CD pipelines.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "Integrated Health Portal",
    description:
      "Built a secure patient-provider portal with role-based access, automated notifications, and optimized backend APIs for <200ms response time.",
    result:
      "Achieved 99.9% uptime and improved user engagement through accessibility-focused design.",
    technologies: ["Next.js", "FastAPI", "AWS", "PostgreSQL"],
  },
  {
    title: "Next-Gen Job Board",
    description:
      "Developed a dynamic job platform with advanced search, employer dashboards, and efficient caching using Node.js and PostgreSQL.",
    result:
      "Reduced response time by 50% and ensured 99.95% system uptime with automated testing.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Projects
        </h2>

        {/* Centered horizontal scroll container */}
        <div
          className="
            flex flex-nowrap gap-8 
            justify-center
            overflow-x-auto
            pb-4
            mx-auto
            scrollbar-thin scrollbar-thumb-gray-400
            max-w-full
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                min-w-[340px] max-w-[340px]
                rounded-2xl border p-6
                hover:shadow-xl transition bg-white
              "
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-700 leading-relaxed mb-3">
                {project.description}
                <br />
                <span className="font-medium text-foreground mt-2 block">
                  🎯 <strong>Result:</strong> {project.result}
                </span>
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
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

export default ProjectsSection;
