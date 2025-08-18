'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          RG
        </div>
        <ul className={styles.navLinks}>
          <li>
            <button onClick={() => scrollToSection('about')} className={styles.navLink}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('education')} className={styles.navLink}>
              Education
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
} 