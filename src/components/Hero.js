'use client';

import React, { useEffect, useRef } from 'react';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaDev, FaCodepen, FaStackOverflow, FaDownload, FaRocket } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { handleNavClick } from '../utils/smoothScroll';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create floating particles
      const createParticles = () => {
        const particles = [];
        const container = particlesRef.current;
        
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle absolute w-1 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full opacity-60';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          container.appendChild(particle);
          particles.push(particle);
          
          // Animate particles
          gsap.to(particle, {
            y: -100,
            x: (Math.random() - 0.5) * 100,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            delay: Math.random() * 2,
            ease: 'power1.out'
          });
        }
        
        return particles;
      };

      createParticles();

      // Main timeline for entrance animations
      const mainTl = gsap.timeline({ delay: 0.5 });

      // Animate greeting
      mainTl.from('.greeting', {
        opacity: 0,
        y: -30,
        rotationX: -90,
        transformOrigin: 'center bottom',
        duration: 1,
        ease: 'back.out(1.7)'
      });

      // Animate main title with split text effect
      const titleChars = titleRef.current.textContent.split('');
      titleRef.current.innerHTML = titleChars.map(char => 
        char === ' ' ? ' ' : `<span class="char">${char}</span>`
      ).join('');

      mainTl.from('.char', {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: 'center bottom',
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out(1.7)'
      }, '-=0.5');

      // Animate subtitle with typewriter effect
      const subtitleText = subtitleRef.current.textContent;
      subtitleRef.current.textContent = '';
      
      mainTl.call(() => {
        let i = 0;
        const typewriter = () => {
          if (i < subtitleText.length) {
            subtitleRef.current.textContent += subtitleText.charAt(i);
            i++;
            setTimeout(typewriter, 100);
          }
        };
        typewriter();
      }, [], '-=0.3');

      // Animate description
      mainTl.from(descriptionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      }, '-=1');

      // Animate buttons
      mainTl.from('.hero-button', {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.5');

      // Animate social icons
      mainTl.from('.social-icon', {
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3');

      // Animate scroll indicator
      mainTl.from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.2');

      // Continuous floating animation for the whole hero
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Button hover animations
      document.querySelectorAll('.hero-button').forEach(button => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(button, {
          scale: 1.05,
          y: -2,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(button.querySelector('.button-glow'), {
          opacity: 1,
          scale: 1.2,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

        button.addEventListener('mouseenter', () => tl.play());
        button.addEventListener('mouseleave', () => tl.reverse());
      });

      // Social icon hover animations
      document.querySelectorAll('.social-icon').forEach(icon => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.4,
          ease: 'back.out(1.7)'
        });

        icon.addEventListener('mouseenter', () => tl.play());
        icon.addEventListener('mouseleave', () => tl.reverse());
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden"
      role="banner"
    >
      {/* Animated Background */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background-secondary)] to-[var(--background-tertiary)]"></div>
      
      {/* Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[var(--primary)] opacity-20 rotate-45 floating"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-[var(--secondary)] opacity-30 rotate-12 floating"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border border-[var(--accent)] opacity-25 rotate-45 floating"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-[var(--warning)] opacity-15 rotate-12 floating"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Greeting */}
        <div className="greeting mb-6">
          <span className="text-2xl md:text-3xl text-[var(--foreground-muted)] font-light">
            Hey there! 👋 I&apos;m
          </span>
        </div>

        {/* Main Title */}
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gradient leading-tight"
        >
          Anees-ur-Rehman
        </h1>

        {/* Subtitle */}
        <h2 
          ref={subtitleRef}
          className="text-2xl md:text-3xl lg:text-4xl mb-6 text-[var(--primary)] font-semibold tracking-wide"
        >
          Full Stack Developer
        </h2>

        {/* Description */}
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-[var(--foreground-secondary)] leading-relaxed"
        >
          Crafting digital experiences with <span className="text-[var(--primary)] font-semibold">cutting-edge technologies</span>. 
          Specialized in <span className="text-[var(--secondary)] font-semibold">MERN stack</span> development with a passion for 
          <span className="text-[var(--accent)] font-semibold"> innovation</span> and <span className="text-[var(--warning)] font-semibold">clean code</span>.
        </p>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="hero-button relative group px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full text-white font-bold text-lg transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaRocket className="text-xl" />
              View My Work
            </span>
            <div className="button-glow absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 blur-xl transition-all duration-300"></div>
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hero-button relative group px-8 py-4 glass border-2 border-[var(--primary)] rounded-full text-[var(--primary)] font-bold text-lg transition-all duration-300 overflow-hidden hover:text-white cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaDownload className="text-xl" />
              Get In Touch
            </span>
            <div className="button-glow absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
          </a>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { icon: FaLinkedin, href: 'https://linkedin.com/in/aneespgp', color: '#0077B5', label: 'LinkedIn' },
            { icon: FaGithub, href: 'https://github.com/anees-tech', color: '#24292e', label: 'GitHub' },
            { icon: FaTwitter, href: 'https://twitter.com/aneespgp_2', color: '#1DA1F2', label: 'Twitter' },
            { icon: FaInstagram, href: 'https://instagram.com/aneespgp', color: '#E4405F', label: 'Instagram' },
            { icon: FaFacebook, href: 'https://facebook.com/aneespgp', color: '#1877F2', label: 'Facebook' },
            { icon: FaDev, href: 'https://dev.to/aneespgp', color: '#0A0A0A', label: 'Dev.to' },
            { icon: FaCodepen, href: 'https://codepen.io/aneespgp', color: '#000000', label: 'CodePen' },
            { icon: FaStackOverflow, href: 'https://stackoverflow.com/users/aneespgp', color: '#F58025', label: 'Stack Overflow' }
          ].map(({ icon: Icon, href, color, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon relative group p-4 glass rounded-xl transition-all duration-300 hover:scale-110"
              style={{ '--social-color': color }}
            >
              <Icon className="text-2xl text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator flex flex-col items-center">
          <p className="text-[var(--foreground-muted)] mb-4 text-sm">Scroll to explore</p>
          <div className="relative">
            <FaArrowDown className="text-[var(--primary)] text-2xl animate-bounce" />
            <div className="absolute inset-0 bg-[var(--primary)] blur-lg opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-8 text-[var(--primary)] opacity-30 font-mono text-sm floating">
          {`const dev = 'awesome';`}
        </div>
        <div className="absolute top-64 right-12 text-[var(--secondary)] opacity-25 font-mono text-sm floating">
          {`function build() { ... }`}
        </div>
        <div className="absolute bottom-48 left-16 text-[var(--accent)] opacity-20 font-mono text-sm floating">
          {`npm run dev`}
        </div>
        <div className="absolute bottom-72 right-8 text-[var(--warning)] opacity-35 font-mono text-sm floating">
          {`git commit -m "✨ magic"`}
        </div>
      </div>
    </section>
  );
};

export default Hero;