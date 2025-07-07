import React from 'react';
import Image from 'next/image';
import { FaCode, FaLaptopCode, FaQuestionCircle, FaBolt, FaCheckCircle } from 'react-icons/fa';

const Rapidfire = () => {
  return (
    <section id="rapidfire" className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Rapidfire</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaCode className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">🔭 I&apos;m currently working on</h3>
                <p className="text-foreground/80">Some Private Projects😇</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaLaptopCode className="text-2xl text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">🌱 I&apos;m currently learning</h3>
                <p className="text-foreground/80">New technologies like Nuxt JS, Next JS, Flutter.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaQuestionCircle className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">❓ Ask me about</h3>
                <p className="text-foreground/80">Anything related to MERN stack and related technologies.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaBolt className="text-2xl text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">⚡ Fun fact</h3>
                <p className="text-foreground/80">I keep All shift switched on corresponding times.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-2xl text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">✔ Current Status</h3>
                <p className="text-foreground/80">Just minding my own business</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <Image 
                src="https://i.ibb.co/s15mQ8P/pngegg.png" 
                alt="Developer Illustration" 
                width={300}
                height={370}
                className="w-full max-w-xs h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapidfire;
