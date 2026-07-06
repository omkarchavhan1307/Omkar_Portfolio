import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import professionalImg from '../../assets/Omkar\'s_Professional_Image.png';
import styles from './Hero.module.css';

const titles = [
  'AI & Data Science Student',
  'Full Stack Developer',
  'Data Analyst',
  'Data Visualization Specialist',
];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[titleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at end of text
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx, typingSpeed]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Background ambient glowing blobs */}
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={styles.introCol}
          >
            <span className={styles.greeting}>HELLO WORLD, I'M</span>
            
            <h1 className={styles.name}>
              <span className="text-gradient">Omkar Chavhan</span>
            </h1>

            <div className={styles.typingContainer}>
              <span className={styles.typingLabel}>I build </span>
              <span className={styles.typedText}>{currentText}</span>
              <span className={styles.cursor}>|</span>
            </div>

            <p className={styles.bio}>
              An AI & Data Science engineering student and developer passionate about crafting high-performance, full-stack applications and translating complex data into elegant visual stories. Currently specializing in React.js, Core Java, and Machine Learning.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#contact" className="glow-btn" onClick={handleContactClick}>
                Get In Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1UZxfmJ0s5-npfwOA47TDCBFuaCXh3zMw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn-secondary"
              >
                <FaFileDownload style={{ marginRight: '8px' }} /> Resume
              </a>
            </div>

            <div className={styles.socials}>
              <a 
                href="https://github.com/omkarchavhan1307" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/omkar-chavhan-0627a2258/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a 
                href="mailto:ochavhan02@gmail.com" 
                className={styles.socialIcon}
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right: Holographic Professional Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className={styles.visualCol}
          >
            <div className={styles.visualWrapper}>
              <div className={`${styles.glowingCore} glow-pulse`} />
              <div className={`${styles.glassShield} float-slow`}>
                <div className={styles.imageContainer}>
                  <img 
                    src={professionalImg} 
                    alt="Omkar Chavhan Professional" 
                    className={styles.profileImg}
                  />
                </div>
              </div>
              <div className={`${styles.glassShieldInner} float-reverse`} />
              <div className={`${styles.neonRing} spin-slow`} />
              
              {/* Floating tech badges/mini-elements */}
              <div className={`${styles.floatingNode} ${styles.node1} float-slow`}>React</div>
              <div className={`${styles.floatingNode} ${styles.node2} float-reverse`}>Python</div>
              <div className={`${styles.floatingNode} ${styles.node3} float-slow`}>AI</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
