'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

      // Animate contact cards
      mainTl.from('.contact-card', {
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.5');

      // Animate form
      mainTl.from('.contact-form', {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8');

      // Form field animations
      const formFields = sectionRef.current.querySelectorAll('.form-field');
      if (formFields.length > 0) {
        mainTl.from(formFields, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.5');
      }

      // Submit button animation (separate)
      const submitBtn = sectionRef.current.querySelector('.submit-btn');
      if (submitBtn) {
        mainTl.from(submitBtn, {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }, '-=0.3');
      }

      // Social links animation
      mainTl.from('.social-link', {
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      detail: "aneesliaqat555@gmail.com",
      color: "var(--primary)"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      detail: "Punjab, Pakistan",
      color: "var(--secondary)"
    },
    {
      icon: FaPhone,
      title: "Phone",
      detail: "+92 XXX XXXXXXX",
      color: "var(--accent)"
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: "#", color: "var(--foreground)" },
    { icon: FaLinkedin, href: "#", color: "var(--primary)" },
    { icon: FaTwitter, href: "#", color: "var(--secondary)" }
  ];
  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient"
          >
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-[var(--foreground-muted)] max-w-4xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s collaborate and create 
            <span className="text-[var(--primary)] font-semibold"> something amazing together</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card glass p-8 rounded-2xl border border-[var(--border)] group cursor-pointer">
                <div className="flex items-center gap-6">
                  <div 
                    className="w-16 h-16 rounded-xl glass border border-[var(--border)] flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    style={{ boxShadow: `0 0 20px ${info.color}30` }}
                  >
                    <info.icon 
                      className="text-2xl"
                      style={{ color: info.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{info.title}</h3>
                    <p className="text-[var(--foreground-muted)] text-lg">{info.detail}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* <div className="contact-card glass p-8 rounded-2xl border border-[var(--border)]">
              <h3 className="text-2xl font-bold text-[var(--foreground)] mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link w-14 h-14 rounded-xl glass border border-[var(--border)] flex items-center justify-center hover:scale-110 transition-all duration-300"
                    style={{ boxShadow: `0 0 15px ${social.color}20` }}
                  >
                    <social.icon 
                      className="text-xl"
                      style={{ color: social.color }}
                    />
                  </a>
                ))}
              </div>
            </div> */}
          </div>
          
          {/* Contact Form */}
          <div className="contact-form glass p-8 rounded-2xl border border-[var(--border)]">
            <h3 className="text-3xl font-bold text-[var(--foreground)] mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-3">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 glass border border-[var(--border)] rounded-xl bg-transparent text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300" 
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-3">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 glass border border-[var(--border)] rounded-xl bg-transparent text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300" 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label className="block text-sm font-medium text-[var(--foreground)] mb-3">Subject</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-4 glass border border-[var(--border)] rounded-xl bg-transparent text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300" 
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="block text-sm font-medium text-[var(--foreground)] mb-3">Message</label>
                <textarea 
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 glass border border-[var(--border)] rounded-xl bg-transparent text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all duration-300 resize-none" 
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn w-full py-4 px-8 rounded-xl font-bold text-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{ 
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
                  opacity: 1
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FaPaperPlane className="text-lg" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
