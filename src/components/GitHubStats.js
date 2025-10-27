import React from 'react';
import Image from 'next/image';
import { FaGithub, FaEye } from 'react-icons/fa';

const GitHubStats = () => {
  return (
    <section id="github-stats" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-gradient">GitHub Stats</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass rounded-2xl p-8 border border-[var(--border)]">
            <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)] flex items-center">
              <FaGithub className="mr-3 text-[var(--primary)]" />
              GitHub Stats
            </h3>
            <img 
              src="https://github-readme-stats.vercel.app/api?username=aneespgp&show_icons=true&count_private=true&hide_border=true&theme=dark" 
              alt="GitHub Stats" 
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="glass rounded-2xl p-8 border border-[var(--border)]">
            <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)] flex items-center">
              <FaGithub className="mr-3 text-[var(--accent)]" />
              Top Languages
            </h3>
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=aneespgp&hide_border=true&layout=compact&theme=dark" 
              alt="Top Languages" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center glass px-6 py-3 rounded-full border border-[var(--border)]">
            <FaEye className="mr-3 text-[var(--primary)]" />
            <Image 
              src="https://komarev.com/ghpvc/?username=aneespgp&&style=flat-square" 
              alt="Profile Views" 
              width={150}
              height={24}
              className="h-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
