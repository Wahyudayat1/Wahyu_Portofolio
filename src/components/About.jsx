import React from 'react';
import TiltCard from './TiltCard';
import { listTools, listProyek } from '../data';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const text = {
    id: {
      title: "Tentang",
      me: "Saya",
      desc1: "Hi, perkenalkan saya",
      desc2: ", seorang IT Support yang terbiasa memperbaiki masalah komputer dan laptop. Selain itu, saya juga seorang Mahasiswa Informatika dan Front-End Developer.",
      desc3: "Dengan pengalaman 3 tahun sebagai IT Support dan minat yang kuat di bidang UI/Web Development, saya memastikan setiap sistem dapat berjalan dengan baik sekaligus menghadirkan antarmuka website yang optimal dan responsif.",
      stats: {
        years: "Tahun Pengalaman",
        projects: "Proyek Selesai",
        tools: "Alat Dikuasai",
        dedication: "Dedikasi"
      }
    },
    en: {
      title: "About",
      me: "Me",
      desc1: "Hi, I am",
      desc2: ", an IT Support professional accustomed to fixing computer and laptop issues. Additionally, I am an Informatics student and Front-End Developer.",
      desc3: "With 3 years of experience in IT Support and a strong passion for UI/Web Development, I ensure systems run smoothly while delivering optimal and responsive website interfaces.",
      stats: {
        years: "Years Experience",
        projects: "Projects Done",
        tools: "Tools Mastered",
        dedication: "Dedication"
      }
    }
  };

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">{text[language].title} <span className="gradient-text">{text[language].me}</span></h2>
        <div className="about-grid">
          <TiltCard className="glass-panel" style={{ padding: '3rem' }}>
            <p className="about-text" style={{ padding: '2rem' }}>
              {text[language].desc1} <strong>Wahyu Hidayat</strong>{text[language].desc2}
              <br/><br/>
              {text[language].desc3}
            </p>
          </TiltCard>
          <div className="about-stats">
            <TiltCard className="glass-panel stat-box">
              <div className="stat-number">3+</div>
              <div className="stat-label">{text[language].stats.years}</div>
            </TiltCard>
            <TiltCard className="glass-panel stat-box">
              <div className="stat-number">{listProyek.length}+</div>
              <div className="stat-label">{text[language].stats.projects}</div>
            </TiltCard>
            <TiltCard className="glass-panel stat-box">
              <div className="stat-number">{listTools.length}+</div>
              <div className="stat-label">{text[language].stats.tools}</div>
            </TiltCard>
            <TiltCard className="glass-panel stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">{text[language].stats.dedication}</div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
