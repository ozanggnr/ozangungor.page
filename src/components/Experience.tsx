import React from 'react';

const experiences = [
  {
    company: 'Wellbees',
    location: 'Istanbul, Turkey',
    role: 'Android Developer Intern',
    dates: 'July 2024 – Aug 2024\nJuly 2025 – Sep 2025',
    bullets: [
      'Developed Android applications using Kotlin and Jetpack Compose for a real-world corporate product.',
      'Redesigned existing UI screens with modern Compose architecture, improving consistency and UX.',
      'Built new standalone Android features from specification through code review to production.',
      'Worked with Android lifecycle management, state handling, and reactive UI patterns.',
      'Collaborated in a Git-based team development workflow with code reviews and iterative releases.',
    ]
  },
  {
    company: 'Ziraat Technology',
    location: 'Ankara, Turkey',
    role: 'Software Developer Intern',
    dates: 'Sep 2024 – Dec 2024',
    bullets: [
      'Contributed to the full redevelopment of a legacy banking web application in a large enterprise team.',
      'Developed frontend and backend components in a full-stack environment serving millions of users.',
      'Collaborated across teams to understand business requirements and translate them into system design.',
      'Participated in implementation, code review, and system architecture discussions.',
      'Gained exposure to enterprise-grade security standards and deployment practices in banking infrastructure.',
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-4 text-sm md:text-lg opacity-80">
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
