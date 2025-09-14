import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode, FaInstagram, FaFacebook, FaDev, FaCodepen, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative glass border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-10 h-10 rounded-lg glass border border-[var(--border)] flex items-center justify-center mr-3">
                <FaCode className="text-xl text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)]">Anees-ur-Rehman</h3>
            </div>
            <p className="text-[var(--foreground-muted)]">
              Full-stack developer creating amazing web experiences with modern technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">About</a>
              <a href="#rapidfire" className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Rapidfire</a>
              <a href="#skills" className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Skills</a>
              <a href="#projects" className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Projects</a>
              <a href="#github-stats" className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Stats</a>
              <a href="#contact" className="block text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-4">Connect</h4>
            <div className="grid grid-cols-4 gap-2 justify-center md:justify-start">
              <a href="https://linkedin.com/in/aneespgp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaLinkedin className="text-[var(--primary)] text-lg" />
              </a>
              <a href="https://github.com/anees-tech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaGithub className="text-[var(--foreground)] text-lg" />
              </a>
              <a href="https://twitter.com/aneespgp_2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaTwitter className="text-[var(--secondary)] text-lg" />
              </a>
              <a href="https://instagram.com/aneespgp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaInstagram className="text-[var(--accent)] text-lg" />
              </a>
              <a href="https://www.facebook.com/aneeesPGP" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaFacebook className="text-[var(--primary)] text-lg" />
              </a>
              <a href="https://dev.to/aneespgp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaDev className="text-[var(--foreground)] text-lg" />
              </a>
              <a href="https://codepen.com/aneespgp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaCodepen className="text-[var(--accent)] text-lg" />
              </a>
              <a href="https://stackoverflow.com/users/14209356" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass border border-[var(--border)] rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
                <FaStackOverflow className="text-[var(--warning)] text-lg" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--border)] mt-8 pt-8 text-center">
          <p className="text-[var(--foreground-muted)] flex items-center justify-center gap-2">
            Made with <FaHeart className="text-[var(--secondary)]" /> by Anees-ur-Rehman © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
