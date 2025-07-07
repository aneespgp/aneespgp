import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';

const GitHubStats = () => {
  return (
    <section id="github-stats" className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">GitHub Stats</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-card-foreground flex items-center">
              <FaGithub className="mr-2 text-primary" />
              GitHub Stats
            </h3>
            <img 
              src="https://github-readme-stats.vercel.app/api?username=anees-tech&show_icons=true&count_private=true&hide_border=true&theme=dark" 
              alt="GitHub Stats" 
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-card-foreground flex items-center">
              <FaGithub className="mr-2 text-accent" />
              Top Languages
            </h3>
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=anees-tech&hide_border=true&layout=compact&theme=dark" 
              alt="Top Languages" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center bg-card px-6 py-3 rounded-full border border-border shadow-lg">
            <FaEye className="mr-2 text-primary" />
            <img 
              src="https://komarev.com/ghpvc/?username=anees-tech&&style=flat-square" 
              alt="Profile Views" 
              className="h-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
