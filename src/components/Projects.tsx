import React, { useState } from 'react';

const projects = [
  {
    name: 'BestBefore',
    emoji: '🧠',
    tagline: 'AI-Powered Digital Memory Platform',
    tech: ['Kotlin', 'Swift', 'Node.js', 'MongoDB', 'Firebase'],
    github: 'https://github.com/ozanggnr/BestBefore',
    description:
      'A cross-platform mobile application that acts as your personal AI-powered digital memory. BestBefore lets users capture, organize, and semantically search their memories, notes, and media. It leverages AI-driven semantic search so you can find anything by describing it naturally — not just by keyword. Built with a scalable MongoDB backend, Firebase authentication, and native mobile clients in both Kotlin (Android) and Swift (iOS).',
    bullets: [
      'Cross-platform mobile app with native Kotlin (Android) and Swift (iOS) clients',
      'AI semantic search for natural language querying of stored memories',
      'Firebase authentication with secure, user-scoped data access',
      'MongoDB collections with advanced indexing for performant full-text & vector search',
      'Node.js REST API backend with a clean service-layer architecture',
    ],
  },
  {
    name: 'Wolfee Analytics',
    emoji: '📈',
    tagline: 'Financial Market Analysis Platform',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    github: 'https://github.com/ozanggnr/Wolfee-Analytics',
    description:
      'A real-time financial analytics dashboard designed for tracking BIST and global market assets. Wolfee Analytics aggregates live market data from multiple sources, processes it through a FastAPI backend with intelligent caching, and presents it through interactive React dashboards. It monitors 100+ stocks and indices, offering portfolio-level analytics, trend detection, and exportable reports.',
    bullets: [
      'Real-time data aggregation pipeline for 100+ BIST and global market assets',
      'FastAPI backend with Redis-backed caching for low-latency market data serving',
      'PostgreSQL data warehouse with time-series optimized schemas',
      'Interactive React dashboards with live charts, filters, and watchlists',
      'Automated analytics reports for portfolio tracking and market summaries',
    ],
  },
  {
    name: 'Space-Game',
    emoji: '🚀',
    tagline: 'Classic 2D Space Shooter in C++',
    tech: ['C++'],
    github: 'https://github.com/ozanggnr/Space-Game',
    description:
      'A 2D space game built from scratch in C++, using a vector math library for physics and movement calculations. The game features a player-controlled spaceship navigating space, with vector-based motion, projectile mechanics, and collision detection — all implemented without a game engine. A hands-on exploration of C++ fundamentals, 2D coordinate math, and game loop architecture.',
    bullets: [
      'Built entirely in C++ without an external game engine',
      'Vector math library used for 2D physics, movement, and direction calculations',
      'Player-controlled spaceship with vector-based motion and shooting mechanics',
      'Projectile system with trajectory calculations using vector arithmetic',
      'Collision detection and game-state management (start, play, game-over)',
    ],
  },
  {
    name: 'Team-Organizer',
    emoji: '📋',
    tagline: 'Team Playbook & Roster Management App',
    tech: ['Kotlin', 'Android'],
    github: 'https://github.com/ozanggnr/Team-Organizer',
    description:
      'An Android application developed as part of a Mobile Application Development course. Team-Organizer provides coaches and team leads with a digital playbook: manage rosters, assign roles, create play diagrams, and store team strategies — all from a clean, intuitive Android UI. Built with Kotlin following modern Android architecture patterns, using Jetpack components for navigation and data persistence.',
    bullets: [
      'Full Android application built in Kotlin with Jetpack architecture components',
      'Roster management with player profiles, positions, and stats',
      'Play-design canvas for diagramming team strategies',
      'Room database for local persistence of team data',
      'Clean MVVM architecture with ViewModel and LiveData',
    ],
  },
  {
    name: 'Data-Analysis-of-Chess',
    emoji: '♟️',
    tagline: 'Statistical Analysis of Chess Game Data in R',
    tech: ['R'],
    github: 'https://github.com/ozanggnr/Data-Analysis-of-Chess',
    description:
      'A data science team project that mines and analyzes a large dataset of chess games to uncover patterns in player behavior, opening strategies, and game outcomes. Using R and its statistical libraries, the team performed exploratory data analysis, visualized opening move distributions, analyzed win-rate differentials by ELO bracket, and modeled which factors most predict game outcomes.',
    bullets: [
      'Exploratory data analysis on thousands of chess game records',
      'Opening move frequency and win-rate analysis across ELO brackets',
      'Data visualization with ggplot2: heatmaps, distributions, and trend lines',
      'Statistical modeling to identify predictors of game outcomes',
      'Collaborative R Markdown report documenting methodology and findings',
    ],
  },
  {
    name: 'Food-Ordering-System',
    emoji: '🍕',
    tagline: 'Java Desktop Food Ordering Application',
    tech: ['Java'],
    github: 'https://github.com/ozanggnr/Food-Ordering-System-',
    description:
      'A fully Java-based food ordering desktop application developed for a Java programming course. Built with a Java UI, it replicates the experience of modern food ordering apps — browsing menus, selecting items, managing a cart, and placing orders — all within a native Java interface. The project demonstrates object-oriented design, event-driven UI programming, and application state management in pure Java.',
    bullets: [
      'Desktop food ordering app built entirely in Java with a Java UI',
      'Menu browsing by category with item listing and selection',
      'Shopping cart with item management and order total calculation',
      'Order placement flow mimicking real-world food ordering apps',
      'Object-oriented architecture with clean separation of UI, logic, and data layers',
    ],
  },
  {
    name: 'IOS-MenuApp',
    emoji: '🍽️',
    tagline: 'Native iOS Restaurant Menu Application',
    tech: ['Swift', 'iOS', 'UIKit'],
    github: 'https://github.com/ozanggnr/IOS-MenuApp',
    description:
      'A native iOS application built in Swift for an iOS development course. The MenuApp presents a beautifully designed restaurant menu with categories, item descriptions, photos, and pricing. It applies iOS design principles — table views, navigation controllers, and custom cells — to create a seamless, native-feeling user experience that follows Apple\'s Human Interface Guidelines.',
    bullets: [
      'Native Swift application following Apple Human Interface Guidelines',
      'UITableView-based menu with dynamic categories and custom cells',
      'Detail screens with item descriptions, photos, and pricing info',
      'UINavigationController for intuitive, hierarchical navigation',
      'Structured data model layer separating UI from menu content logic',
    ],
  },
];

