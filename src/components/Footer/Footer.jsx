import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider} />
        
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} <span className={styles.name}>Omkar Chavhan</span>. All rights reserved.
            </p>
          </div>

          <div className={styles.center}>
            <div className={styles.socials}>
              <a href="https://github.com/omkarchavhan1307" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/omkar-chavhan-0627a2258/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:ochavhan02@gmail.com" className={styles.socialIcon} aria-label="Email">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <button className={styles.scrollTopBtn} onClick={scrollToTop} aria-label="Scroll to top">
              Back to Top <FaArrowUp size={12} className={styles.arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
