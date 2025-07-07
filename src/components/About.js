import React from 'react';
import { FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Glad to see you here!</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            I&apos;m a full-stack developer who has turned years of freelancing into a full-time career. Being a full-stack allows me to not only develop client-facing apps and websites but also develop it with cutting edge frontend and backend support.
          </p>
          <br />
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 leading-relaxed">
            I specialize in building robust frontend and backend that do all the remarkable functionalities to your app or website. I love designing systems that are light yet powerful, distributed yet synchronized and beautiful yet effective.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-lg text-center border border-border">
            <FaLaptopCode className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Clean Code</h3>
            <p className="text-card-foreground/70">I write maintainable, scalable code following best practices and modern standards.</p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-lg text-center border border-border">
            <FaRocket className="text-4xl text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Performance</h3>
            <p className="text-card-foreground/70">I optimize applications for speed and efficiency, ensuring great user experiences.</p>
          </div>
          
          <div className="bg-card p-8 rounded-xl shadow-lg text-center border border-border">
            <FaLightbulb className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Innovation</h3>
            <p className="text-card-foreground/70">I stay updated with latest technologies and bring creative solutions to complex problems.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
