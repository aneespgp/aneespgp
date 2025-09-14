'use client';

import React, { useEffect, useRef } from 'react';
import { FaCode, FaLaptopCode, FaQuestionCircle, FaBolt, FaCheckCircle, FaRocket, FaHeart } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { handleNavClick } from '../utils/smoothScroll';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Rapidfire = () => {
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

      // Animate rapidfire items
      mainTl.from('.rapidfire-item', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.5');

      // Animate avatar
      mainTl.from('.avatar-container', {
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=0.8');

      // Rapidfire item hover animations
      document.querySelectorAll('.rapidfire-item').forEach(item => {
        const tl = gsap.timeline({ paused: true });
        const icon = item.querySelector('.rapidfire-icon');
        const glow = item.querySelector('.item-glow');
        
        tl.to(item, {
          x: 10,
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(icon, {
          scale: 1.2,
          rotation: 5,
          duration: 0.3,
          ease: 'back.out(1.7)'
        }, 0)
        .to(glow, {
          opacity: 0.6,
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

        item.addEventListener('mouseenter', () => tl.play());
        item.addEventListener('mouseleave', () => tl.reverse());
      });

      // Floating animation for avatar
      gsap.to('.avatar-container', {
        y: -10,
        rotation: 2,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const rapidfireItems = [
    {
      icon: FaRocket,
      emoji: "🔭",
      title: "I'm currently working on",
      description: "Some exciting private projects & cutting-edge web applications",
      color: "var(--primary)"
    },
    {
      icon: FaLaptopCode,
      emoji: "🌱",
      title: "I'm currently learning",
      description: "Advanced animations, Three.js, and modern development practices",
      color: "var(--secondary)"
    },
    {
      icon: FaQuestionCircle,
      emoji: "💬",
      title: "Ask me about",
      description: "React, Next.js, Node.js, MongoDB, and full-stack development",
      color: "var(--accent)"
    },
    {
      icon: FaCheckCircle,
      emoji: "✔️",
      title: "Current Status",
      description: "Available for freelance projects and exciting opportunities",
      color: "var(--accent)"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="rapidfire" 
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border border-[var(--primary)] opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-[var(--secondary)] opacity-15 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-[var(--accent)] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 border border-[var(--warning)] opacity-12 rounded-lg rotate-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient"
          >
            Quick Facts
          </h2>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-3xl mx-auto">
            Get to know me better with these 
            <span className="text-[var(--primary)] font-semibold"> rapid-fire insights</span> about my journey and passions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Rapidfire Items */}
          <div className="space-y-8">
            {rapidfireItems.map((item, index) => (
              <div key={index} className="rapidfire-item relative group">
                <div className="glass p-6 rounded-2xl border border-[var(--border)] relative overflow-hidden">
                  {/* Item Glow Effect */}
                  <div 
                    className="item-glow absolute inset-0 opacity-0 blur-xl transition-all duration-300"
                    style={{ backgroundColor: item.color + '20' }}
                  ></div>
                  
                  {/* Item Content */}
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="rapidfire-icon flex-shrink-0">
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center glass border border-[var(--border)]"
                        style={{ boxShadow: `0 0 20px ${item.color}30` }}
                      >
                        <item.icon 
                          className="text-2xl"
                          style={{ color: item.color }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-2 flex items-center gap-2">
                        <span className="text-2xl">{item.emoji}</span>
                        {item.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div 
                    className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-300"
                    style={{ borderColor: item.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Avatar Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="avatar-container relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full opacity-20 blur-2xl animate-pulse"></div>
                
                {/* Avatar Border */}
                <div className="absolute inset-4 border-4 border-[var(--primary)] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute inset-8 border-2 border-[var(--secondary)] rounded-full opacity-40"></div>
                
                {/* Avatar Image */}
                <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                    <FaCode className="text-6xl text-white opacity-80" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center floating shadow-lg">
                  <FaRocket className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center floating shadow-lg">
                  <FaHeart className="text-white text-xl" />
                </div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center floating shadow-lg">
                  <FaBolt className="text-white text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass p-8 rounded-2xl border border-[var(--border)] max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
              Want to Know More?
            </h4>
            <p className="text-[var(--foreground-muted)] mb-6 text-lg">
              These are just the highlights! Let&apos;s connect and discuss how we can work together.
            </p>
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary-glow)] cursor-pointer"
            >
              <FaRocket className="text-xl" />
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapidfire;