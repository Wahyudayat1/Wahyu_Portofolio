import React from 'react';
import TiltCard from './TiltCard';
import { listTools } from '../data';
import { useLanguage } from '../LanguageContext';

const Skills = () => {
  const { language } = useLanguage();
  
  const title = {
    id: "Alat & ",
    en: "Tools & "
  };
  const subtitle = {
    id: "Teknologi",
    en: "Technologies"
  };

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">{title[language]}<span className="gradient-text">{subtitle[language]}</span></h2>
        <div className="skills-grid">
          {listTools.map((tool) => (
            <TiltCard key={tool.id} className="glass-panel skill-card">
              <img src={tool.gambar} alt={tool.nama} style={{ pointerEvents: 'none' }} />
              <div>
                <div className="skill-name">{tool.nama}</div>
                <div className="skill-desc">{tool.ket}</div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
