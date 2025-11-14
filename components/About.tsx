import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">About</h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          <p>
            I’m a <span className="text-foreground font-medium">results-driven Full Stack Engineer</span> with 4.2 years of experience in designing, developing, and deploying high-performance web applications.
          </p>

          <p>
            Passionate about modern web technologies, I specialize in <span className="text-foreground font-medium">React, Next.js, Node.js, and FastAPI</span>, crafting scalable architectures that deliver seamless user experiences.
          </p>

          <p>
            I thrive on building clean, efficient, and maintainable solutions, integrating <span className="text-foreground font-medium">CI/CD automation</span>, and deploying production-ready systems on the cloud.
          </p>

          <p>
            My approach combines creativity, technical precision, and a growth mindset — enabling me to transform ideas into impactful digital products that drive innovation and business success.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-10">
          {[
            "React",
            "Next.js",
            "Node.js",
            "FastAPI",
            "TypeScript",
            "Docker",
            "AWS",
            "PostgreSQL",
            "CI/CD",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
