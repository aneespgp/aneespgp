import React from 'react';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <FaCode className="text-3xl text-primary mr-3" />
            <h1 className="text-2xl font-bold text-card-foreground">Anees-ur-Rehman</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-card-foreground hover:text-primary transition-colors duration-200 font-medium">About</a></li>
              <li><a href="#rapidfire" className="text-card-foreground hover:text-primary transition-colors duration-200 font-medium">Rapidfire</a></li>
              <li><a href="#skills" className="text-card-foreground hover:text-primary transition-colors duration-200 font-medium">Skills</a></li>
              <li><a href="#projects" className="text-card-foreground hover:text-primary transition-colors duration-200 font-medium">Projects</a></li>
              <li><a href="#github-stats" className="text-card-foreground hover:text-primary transition-colors duration-200 font-medium">Stats</a></li>
              <li><a href="#contact" className="text-card-foreground hover:text-primary transition-colors duration-200 font-medium">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
