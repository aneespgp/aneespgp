import React from 'react';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaDev, FaCodepen, FaStackOverflow } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 min-h-screen flex flex-col justify-center items-center text-center px-4 relative" role="banner">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl mb-4 text-foreground/80">Hey 👋, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          <span className="text-primary">Anees-ur-Rehman!</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 text-muted font-medium">Full Stack Developer</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-foreground/80">
          I&apos;m a full-stack developer who has turned years of freelancing into a full-time career. 
          I specialize in building robust frontend and backend applications with cutting-edge technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#projects" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            View My Work
          </a>
          <a href="#contact" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Get In Touch
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a href="https://linkedin.com/in/aneespgp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="bg-[#1E77B5] hover:bg-[#1E77B5]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/anees-tech" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="bg-[#24292e] hover:bg-[#24292e]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://twitter.com/aneespgp_2" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="bg-[#00acee] hover:bg-[#00acee]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaTwitter className="text-xl" />
          </a>
          <a href="https://instagram.com/aneespgp" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="bg-[#E4405F] hover:bg-[#E4405F]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://www.facebook.com/aneeesPGP" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="bg-[#2E87FB] hover:bg-[#2E87FB]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaFacebook className="text-xl" />
          </a>
          <a href="https://dev.to/aneespgp" target="_blank" rel="noopener noreferrer" aria-label="Dev.to Profile" className="bg-[#08090A] hover:bg-[#08090A]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaDev className="text-xl" />
          </a>
          <a href="https://codepen.com/aneespgp" target="_blank" rel="noopener noreferrer" aria-label="CodePen Profile" className="bg-[#131417] hover:bg-[#131417]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaCodepen className="text-xl" />
          </a>
          <a href="https://stackoverflow.com/users/14209356" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow Profile" className="bg-[#F28032] hover:bg-[#F28032]/80 text-white p-3 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            <FaStackOverflow className="text-xl" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <FaArrowDown className="text-2xl text-muted" />
      </div>
    </section>
  );
};

export default Hero;
