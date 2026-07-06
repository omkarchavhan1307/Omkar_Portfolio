import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTimes, FaSearchPlus, FaExternalLinkAlt } from 'react-icons/fa';

import neuAIImg       from "../../assets/Omkar's_NEUAI_certificate.jpg";
import aiWorkshopImg  from '../../assets/AI_Tools_Workshop_Certificate.png';
import oracleDsImg    from '../../assets/Oracle_Data_Science_Certificate.png';
import oracleGenAIImg from '../../assets/Oracle_GenAI_Certificate.png';
import ethicalHackImg from '../../assets/Ethical_Hacking&Cybersecurity_Certificate.png';

import styles from './Certifications.module.css';

const certificationsData = [
  {
    id: 1,
    title: 'NeuAI Labs Internship Certificate',
    issuer: 'Neu AI Labs, Pune',
    date: '2024',
    glowColor: 'rgba(0, 240, 255, 0.2)',
    accentColor: 'var(--accent)',
    src: neuAIImg,
  },
  {
    id: 2,
    title: 'AI Tools Workshop Certificate',
    issuer: 'Workshop Organizer',
    date: '2024',
    glowColor: 'rgba(255, 0, 60, 0.2)',
    accentColor: 'var(--accent-secondary)',
    src: aiWorkshopImg,
  },
  {
    id: 3,
    title: 'Oracle Data Science Certificate',
    issuer: 'Oracle',
    date: '2024',
    glowColor: 'rgba(112, 0, 255, 0.2)',
    accentColor: 'var(--accent-tertiary)',
    src: oracleDsImg,
  },
  {
    id: 4,
    title: 'Oracle Generative AI Certificate',
    issuer: 'Oracle',
    date: '2024',
    glowColor: 'rgba(0, 240, 255, 0.2)',
    accentColor: 'var(--accent)',
    src: oracleGenAIImg,
  },
  {
    id: 5,
    title: 'Ethical Hacking & Cybersecurity',
    issuer: 'Certification Authority',
    date: '2024',
    glowColor: 'rgba(255, 0, 60, 0.2)',
    accentColor: 'var(--accent-secondary)',
    src: ethicalHackImg,
  },
];

/* ─── Lightbox ─── */
const Lightbox = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <motion.div
      className={styles.lightbox}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.lightboxContent}
        initial={{ scale: 0.85, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.lightboxHeader}>
          <div className={styles.lightboxMeta}>
            <FaAward size={16} style={{ color: cert.accentColor, marginRight: '8px', flexShrink: 0 }} />
            <span className={styles.lightboxTitle}>{cert.title}</span>
            <span className={styles.lightboxIssuer}>&nbsp;— {cert.issuer}</span>
          </div>
          <div className={styles.lightboxActions}>
            <a
              href={cert.src}
              download
              className={styles.openTabBtn}
              title="Download certificate"
            >
              <FaExternalLinkAlt size={14} />
            </a>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close preview">
              <FaTimes size={18} />
            </button>
          </div>
        </div>

        {/* Full image */}
        <div className={styles.lightboxBody}>
          <img src={cert.src} alt={cert.title} className={styles.lightboxImg} />
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Card ─── */
const CertCard = ({ cert, index, onOpen }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`${styles.certCard} glass-panel`}
      style={{ '--glow': cert.glowColor, '--accent-col': cert.accentColor }}
      whileHover={{ y: -6 }}
    >
      {/* Mouse radial glow */}
      <div className={styles.mouseGlow} />

      {/* Thumbnail */}
      <div className={styles.thumb} onClick={() => onOpen(cert)}>
        <img src={cert.src} alt={cert.title} className={styles.thumbImg} />
        <div className={styles.thumbOverlay}>
          <FaSearchPlus size={22} className={styles.zoomIcon} />
          <span>View Certificate</span>
        </div>
      </div>

      {/* Text info */}
      <div className={styles.cardInfo}>
        <div className={styles.cardTop}>
          <div className={styles.iconWrap}>
            <FaAward size={18} />
          </div>
          <span className={styles.certDate}>{cert.date}</span>
        </div>
        <h4 className={styles.certTitle}>{cert.title}</h4>
        <p className={styles.certIssuer}>{cert.issuer}</p>
        <button className={styles.viewBtn} onClick={() => onOpen(cert)}>
          View Certificate <FaExternalLinkAlt size={10} style={{ marginLeft: '6px' }} />
        </button>
      </div>
    </motion.div>
  );
};

/* ─── Section ─── */
const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className={styles.certSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Certifications & <span className="text-gradient">Licenses</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.grid}>
          {certificationsData.map((cert, idx) => (
            <CertCard
              key={cert.id}
              cert={cert}
              index={idx}
              onOpen={(c) => setActiveCert(c)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
