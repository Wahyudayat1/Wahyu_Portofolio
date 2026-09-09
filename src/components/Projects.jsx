import React from 'react';
import TiltCard from './TiltCard';
import { listProyek } from '../data';
import { useLanguage } from '../LanguageContext';

const Projects = () => {
  const { language } = useLanguage();

  const title1 = { id: "Proyek ", en: "Featured " };
  const title2 = { id: "Unggulan", en: "Projects" };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">{title1[language]}<span className="gradient-text">{title2[language]}</span></h2>
        <div className="projects-grid">
          {listProyek.map((project) => (
            <TiltCard 
              key={project.id} 
              className="glass-panel project-card"
              style={{ cursor: project.link ? 'pointer' : 'default' }}
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="project-img-wrapper" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <img src={project.gambar} alt={project.nama} className="project-img" style={{ pointerEvents: 'none' }} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.nama}</h3>
                <p className="project-desc">{project.desk}</p>
                <div className="project-tags" style={{ marginBottom: project.link ? '1rem' : '0' }}>
                  {project.tools.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <div style={{ marginTop: 'auto', fontSize: '0.9rem', color: 'var(--accent-1)', fontWeight: 'bold' }}>
                    {language === 'id' ? '👉 Klik untuk melihat website' : '👉 Click to visit website'}
                  </div>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
