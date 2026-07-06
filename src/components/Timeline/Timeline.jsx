import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import styles from './Timeline.module.css';

const educationData = [
  {
    degree: 'BE – Artificial Intelligence and Data Science',
    institution: 'GSM COE, Balewadi, Pune, SPPU University',
    date: '2022 – 2026',
    grade: 'SGPA: 8.55',
    details: 'Focused on core AI models, machine learning, data engineering, statistical analysis, and database management systems.',
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Vidya Vikas Mandir, Awasari Bk., Pune',
    date: '2021 – 2022',
    grade: 'Percentage: 67.8%',
    details: 'Studied Science stream with a focus on Mathematics, Physics, and Chemistry.',
  },
  {
    degree: 'SSC (Secondary School Certificate)',
    institution: 'Shri Sangameshwar Vidyalaya, Pargaon (Shingave)',
    date: '2019 – 2020',
    grade: 'Percentage: 89.8%',
    details: 'Completed General Secondary School Education.',
  },
];

const experienceData = [
  {
    role: 'Data Visualization Intern',
    company: 'TATA',
    date: '2024',
    points: [
      'Created insightful, interactive dashboards using Excel and Power BI to track key metrics.',
      'Collaborated closely with data analysts to refine and improve reporting accuracy and performance.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Neu AI Labs, Pune',
    date: '2024',
    points: [
      'Analyzed large Uber ride datasets using Python, Pandas, NumPy, and Matplotlib.',
      'Built automated dashboards and extracted key mobility patterns to improve ride and trip efficiency.',
    ],
  },
  {
    role: 'Grant Assistant & Mobile App Admin',
    company: 'Willpower Group, Pune',
    date: '2023',
    points: [
      'Performed strategic LinkedIn outreach campaigns across 4 countries.',
      'Managed backend records and user database systems for a mobile grant distribution platform.',
    ],
  },
];

const TimelineItem = ({ data, index, type }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}>
      {/* Node Indicator */}
      <motion.div 
        className={styles.timelineNode}
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className={styles.nodeInner}>
          {type === 'education' ? <FaGraduationCap size={16} /> : <FaBriefcase size={16} />}
        </div>
      </motion.div>

      {/* Timeline Card */}
      <motion.div
        className={`${styles.timelineCard} glass-panel`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        whileHover={{ y: -5, boxShadow: type === 'education' ? '0 0 20px rgba(0, 240, 255, 0.15)' : '0 0 20px rgba(255, 0, 60, 0.15)' }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.headerInfo}>
            <h4 className={styles.cardTitle}>{data.degree || data.role}</h4>
            <h5 className={styles.cardSubTitle}>{data.institution || data.company}</h5>
          </div>
          <div className={`${styles.cardDate} ${type === 'education' ? styles.eduDate : styles.expDate}`}>
            <FaCalendarAlt size={12} style={{ marginRight: '6px' }} />
            {data.date}
          </div>
        </div>

        {/* Card Content */}
        <div className={styles.cardBody}>
          {type === 'education' ? (
            <>
              {data.grade && <div className={styles.gradeBadge}>{data.grade}</div>}
              <p className={styles.cardText}>{data.details}</p>
            </>
          ) : (
            <ul className={styles.bulletsList}>
              {data.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const EducationTimeline = () => {
  return (
    <section id="education" className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            My <span className="text-gradient">Education</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} />
          {educationData.map((item, idx) => (
            <TimelineItem key={idx} data={item} index={idx} type="education" />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Work <span className="text-gradient-cyan-purple">Experience</span>
          </h2>
          <div className={styles.underline} style={{ background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-tertiary) 100%)' }} />
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine} />
          {experienceData.map((item, idx) => (
            <TimelineItem key={idx} data={item} index={idx} type="experience" />
          ))}
        </div>
      </div>
    </section>
  );
};
