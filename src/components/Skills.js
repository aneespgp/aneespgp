'use client';

import React, { useEffect, useRef } from 'react';
import { 
  FaReact, 
  FaBootstrap, 
  FaCss3Alt, 
  FaHtml5, 
  FaJs, 
  FaPhp, 
  FaNodeJs,
  FaLinux,
  FaSass,
  FaGitAlt,
  FaWordpress,
  FaCode,
  FaServer,
  FaTools
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiXampp, 
  SiChartdotjs, 
  SiFirebase, 
  SiTailwindcss, 
  SiMui, 
  SiRedux, 
  SiDart, 
  SiAdobeillustrator, 
  SiAdobepremierepro, 
  SiNextdotjs, 
  SiJquery, 
  SiStyledcomponents,
  SiMysql
} from 'react-icons/si';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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

      // Animate category headers
      mainTl.from('.category-header', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.5');

      // Animate skill cards
      mainTl.from('.skill-card', {
        opacity: 0,
        scale: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)'
      }, '-=0.3');

      // Progress bar animations
      gsap.utils.toArray('.progress-bar').forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        
        gsap.to(bar, {
          width: `${percentage}%`,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Skill card hover animations
      document.querySelectorAll('.skill-card').forEach(card => {
        const tl = gsap.timeline({ paused: true });
        const icon = card.querySelector('.skill-icon');
        const glow = card.querySelector('.skill-glow');
        
        tl.to(card, {
          y: -10,
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(icon, {
          scale: 1.3,
          rotation: 360,
          duration: 0.5,
          ease: 'back.out(1.7)'
        }, 0)
        .to(glow, {
          opacity: 0.8,
          scale: 1.2,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });

      // Floating animation for category icons
      gsap.to('.category-icon', {
        y: -10,
        rotation: 5,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: FaCode,
      color: "var(--primary)",
      gradient: "from-[var(--primary)] to-[var(--secondary)]",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 85 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 95 },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 98 },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
        { name: "Material UI", icon: SiMui, color: "#007FFF", level: 85 },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", level: 88 },
        { name: "Sass", icon: FaSass, color: "#CC6699", level: 80 },
        { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85 },
        { name: "jQuery", icon: SiJquery, color: "#0769AD", level: 90 }
      ]
    },
    {
      title: "Backend & Database",
      icon: FaServer,
      color: "var(--secondary)",
      gradient: "from-[var(--secondary)] to-[var(--accent)]",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 90 },
        { name: "Express.js", icon: SiExpress, color: "#000000", level: 88 },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 82 },
        { name: "PHP", icon: FaPhp, color: "#777BB4", level: 75 },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      icon: FaTools,
      color: "var(--accent)",
      gradient: "from-[var(--accent)] to-[var(--warning)]",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
        { name: "Linux", icon: FaLinux, color: "#FCC624", level: 75 },
        { name: "WordPress", icon: FaWordpress, color: "#21759B", level: 85 },
        { name: "XAMPP", icon: SiXampp, color: "#FB7A24", level: 80 },
        { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384", level: 85 },
        { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00", level: 70 }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[var(--primary)] opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[var(--secondary)] opacity-15 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border border-[var(--accent)] opacity-8 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-[var(--warning)] opacity-12 rounded-lg rotate-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient"
          >
            Skills & Expertise
          </h2>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build 
            <span className="text-[var(--primary)] font-semibold"> exceptional digital experiences</span>
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="category-header flex items-center justify-center mb-12">
                <div className="flex items-center gap-4 glass p-6 rounded-2xl border border-[var(--border)]">
                  <category.icon 
                    className="category-icon text-4xl"
                    style={{ color: category.color }}
                  />
                  <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card group relative">
                    <div className="glass p-6 rounded-2xl border border-[var(--border)] relative overflow-hidden h-full">
                      {/* Skill Glow Effect */}
                      <div 
                        className="skill-glow absolute inset-0 opacity-0 blur-xl transition-all duration-300"
                        style={{ backgroundColor: skill.color + '40' }}
                      ></div>
                      
                      {/* Skill Content */}
                      <div className="relative z-10 text-center">
                        <div className="skill-icon mb-4">
                          <skill.icon 
                            className="text-4xl mx-auto transition-all duration-300"
                            style={{ color: skill.color }}
                          />
                        </div>
                        
                        <h4 className="text-sm font-bold mb-3 text-[var(--foreground)]">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-[var(--background-secondary)] rounded-full h-2 mb-2">
                          <div 
                            className="progress-bar h-2 rounded-full transition-all duration-300"
                            style={{ backgroundColor: skill.color }}
                            data-percentage={skill.level}
                          ></div>
                        </div>
                        
                        <span className="text-xs text-[var(--foreground-muted)]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Hover Border Effect */}
                      <div 
                        className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-300"
                        style={{ borderColor: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="glass p-8 rounded-2xl border border-[var(--border)] max-w-4xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
              Always Learning, Always Growing
            </h4>
            <p className="text-[var(--foreground-muted)] text-lg leading-relaxed">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development. 
              <span className="text-[var(--primary)] font-semibold"> Innovation never stops</span>, 
              and neither does my passion for learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
