import React from 'react';
import TiltCard from './TiltCard';
import { Mail, Code, Link2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  const text = {
    id: {
      title1: "Mari buat sesuatu yang ",
      title2: "luar biasa",
      desc: "Tertarik untuk bekerja sama atau sekedar ingin menyapa? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.",
      email: "Email Saya"
    },
    en: {
      title1: "Let's build something ",
      title2: "amazing",
      desc: "Interested in working together or just want to say hi? Don't hesitate to reach out to me through the contacts below.",
      email: "Email Me"
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <TiltCard className="glass-panel contact-box">
          <div style={{ padding: '2rem' }}>
            <h2>{text[language].title1}<span className="gradient-text">{text[language].title2}</span></h2>
            <p>{text[language].desc}</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wahyukejang70@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Mail size={20} /> {text[language].email}
              </a>
              <a href="https://github.com/Wahyudayat1" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Code size={20} /> Github
              </a>
              <a href="https://www.linkedin.com/in/wahyu-hidayat-120334388/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Link2 size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default Contact;