const techColors: Record<string, string> = {
  Kotlin: 'text-purple-400',
  Swift: 'text-orange-400',
  'Node.js': 'text-green-400',
  MongoDB: 'text-green-500',
  Firebase: 'text-yellow-400',
  Python: 'text-blue-400',
  FastAPI: 'text-teal-400',
  React: 'text-cyan-400',
  PostgreSQL: 'text-blue-500',
  'C++': 'text-red-400',
  Android: 'text-green-400',
  R: 'text-blue-300',
  Java: 'text-orange-500',
  HTML: 'text-orange-300',
  CSS: 'text-blue-300',
  iOS: 'text-gray-300',
  UIKit: 'text-indigo-400',
};

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mb-10">
      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-4 text-sm md:text-lg opacity-80">
        <span className="text-green-500">visitor@ozangungor</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <span>ls -la ./projects/</span>
      </div>

      <div className="space-y-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-primary/20 rounded hover:border-primary/60 transition-all duration-300 bg-white/[0.02]"
          >
            {/* Header row — always visible, click to expand */}
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full text-left p-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group"
            >
              <span className="text-xl">{project.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className="text-white font-bold text-lg group-hover:text-primary transition-colors">
                  {project.name}
                </span>
                <span className="opacity-50 text-sm ml-3">{project.tagline}</span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-xs font-mono px-2 py-0.5 rounded border border-white/10 bg-white/5 ${techColors[t] ?? 'text-primary'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-primary/50 text-sm ml-2 shrink-0">
                {expanded === idx ? '[-]' : '[+]'}
              </span>
            </button>

            {/* Expandable body */}
            {expanded === idx && (
              <div className="px-4 pb-4 border-t border-primary/10">
                <p className="mt-3 opacity-80 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {project.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex gap-2 text-sm opacity-75">
                      <span className="text-primary/50 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block mt-4 text-primary/70 hover:text-primary text-sm underline underline-offset-4 transition-colors"
                >
                  → View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
