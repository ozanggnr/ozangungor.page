import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4 text-sm md:text-lg opacity-80">
        <span className="text-green-500">visitor@ozangungor</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <span>./show_skills.sh</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-4 rounded border border-primary/20">
        <div>
          <h3 className="text-white mb-2 font-bold">[ Technical ]</h3>
          <ul className="space-y-2 opacity-90">
            <li><span className="text-primary">Languages</span><br/>Kotlin (Advanced), Java, Python, JavaScript</li>
            <li><span className="text-primary">Frameworks</span><br/>Kotlin Multiplatform, Spring Boot, React</li>
            <li><span className="text-primary">DB & Tools</span><br/>MongoDB, PostgreSQL, Docker, AWS, Git, Postman</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white mb-2 font-bold">[ Human ]</h3>
          <ul className="space-y-2 opacity-90">
            <li><span className="text-primary">Spoken Languages</span><br/>Turkish (Native), English (Proficient), Spanish (Beginner)</li>
            <li><span className="text-primary">Interests</span><br/>Skating, running, hiking, reading, playing guitar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
