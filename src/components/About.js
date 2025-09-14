'use client';

import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaRocket, FaLightbulb, FaCode, FaServer, FaDatabase, FaMobile, FaChartLine, FaCog } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate title with split text effect
      const titleText = titleRef.current.textContent;
      const titleChars = titleText.split('');
      titleRef.current.innerHTML = titleChars.map(char => 
        char === ' ' ? ' ' : `<span class="title-char">${char}</span>`
      ).join('');

      mainTl.from('.title-char', {
        opacity: 0,
        y: 50,
        rotationX: -90,
        transformOrigin: 'center bottom',
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out(1.7)'
      });

      // Animate description paragraphs
      mainTl.from('.about-text', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.5');

      // Animate stats
      mainTl.from('.stat-item', {
        opacity: 0,
        scale: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3');

      // Animate feature cards
      mainTl.from('.feature-card', {
        opacity: 0,
        y: 80,
        scale: 0.8,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.5');

      // Counter animations for stats
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const obj = { value: 0 };
        
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = Math.floor(obj.value);
          },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Feature card hover animations
      document.querySelectorAll('.feature-card').forEach(card => {
        const tl = gsap.timeline({ paused: true });
        const icon = card.querySelector('.feature-icon');
        const glow = card.querySelector('.card-glow');
        
        tl.to(card, {
          y: -15,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, 0)
        .to(glow, {
          opacity: 1,
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });

      // Floating animation for background elements
      gsap.to('.floating-shape', {
        y: -20,
        rotation: 5,
        duration: 4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 50, suffix: '+', label: 'Projects Completed' },
    { value: 3, suffix: '+', label: 'Years Experience' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 24, suffix: '/7', label: 'Support Available' }
  ];

  const features = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.',
      color: 'var(--primary)'
    },
    {
      icon: FaServer,
      title: 'Backend Development', 
      description: 'Creating robust APIs and server-side applications using Node.js, Express, and various databases.',
      color: 'var(--secondary)'
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for MongoDB, PostgreSQL, and MySQL.',
      color: 'var(--accent)'
    },
    {
      icon: FaMobile,
      title: 'Mobile-First Design',
      description: 'Ensuring applications work seamlessly across all devices with responsive design principles.',
      color: 'var(--warning)'
    },
    {
      icon: FaChartLine,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, SEO, and user experience using best practices and tools.',
      color: 'var(--primary)'
    },
    {
      icon: FaCog,
      title: 'DevOps & Deployment',
      description: 'Setting up CI/CD pipelines, cloud deployments, and maintaining production environments.',
      color: 'var(--secondary)'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape absolute top-20 left-10 w-40 h-40 border border-[var(--primary)] opacity-10 rounded-full"></div>
        <div className="floating-shape absolute top-40 right-20 w-32 h-32 border border-[var(--secondary)] opacity-15 rounded-lg rotate-45"></div>
        <div className="floating-shape absolute bottom-40 left-1/4 w-24 h-24 border border-[var(--accent)] opacity-20 rounded-full"></div>
        <div className="floating-shape absolute bottom-20 right-1/3 w-36 h-36 border border-[var(--warning)] opacity-12 rounded-lg rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient"
          >
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="about-text text-xl md:text-2xl text-[var(--foreground-secondary)] leading-relaxed">
              I&apos;m a <span className="text-[var(--primary)] font-semibold">passionate full-stack developer</span> who has 
              transformed years of freelancing experience into a full-time career building 
              <span className="text-[var(--accent)] font-semibold"> cutting-edge digital solutions</span>.
            </p>
            
            <p className="about-text text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed">
              I specialize in creating <span className="text-[var(--secondary)] font-semibold">robust, scalable applications</span> that 
              combine beautiful design with powerful functionality. My expertise spans both 
              <span className="text-[var(--warning)] font-semibold"> frontend and backend development</span>, 
              allowing me to deliver complete, end-to-end solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="glass p-6 rounded-2xl border border-[var(--border)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                    <span className="counter" data-target={stat.value}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-[var(--foreground-muted)] text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-[var(--foreground)]">
            What I Bring to the Table
          </h3>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card relative group">
              <div className="glass p-8 rounded-2xl border border-[var(--border)] relative overflow-hidden h-full">
                {/* Card Glow Effect */}
                <div className="card-glow absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 blur-xl transition-all duration-300"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  <div className="feature-icon mb-6">
                    <feature.icon 
                      className="text-4xl mx-auto transition-all duration-300"
                      style={{ color: feature.color }}
                    />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-[var(--foreground)]">
                    {feature.title}
                  </h4>
                  
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--primary)] rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass p-8 rounded-2xl border border-[var(--border)] max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
              Ready to Build Something Amazing?
            </h4>
            <p className="text-[var(--foreground-muted)] mb-6 text-lg">
              Let&apos;s collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-glow)]"
            >
              <FaRocket className="text-xl" />
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
