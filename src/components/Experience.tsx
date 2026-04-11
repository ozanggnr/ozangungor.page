import React from 'react';

const experiences = [
  {
    company: 'Wellbees',
    location: 'Istanbul, Turkey',
    role: 'Android Developer Intern',
    dates: 'July 2024 – Aug 2024 \n July 2025 – Sep 2025',
    bullets: [
      'Researched Android application architecture and corporate development workflows.',
      'Studied Jetpack Compose fundamentals and modern Android UI paradigms.',
      'Developed a standalone Android application using Kotlin and Jetpack Compose.',
      'Redesigned existing application screens using Jetpack Compose, improving UI consistency.',
      'Gained hands-on experience with Android dev lifecycle, version control, and team workflows.'
    ]
  },
  {
    company: 'Ziraat Technology',
    location: 'Ankara, Turkey',
    role: 'Software Developer Intern',
    dates: 'Sep 2024 – Dec 2024',
    bullets: [
      'Contributed to the complete redevelopment of a legacy banking web application.',
      'Implemented frontend and backend components as part of a full-stack process.',
      'Participated in technical and business meetings within a corporate banking environment.',
      'Collaborated with cross-functional teams to understand requirements and architecture.',
      'Gained exposure to design, implementation, testing, and deployment stages.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-4 text-sm md:text-lg opacity-80">
        <span className="text-green-500">visitor@ozangungor</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <span>cat experience.txt</span>
      </div>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-primary/30 pl-4 py-1 hover:border-primary transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <div className="text-primary/90">@ {exp.company} <span className="opacity-50 text-sm">[{exp.location}]</span></div>
              </div>
              <div className="opacity-70 text-sm mt-1 md:mt-0 whitespace-pre-line text-right">{exp.dates}</div>
            </div>
            <ul className="list-none space-y-1 mt-2">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex gap-2">
                  <span className="text-primary/50">-</span>
                  <span className="opacity-80">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
