'use client';

import React, { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaExternalLinkAlt, FaGithub, FaMobile, FaRocket, FaCloud } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      const titleText = titleRef.current.textContent;
      const titleChars = titleText.split('');
      titleRef.current.innerHTML = titleChars.map(char => 
        char === ' ' ? ' ' : `<span class="title-char">${char}</span>`
      ).join('');

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate title
      mainTl.from('.title-char', {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: 'center bottom',
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out(1.7)'
      });

      // Animate project cards
      mainTl.from('.project-card', {
        opacity: 0,
        y: 100,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.5');

      // Hover animations for project cards
      document.querySelectorAll('.project-card').forEach(card => {
        const hoverTl = gsap.timeline({ paused: true });
        
        hoverTl
          .to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          })
          .to(card.querySelector('.project-icon'), {
            rotationY: 360,
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
          }, 0)
          .to(card.querySelector('.tech-tag'), {
            y: -5,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out'
          }, 0.1);

        card.addEventListener('mouseenter', () => hoverTl.play());
        card.addEventListener('mouseleave', () => hoverTl.reverse());
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "AI-Powered E-Commerce",
      description: "Next-gen e-commerce platform with AI recommendations, real-time inventory management, and seamless payment integration.",
      icon: FaRocket,
      tech: ["Next.js", "TypeScript", "AI/ML", "Stripe", "MongoDB"],
      color: "var(--primary)",
      bgGradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Real-Time Collaboration Hub",
      description: "Advanced collaboration platform with live editing, video conferencing, and intelligent task automation.",
      icon: FaCloud,
      tech: ["React", "WebRTC", "Socket.io", "Node.js", "Redis"],
      color: "var(--secondary)",
      bgGradient: "from-pink-500/10 to-purple-500/10"
    },
    {
      title: "Mobile-First Analytics",
      description: "Comprehensive analytics dashboard with predictive insights, customizable widgets, and mobile-optimized interface.",
      icon: FaMobile,
      tech: ["React Native", "D3.js", "Python", "TensorFlow", "AWS"],
      color: "var(--accent)",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Blockchain DeFi Platform",
      description: "Decentralized finance platform with smart contracts, yield farming, and cross-chain compatibility.",
      icon: FaDatabase,
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      color: "var(--warning)",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Neural Network Trainer",
      description: "ML training platform with automated hyperparameter tuning, distributed computing, and model optimization.",
      icon: FaReact,
      tech: ["Python", "PyTorch", "Docker", "Kubernetes", "FastAPI"],
      color: "var(--primary)",
      bgGradient: "from-indigo-500/10 to-violet-500/10"
    },
    {
      title: "IoT Smart Home System",
      description: "Complete IoT ecosystem with sensor networks, automated controls, and energy optimization algorithms.",
      icon: FaNodeJs,
      tech: ["Arduino", "Raspberry Pi", "MQTT", "Node.js", "InfluxDB"],
      color: "var(--secondary)",
      bgGradient: "from-teal-500/10 to-cyan-500/10"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient"
          >
            Featured Projects
          </h2>
          <span className='text-3xl mb-10'>(These are Dummy Projects, I will update them later)</span>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-4xl mx-auto">
            Innovative solutions built with cutting-edge technologies and 
            <span className="text-[var(--primary)] font-semibold"> creative engineering</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsRef}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card glass rounded-2xl border border-[var(--border)] p-8 relative overflow-hidden group cursor-pointer bg-gradient-to-br ${project.bgGradient}`}
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${project.color}40, transparent 70%)`,
                  filter: 'blur(20px)'
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div 
                    className="project-icon w-20 h-20 rounded-xl glass border border-[var(--border)] flex items-center justify-center mb-6"
                    style={{ boxShadow: `0 0 30px ${project.color}30` }}
                  >
                    <project.icon 
                      className="text-4xl"
                      style={{ color: project.color }}
                    />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="tech-tag px-4 py-2 rounded-full text-sm font-medium glass border border-[var(--border)] text-[var(--foreground)]"
                      style={{ 
                        boxShadow: `0 0 10px ${project.color}20`,
                        background: `${project.color}10`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <button 
                    className="flex-1 flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-semibold transition-all duration-300 glass border border-[var(--border)] text-[var(--foreground)] hover:scale-105"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                      boxShadow: `0 0 20px ${project.color}30`
                    }}
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live Demo
                  </button>
                  <button 
                    className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-semibold transition-all duration-300 glass border border-[var(--border)] text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:scale-105"
                  >
                    <FaGithub className="text-lg" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 rounded-xl font-bold text-lg glass border border-[var(--border)] text-[var(--foreground)] overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
