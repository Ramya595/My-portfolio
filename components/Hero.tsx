import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-5"
    >
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-0">
          Ramya Latha
          <span className="block text-2xl md:text-3xl text-gray-600 mt-2 font-medium">
            Full Stack Engineer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Full Stack Engineer passionate about crafting intuitive UIs and efficient APIs using React,
          Next.js, Node.js, and FastAPI — delivering secure, scalable, and performant solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-block text-center px-8 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition font-bold"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
