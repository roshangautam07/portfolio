import styles from "./page.module.css";
import Navigation from "./components/Navigation";
import Image from "next/image";

export default function Home() {
  const skills = [
    { name: "HTML", icon: "html5" },
    { name: "Javascript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "React Native", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Linux", icon: "linux" }
  ];

  const education = [
    {
      period: "2016-2020",
      degree: "Bachelor in Computer Application",
      institution: "NAST"
    },
    {
      period: "2014-2016",
      degree: "High School",
      institution: "Kailali Model College"
    }
  ];

  const experience = [
    {
      period: "September 2021 - Current",
      company: "iMark Digital Pvt. Ltd.",
      role: "Software Developer"
    }
  ];

  const getSkillIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      html5: "M1.5 0l1.364 15.36L12 18l9.136-2.64L22.5 0h-21zm16.2 5.28l-.12 1.344-.12 1.344H7.04l.12 1.344.12 1.344h7.44l-.36 4.032L12 15.072l-2.28-.672-.144-1.632H7.44l.24 2.688 4.32 1.248 4.32-1.248.576-6.432.048-.528.048-.528H7.44l-.12-1.344-.12-1.344h10.38z",
      javascript: "M2 2h20v20H2V2zm9.93 15.39c-.14 0-.28-.04-.4-.12l-1.13-.81c-.19-.13-.23-.39-.1-.57.13-.19.39-.23.57-.1l.97.7.97-.7c.19-.13.44-.09.57.1.13.19.09.44-.1.57l-1.13.81c-.12.08-.26.12-.4.12zm3.36-2.14c-.13-.19-.39-.23-.57-.1l-.97.7-.97-.7c-.19-.13-.44-.09-.57.1-.13.19-.09.44.1.57l1.13.81c.12.08.26.12.4.12s.28-.04.4-.12l1.13-.81c.19-.13.23-.38.1-.57zm-6.36-2.95c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2zm8.5-2.3c-.13-.19-.39-.23-.57-.1l-.97.7-.97-.7c-.19-.13-.44-.09-.57.1-.13.19-.09.44.1.57l1.13.81c.12.08.26.12.4.12s.28-.04.4-.12l1.13-.81c.19-.13.23-.38.1-.57z",
      react: "M12 2c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72C7.61 6.16 5 8.92 5 12c0 3.08 2.61 5.84 6 6.28.6.34 1 .98 1 1.72 0 1.1-.9 2-2 2s-2-.9-2-2c0-.74.4-1.38 1-1.72C4.39 17.84 2 15.08 2 12c0-3.08 2.39-5.84 6-6.28C10.6 5.38 11 4.74 11 4c0-1.1.9-2 2-2zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm7.07-7.07c-.19-.19-.51-.19-.7 0l-.7.7c-.19.19-.19.51 0 .7.19.19.51.19.7 0l.7-.7c.19-.19.19-.51 0-.7zm-14.14 0c-.19.19-.19.51 0 .7l.7.7c.19.19.51.19.7 0 .19-.19.19-.51 0-.7l-.7-.7c-.19-.19-.51-.19-.7 0zm10.61-5.66c-.19-.19-.51-.19-.7 0l-.7.7c-.19.19-.19.51 0 .7.19.19.51.19.7 0l.7-.7c.19-.19.19-.51 0-.7zm-7.78 0c-.19.19-.19.51 0 .7l.7.7c.19.19.51.19.7 0 .19-.19.19-.51 0-.7l-.7-.7c-.19-.19-.51-.19-.7 0zm8.49 8.49c-.19-.19-.51-.19-.7 0l-.7.7c-.19.19-.19.51 0 .7.19.19.51.19.7 0l.7-.7c.19-.19.19-.51 0-.7zm-7.78 0c-.19.19-.19.51 0 .7l.7.7c.19.19.51.19.7 0 .19-.19.19-.51 0-.7l-.7-.7c-.19-.19-.51-.19-.7 0z",
      nodejs: "M12 2l10 6v8l-10 6-10-6V8l10-6zm0 2.18L4 8.09v7.82l8 4.91 8-4.91V8.09l-8-3.91zm0 2.82l6 3.5v7l-6 3.5-6-3.5v-7l6-3.5z",
      mysql: "M21.6 19.2c-1.2-2.4-3.6-4.8-6-6 .4-1.2.8-2.4.8-3.6 0-2.8-2-5.2-4.8-5.2-2.8 0-4.8 2.4-4.8 5.2 0 1.2.4 2.4.8 3.6-2.4 1.2-4.8 3.6-6 6-.4.8.4 1.6 1.2 1.2 2.4-1.2 5.2-2 8-2s5.6.8 8 2c.8.4 1.6-.4 1.2-1.2zM12 13.2c-1.2 0-2.4-.8-2.4-2s1.2-2 2.4-2 2.4.8 2.4 2-1.2 2-2.4 2z",
      postgresql: "M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm2.5-7c0-1.38-1.12-2.5-2.5-2.5S9.5 9.62 9.5 11s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5zm-7 0c0-1.38 1.12-2.5 2.5-2.5S10.5 9.62 10.5 11s-1.12 2.5-2.5 2.5S7 12.38 7 11zm10 0c0-1.38-1.12-2.5-2.5-2.5S13.5 9.62 13.5 11s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5z",
      linux: "M12 2c-2.2 0-4 1.8-4 4 0 1.2.6 2.3 1.5 3-.3.5-.5 1.1-.5 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.6-.2-1.2-.5-1.7.9-.7 1.5-1.8 1.5-3 0-2.2-1.8-4-4-4zm-2 14c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2h-8z"
    };
    return icons[iconName] || icons.javascript;
  };

  return (
    <div className={styles.container}>
      <Navigation />
      
      {/* Hero Section */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <div className={styles.profileImage}>
            <Image
              src="https://avatars.githubusercontent.com/u/61862834?v=4"
              alt="Roshan Gautam"
              width={150}
              height={150}
              className={styles.avatar}
            />
          </div>
          <h1 className={styles.name}>Roshan Gautam</h1>
          <h2 className={styles.title}>Software Developer</h2>
          <p className={styles.quote}>
            "Life may be a meandering path but don't worry about it, rather enjoy it. 
            It is about the journey, not the destination so explore all that comes your way, 
            learn and grow from it, for this journey only happens once."
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/roshangautam07" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.42-1.86-1.42-1.86-1.16-.8.09-.78.09-.78 1.28.09 1.95 1.32 1.95 1.32 1.14 1.95 2.99 1.39 3.72 1.06.12-.83.45-1.39.82-1.71-2.83-.32-5.8-1.42-5.8-6.32 0-1.4.5-2.54 1.32-3.44-.13-.32-.57-1.6.13-3.34 0 0 1.07-.34 3.5 1.3.99-.28 2.05-.42 3.1-.42 1.05 0 2.11.14 3.1.42 2.43-1.64 3.5-1.3 3.5-1.3.7 1.74.26 3.02.13 3.34.82.9 1.32 2.04 1.32 3.44 0 4.91-2.98 6-5.81 6.32.46.4.87 1.19.87 2.4v3.56c0 .34.23.74.88.62C20.13 20.81 24 16.84 24 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/roshan-gautam-a236b636/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section} id="about">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Who I am</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Hello! My name is Roshan Gautam. I'm an aspiring web developer based in Kathmandu.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section} id="skills">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.iconSvg}>
                    <path d={getSkillIcon(skill.icon)} />
                  </svg>
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.section} id="experience">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.educationList}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationPeriod}>{exp.period}</div>
                <div className={styles.educationDetails}>
                  <h3 className={styles.educationDegree}>{exp.role}</h3>
                  <p className={styles.educationInstitution}>{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section} id="education">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            {education.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationPeriod}>{edu.period}</div>
                <div className={styles.educationDetails}>
                  <h3 className={styles.educationDegree}>{edu.degree}</h3>
                  <p className={styles.educationInstitution}>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contact">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <a href="mailto:roshangautam@gautam-roshan.com.np" className={styles.contactLink}>
                roshangautam@gautam-roshan.com.np
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone:</span>
              <a href="tel:+9779848679873" className={styles.contactLink}>
                +977 9848679873
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>GitHub:</span>
              <a 
                href="https://github.com/roshangautam07" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                github.com/roshangautam07
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/in/roshan-gautam-a236b636/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                linkedin.com/in/roshan-gautam-a236b636
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Roshan Gautam. All rights reserved.</p>
      </footer>
    </div>
  );
}
