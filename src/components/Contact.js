import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80">
            Have a project in mind? I'd love to hear from you. Let's work together to bring your ideas to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full">
                <FaEnvelope className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">Email</h3>
                <p className="text-card-foreground/70">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border shadow-lg">
              <div className="bg-accent/10 p-4 rounded-full">
                <FaPhone className="text-2xl text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">Phone</h3>
                <p className="text-card-foreground/70">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-card rounded-xl border border-border shadow-lg">
              <div className="bg-primary/10 p-4 rounded-full">
                <FaMapMarkerAlt className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-1">Location</h3>
                <p className="text-card-foreground/70">Your City, Country</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-4 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full p-4 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                <textarea 
                  rows="6"
                  className="w-full p-4 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <FaPaperPlane className="text-lg" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
