import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { BookOpen, Award, Code, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Certificates = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const title1 = { id: "Sertifikat ", en: "My " };
  const title2 = { id: "Saya", en: "Certificates" };
  const placeholderTitle = { id: "Tambah Sertifikat", en: "Add Certificate" };
  const placeholderDesc = { id: "Tambahkan file serifikatmu di sini", en: "Add your certificate file here" };

  // Certificates Data
  const certificates = [
    { id: 1, title: 'Dicoding: Belajar Fundamental Frond End Web Development ', issuer: 'Dicoding Indonesia', date: '2026', type: 'code', image: '/sertifikat/belajar fundamental frond end web development.jpeg' },
    { id: 2, title: 'Dicoding: Belajar Dasar Pemrograman JavaScript', issuer: 'Dicoding Indonesia', date: '2025', type: 'code', image: '/sertifikat/belajar dasar pemrograman javascript.jpeg' },
    { id: 3, title: 'Dicoding: Belajar Membuat Front-End Web untuk Pemula', issuer: 'Dicoding Indonesia', date: '2025', type: 'code', image: '/sertifikat/belajar membuat frond end web unutk pemula.jpeg' },
    { id: 4, title: 'Dicoding: Belajar Penerapan Data Science Dengan Microsoft Fabric', issuer: 'Dicoding Indonesia', date: '2025', type: 'code', image: '/sertifikat/belajar penerapan data science dengan microsoft fabric.jpeg' },
    { id: 5, title: 'Dicoding: Membangun Apliaksi Gen AI Dengan Microsoft Azure', issuer: 'Dicoding Indonesia', date: '2026', type: 'code', image: '/sertifikat/membangun aplikasi gen ai dengan microsoft azure.jpeg' },
    { id: 6, title: 'Dicoding: Memulai Pemrograman Dengan Python', issuer: 'Dicoding Indonesia', date: '2026', type: 'code', image: '/sertifikat/Memulai pemrograman dengan python.jpeg' },
    { id: 7, title: 'Foundations of Web Development: CSS, Bootstrap, JS, React', issuer: 'Udemy', date: '2024', type: 'web', image: '/sertifikat/Udemy.jpg' },
    { id: 8, title: 'RevoU Coding Camp Software Engineer: Developer Tools, Version Control System & Repository, HTML5, CSS Tailwinds, JavaScript', issuer: 'RevoU', date: '2026', type: 'web', image: '/public/sertifikat/Software Engineer .jpeg' },
  ];

  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">{title1[language]}<span className="gradient-text">{title2[language]}</span></h2>
        <div className="cert-grid">
          {certificates.map((cert) => (
            <TiltCard 
              key={cert.id} 
              className="glass-panel cert-card" 
              style={{ cursor: cert.image ? 'pointer' : 'default' }}
              onClick={() => cert.image && setSelectedImage(cert.image)}
            >
               <div className="cert-icon">
                  {cert.type === 'web' ? <BookOpen size={48} /> : cert.type === 'design' ? <Award size={48} /> : <Code size={48} /> }
               </div>
               <h3 className="cert-title">{cert.title}</h3>
               <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
               {cert.image && (
                 <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--accent-1)' }}>
                   ({language === 'id' ? 'Klik untuk melihat' : 'Click to view'})
                 </div>
               )}
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Modal Image Viewer */}
      {selectedImage && (
        <div className="cert-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Certificate Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
