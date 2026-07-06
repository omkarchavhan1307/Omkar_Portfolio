import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import professionalImg from '../../assets/Omkar\'s_Professional_Image.png';
import styles from './About.module.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    color: 'var(--accent)',
    skills: ['Python', 'Core Java', 'JavaScript'],
  },
  {
    title: 'Technologies & Frameworks',
    icon: <FaServer />,
    color: 'var(--accent-secondary)',
    skills: ['React.js', 'Next.js', 'Spring Boot', 'REST APIs', 'Machine Learning'],
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    color: 'var(--accent-tertiary)',
    skills: ['SQL (MySQL)', 'NoSQL'],
  },
  {
    title: 'Developer Tools',
    icon: <FaTools />,
    color: 'var(--accent)',
    skills: ['Power BI', 'Git & GitHub', 'Postman', 'Excel'],
  },
];

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.contentGrid}>
          {/* Left: Glass profile container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.profileWrapper}
          >
            <div className={styles.profileFrame}>
              <div className={styles.profileGlass}>
                <div className={styles.avatarPlaceholder}>
                  <img 
                    src={professionalImg} 
                    alt="Omkar Chavhan" 
                    className={styles.avatarImage} 
                  />
                </div>
                <div className={styles.profileInfo}>
                  <h3>Omkar Chavhan</h3>
                  <p>AI & Data Science Student</p>
                  <p className={styles.location}>Alandi, Pune, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.bioWrapper}
          >
            <h3 className={styles.bioTitle}>Designing Smart Solutions through Code</h3>
            <p className={styles.bioText}>
              I am an engineering student at GSM COE Balewadi (SPPU University) a Bachelor of Engineering in Artificial Intelligence and Data Science. I have a strong foundation in modern programming languages like Python, Java, and JavaScript, along with full-stack frameworks like React and Spring Boot.
            </p>
            <p className={styles.bioText}>
              Through hands-on internships at Neu AI Labs and TATA, I have developed solid skills in data visualization (Power BI, Excel), data processing (Pandas, NumPy), and Machine Learning, which enables me to build end-to-end intelligent systems.
            </p>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email:</span>
                <span className={styles.detailValue}>ochavhan02@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Phone:</span>
                <span className={styles.detailValue}>+91 8080085552</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Education:</span>
                <span className={styles.detailValue}>BE in AI & Data Science</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Subsection */}
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>
            Technical <span className="text-gradient">Skills</span>
          </h3>

          <div className={styles.skillsGrid}>
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${styles.skillCard} glass-panel`}
                whileHover={{ y: -5, borderColor: category.color }}
                style={{ '--glow-color': category.color }}
              >
                <div className={styles.cardHeader} style={{ color: category.color }}>
                  {category.icon}
                  <h4>{category.title}</h4>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill) => (
                    <div key={skill} className={styles.skillBadge}>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
