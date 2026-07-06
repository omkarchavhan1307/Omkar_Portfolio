import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import futuremapImg from '../../assets/FUTUREMAP.png';
import bitecraftImg from '../../assets/BITECRAFT.png';
import uberImg from '../../assets/Uber Rides Analysis.jfif';
import libraryImg from '../../assets/Library Management System.png';
import doctorImg from '../../assets/IoT Based Virtual Doctor.jfif';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'FUTUREMAP (AI Career Platform)',
    category: 'Full Stack',
    tags: ['React.js', 'Spring Boot', 'MySQL', 'AI Roadmap', 'REST APIs'],
    description: 'An AI-powered personalized career guidance platform that recommends learning roadmaps, skill development pathways, and career options based on user profiles.',
    points: [
      'Built a full-stack web app with secure auth and RESTful API architecture.',
      'Designed dynamic career roadmap visualizers.',
      'Integrated skill-gap analysis and industry insight modules.',
    ],
    github: 'https://github.com/PrathameshBhagwat/Futuremap',
    live: 'https://futuremap-psi.vercel.app/',
    gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(112, 0, 255, 0.2) 100%)',
    borderColor: 'var(--accent)',
    image: futuremapImg,
  },
  {
    id: 2,
    title: 'BiteCraft (AI Restaurant Automation)',
    category: 'AI/ML',
    tags: ['React.js', 'Chatbot', 'Real-time Tracking', 'Node.js', 'NLP'],
    description: 'A responsive AI-powered restaurant support and ordering platform featuring an interactive chatbot, digital menu, and live order tracking.',
    points: [
      'Developed an AI chatbot to handle FAQs, order status, and reservations.',
      'Created real-time order tracking with dynamic preparation estimates.',
      'Designed an intuitive food ordering and menu browsing interface.',
    ],
    github: 'https://github.com/omkarchavhan1307/Customer_Support_Automation',
    gradient: 'linear-gradient(135deg, rgba(255, 0, 60, 0.2) 0%, rgba(112, 0, 255, 0.2) 100%)',
    borderColor: 'var(--accent-secondary)',
    image: bitecraftImg,
  },
  {
    id: 3,
    title: 'Uber Rides Analysis',
    category: 'Data Science',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    description: 'An in-depth Exploratory Data Analysis (EDA) of Uber ride data to extract mobility patterns, visualize demands, and support operational decision-making.',
    points: [
      'Performed detailed data cleaning and analysis of millions of records.',
      'Identified peak demand hours and high-congestion zones.',
      'Extracted actionable insights to optimize driver dispatching systems.',
    ],
    github: 'https://github.com/PrathameshBhagwat/Uber_Ride_Analysis',
    gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(255, 0, 60, 0.2) 100%)',
    borderColor: 'var(--accent)',
    image: uberImg,
  },
  {
    id: 4,
    title: 'Library Management System',
    category: 'Full Stack',
    tags: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs'],
    description: 'A comprehensive full-stack database management system for issuing, tracking, cataloging, and managing library books and user memberships.',
    points: [
      'Developed responsive UI components using React and styled components.',
      'Built backend REST controllers using Spring Boot and JPA Hibernate.',
      'Optimized database queries and transactions in MySQL.',
    ],
    github: 'https://github.com/omkarchavhan1307/LIB-MNG-SYS',
    gradient: 'linear-gradient(135deg, rgba(255, 0, 60, 0.2) 0%, rgba(112, 0, 255, 0.2) 100%)',
    borderColor: 'var(--accent-secondary)',
    image: libraryImg,
  },
  {
    id: 5,
    title: 'IoT Based Virtual Doctor',
    category: 'IoT',
    tags: ['Arduino Uno', 'C++', 'ESP8266 Wi-Fi Module', 'Sensors'],
    description: 'The IoT-Based Virtual Doctor monitors patient health remotely using sensors and sends real-time vital metrics securely to medical personnel.',
    points: [
      'Integrated IoT sensors to monitor vital signs such as heart rate, body temperature, and oxygen levels.',
      'Developed a virtual doctor alert system to analyze health data and flag emergency conditions.',
    ],
    gradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2) 0%, rgba(255, 0, 60, 0.2) 100%)',
    borderColor: 'var(--accent)',
    image: doctorImg,
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Data Science', 'IoT'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className={styles.underline} />
        </div>

        {/* Filters */}
        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => handleFilterClick(cat)}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className={styles.filterIndicator}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div layout className={styles.projectsGrid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`${styles.projectCard} glass-panel`}
                whileHover={{ y: -6, borderColor: project.borderColor }}
                style={{ '--glow-color': project.borderColor }}
              >
                {/* Visual Header */}
                <div className={styles.cardVisual}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={styles.projectImg} 
                    />
                  ) : (
                    <div 
                      className={styles.visualArt}
                      style={{ background: project.gradient }}
                    >
                      <div className={styles.artCircle1} />
                      <div className={styles.artCircle2} />
                    </div>
                  )}
                  <div className={styles.visualOverlay} />
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  
                  <ul className={styles.bulletsList}>
                    {project.points.slice(0, 2).map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className={styles.tagsContainer}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tagBadge}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className={styles.actions}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.actionBtn}
                      >
                        <FaGithub size={16} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.actionBtnSecondary}
                      >
                        <FaExternalLinkAlt size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
