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
      "Worked on the design and development of a B2B SaaS platform using React for the frontend and FastAPI for the backend. Gained hands-on experience with PostgreSQL for database management and Docker for containerization.",
    result:
      "Contributed to reusable UI components, API endpoint implementation, and supported core development tasks, with exposure to real-time features and deployment pipelines.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "Integrated Health Portal",
    description:
      "Worked on building a secure portal for patient-provider scheduling, messaging, and notifications using FastAPI for the backend. Gained hands-on knowledge of PostgreSQL for database management and AWS EC2 for hosting and deployment.",
    result:
      "Contributed to implementing API endpoints, protected routes, and calendar integrations. Learned how to optimize backend performance and support a smooth user experience under high traffic.",
    technologies: ["FastAPI", "AWS", "PostgreSQL"],
  },
  {
    title: "Next-Gen Job Board",
    description:
      "Worked on a job search platform using React for the frontend and Node.js/Express for the backend. Used PostgreSQL for storing and managing data.",
    result:
      "Helped build dashboards for employers and job seekers, added real-time job listings, and implemented search and filtering features. Learned how to make the database and platform work faster and smoother.",
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
                min-w-[340px] max-w-[380px]
                rounded-2xl border p-6
                hover:shadow-xl transition bg-white
              "
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-700 leading-relaxed mb-3">
                {project.description}
                <br />
                <span className="font-medium text-foreground mt-2 block">
                  {project.result}
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
