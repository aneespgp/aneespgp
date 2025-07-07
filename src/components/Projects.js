import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      icon: <FaReact className="text-4xl text-blue-500" />,
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
      icon: <FaDatabase className="text-4xl text-purple-500" />,
      tech: ["React", "D3.js", "PostgreSQL", "Express"],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-gradient-to-br ${project.gradient} bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}>
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{project.title}</h3>
              <p className="text-card-foreground/80 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors duration-200">
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </button>
                <button className="flex items-center gap-2 bg-card-foreground/10 hover:bg-card-foreground/20 text-card-foreground px-4 py-2 rounded-lg transition-colors duration-200">
                  <FaGithub className="text-sm" />
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
