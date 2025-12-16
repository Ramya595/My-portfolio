import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">About</h2>

        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          <p>
            I’m a passionate<span className="text-foreground font-medium">Full-Stack Developer</span> with hands-on experience in building modern, scalable, and user-friendly web applications, specializing in responsive front-end interfaces and robust back-end systems.
          </p>

          <p>
            On the front end, I work with <span className="text-foreground font-medium">HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React, and Redux</span>, to create clean, interactive, and performance-optimized user experiences
          </p>

          <p>
            On the back end, I build secure and efficient APIs using <span className="text-foreground font-medium">Python (FastAPI) and Node.js with Express,</span> following RESTful architecture and best practices.
          </p>

          <p>
            I have experience with both <span className="text-foreground font-medium">relational and NoSQL databases,</span> including <span className="text-foreground font-medium"> MySQL, PostgreSQL, and MongoDB,</span> and I understand how to design, query, and optimize databases for real-world applications.
          </p>

          <p>
            I enjoy solving problems, learning new technologies, and continuously improving my skills. My goal is to contribute to impactful projects, grow as a developer, and build software that delivers real value to users.
          </p>        
        </div>

        <div className="flex flex-wrap gap-3 mt-10">
          {[
            "React",
            "Node.js",
            "FastAPI",
            "TypeScript",
            "Docker",
            "AWS",
            "PostgreSQL",
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
