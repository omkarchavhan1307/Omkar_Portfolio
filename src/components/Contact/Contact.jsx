import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './Contact.module.css';

const EMAILJS_SERVICE_ID  = 'service_l48cvsn';
const EMAILJS_TEMPLATE_ID = 'template_budeiek';
const EMAILJS_PUBLIC_KEY  = 'Ztcr2TQMx88uAmk9w';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_l48cvsn',
        'template_budeiek',
        formRef.current,
        'wRlMOmYpyXSZMmuyU'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-clear status after 6 seconds
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.glowBlob} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className={styles.underline} />
        </div>

        <div className={styles.grid}>
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.infoCol}
          >
            <h3 className={styles.infoTitle}>Let's collaborate on something great</h3>
            <p className={styles.infoDesc}>
              Whether you have a question about my projects, want to discuss a potential job opportunity, or just want to connect — feel free to drop a message!
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconBox}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Email</h4>
                  <a href="mailto:ochavhan02@gmail.com" className={styles.infoValue}>
                    ochavhan02@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox} style={{ color: 'var(--accent-secondary)', borderColor: 'rgba(255,0,60,0.2)' }}>
                  <FaPhone />
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Phone</h4>
                  <a href="tel:+918080085552" className={styles.infoValue}>
                    +91 8080085552
                  </a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconBox} style={{ color: 'var(--accent-tertiary)', borderColor: 'rgba(112,0,255,0.2)' }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Location</h4>
                  <span className={styles.infoValue}>Alandi, Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            <div className={styles.socialsWrapper}>
              <h4 className={styles.socialsTitle}>Connect with me</h4>
              <div className={styles.socialIcons}>
                <a href="https://github.com/omkarchavhan1307" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/omkar-chavhan-0627a2258/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Glassmorphic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${styles.formCol} glass-panel`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <div className={`${styles.inputWrapper} ${focused === 'name' ? styles.inputFocused : ''}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. John Doe"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <div className={`${styles.inputWrapper} ${focused === 'email' ? styles.inputFocused : ''}`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="name@example.com"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <div className={`${styles.inputWrapper} ${focused === 'message' ? styles.inputFocused : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                    className={styles.textarea}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${styles.submitBtn} glow-btn`}
              >
                {isSubmitting ? (
                  <span className={styles.loadingDots}>
                    Sending<span>.</span><span>.</span><span>.</span>
                  </span>
                ) : (
                  <>
                    Send Message <FaPaperPlane size={14} style={{ marginLeft: '10px' }} />
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={styles.successMsg}
                >
                  <FaCheckCircle size={18} style={{ marginRight: '10px', flexShrink: 0 }} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={styles.errorMsg}
                >
                  <FaTimesCircle size={18} style={{ marginRight: '10px', flexShrink: 0 }} />
                  Something went wrong. Please try again or email directly.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
