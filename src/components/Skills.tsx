import React from 'react';

const skillGroups = [
  {
    label: '[ Languages ]',
    items: [
      { name: 'Kotlin', note: 'Advanced – Android & KMP' },
      { name: 'Python', note: 'FastAPI, scripting, data analysis' },
      { name: 'JavaScript', note: 'React, Node.js, full-stack' },
      { name: 'Java', note: 'Spring Boot, backend' },
      { name: 'Swift', note: 'iOS, UIKit' },
    ],
  },
  {
    label: '[ Frameworks & Technologies ]',
    items: [
      { name: 'Jetpack Compose', note: 'Modern Android UI' },
      { name: 'Node.js', note: 'REST APIs, backend services' },
      { name: 'FastAPI', note: 'High-performance Python APIs' },
      { name: 'Spring Boot', note: 'Enterprise Java backend' },
      { name: 'React', note: 'Frontend dashboards & SPAs' },
    ],
  },
  {
    label: '[ Databases ]',
    items: [
      { name: 'MongoDB', note: 'Document store, indexing, aggregation' },
      { name: 'PostgreSQL', note: 'Relational, time-series schemas' },
    ],
  },
  {
    label: '[ Tools & Platforms ]',
    items: [
      { name: 'Docker', note: 'Containerization & deployments' },
      { name: 'AWS', note: 'Cloud infrastructure' },
      { name: 'Firebase', note: 'Auth, Firestore, hosting' },
      { name: 'Git / GitHub', note: 'Version control, CI/CD' },
      { name: 'Postman', note: 'API testing & documentation' },
      { name: 'Railway', note: 'Cloud deployments' },
      { name: 'Maven', note: 'Java build tooling' },
      { name: 'Jira', note: 'Agile project management' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-4 text-sm md:text-lg opacity-80">
        <span className="text-green-500">visitor@ozangungor</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <span>./show_skills.sh</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-4 rounded border border-primary/20">
        {skillGroups.map((group, gIdx) => (
          <div key={gIdx}>
            <h3 className="text-white mb-3 font-bold">{group.label}</h3>
            <ul className="space-y-2 opacity-90">
              {group.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary shrink-0 mt-0.5">▸</span>
                  <div>
                    <span className="text-white font-semibold">{item.name}</span>
                    <span className="opacity-50 ml-2 text-xs">{item.note}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Human section */}
        <div className="md:col-span-2 border-t border-primary/10 pt-4 mt-2">
          <h3 className="text-white mb-3 font-bold">[ Human ]</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm opacity-90">
            <div>
              <span className="text-primary">Spoken Languages</span>
              <p className="mt-1 opacity-80">Turkish (Native) · English (Proficient) · Spanish (Beginner)</p>
            </div>
            <div>
              <span className="text-primary">Interests</span>
              <p className="mt-1 opacity-80">American Football · Skating · Running · Hiking · Reading · Guitar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
