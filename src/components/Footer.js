import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode, FaInstagram, FaFacebook, FaDev, FaCodepen, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <FaCode className="text-2xl text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">Anees-ur-Rehman</h3>
            </div>
            <p className="text-foreground/70">
              Full-stack developer creating amazing web experiences with modern technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-foreground/70 hover:text-primary transition-colors">About</a>
              <a href="#rapidfire" className="block text-foreground/70 hover:text-primary transition-colors">Rapidfire</a>
              <a href="#skills" className="block text-foreground/70 hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="block text-foreground/70 hover:text-primary transition-colors">Projects</a>
              <a href="#github-stats" className="block text-foreground/70 hover:text-primary transition-colors">Stats</a>
              <a href="#contact" className="block text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="grid grid-cols-4 gap-2 justify-center md:justify-start">
              <a href="https://linkedin.com/in/aneespgp" target="_blank" rel="noopener noreferrer" className="bg-[#1E77B5] p-2 rounded hover:opacity-80 transition-opacity">
                <FaLinkedin className="text-white text-lg" />
              </a>
              <a href="https://github.com/anees-tech" target="_blank" rel="noopener noreferrer" className="bg-[#24292e] p-2 rounded hover:opacity-80 transition-opacity">
                <FaGithub className="text-white text-lg" />
              </a>
              <a href="https://twitter.com/aneespgp_2" target="_blank" rel="noopener noreferrer" className="bg-[#00acee] p-2 rounded hover:opacity-80 transition-opacity">
                <FaTwitter className="text-white text-lg" />
              </a>
              <a href="https://instagram.com/aneespgp" target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] p-2 rounded hover:opacity-80 transition-opacity">
                <FaInstagram className="text-white text-lg" />
              </a>
              <a href="https://www.facebook.com/aneeesPGP" target="_blank" rel="noopener noreferrer" className="bg-[#2E87FB] p-2 rounded hover:opacity-80 transition-opacity">
                <FaFacebook className="text-white text-lg" />
              </a>
              <a href="https://dev.to/aneespgp" target="_blank" rel="noopener noreferrer" className="bg-[#08090A] p-2 rounded hover:opacity-80 transition-opacity">
                <FaDev className="text-white text-lg" />
              </a>
              <a href="https://codepen.com/aneespgp" target="_blank" rel="noopener noreferrer" className="bg-[#131417] p-2 rounded hover:opacity-80 transition-opacity">
                <FaCodepen className="text-white text-lg" />
              </a>
              <a href="https://stackoverflow.com/users/14209356" target="_blank" rel="noopener noreferrer" className="bg-[#F28032] p-2 rounded hover:opacity-80 transition-opacity">
                <FaStackOverflow className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-foreground/70 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Anees-ur-Rehman © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
