import React from 'react';
import { 
  FaReact, 
  FaBootstrap, 
  FaCss3Alt, 
  FaHtml5, 
  FaJs, 
  FaPhp, 
  FaNodeJs,
  FaLinux,
  FaSass,
  FaGitAlt,
  FaWordpress
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMongodb, 
  SiExpress, 
  SiXampp, 
  SiChartdotjs, 
  SiFirebase, 
  SiTailwindcss, 
  SiMui, 
  SiRedux, 
  SiDart, 
  SiAdobeillustrator, 
  SiAdobepremierepro, 
  SiNextdotjs, 
  SiJquery, 
  SiStyledcomponents,
  SiMysql
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "HTML5", icon: FaHtml5, color: "text-orange-600" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
        { name: "Material UI", icon: SiMui, color: "text-blue-500" },
        { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
        { name: "Sass", icon: FaSass, color: "text-pink-500" },
        { name: "Redux", icon: SiRedux, color: "text-purple-600" },
        { name: "jQuery", icon: SiJquery, color: "text-blue-600" },
        { name: "Styled Components", icon: SiStyledcomponents, color: "text-pink-500" }
      ]
    },
    {
      title: "Backend & Database",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "PHP", icon: FaPhp, color: "text-indigo-600" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" }
      ]
    },
    {
      title: "Tools & Others",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "Linux", icon: FaLinux, color: "text-gray-800" },
        { name: "WordPress", icon: FaWordpress, color: "text-blue-600" },
        { name: "XAMPP", icon: SiXampp, color: "text-orange-600" },
        { name: "Chart.js", icon: SiChartdotjs, color: "text-pink-500" },
        { name: "Dart", icon: SiDart, color: "text-blue-600" },
        { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "text-orange-600" },
        { name: "Adobe Premiere Pro", icon: SiAdobepremierepro, color: "text-purple-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Languages and Tools</h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-xl p-8 border border-border shadow-lg">
              <h3 className={`text-2xl font-bold mb-8 text-center bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center group cursor-pointer">
                    <div className="bg-background p-4 rounded-lg shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg border border-border">
                      <skill.icon className={`text-3xl ${skill.color} transition-all duration-300 group-hover:scale-110`} />
                    </div>
                    <span className="mt-2 text-sm font-medium text-card-foreground text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
