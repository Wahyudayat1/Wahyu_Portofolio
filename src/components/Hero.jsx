import React from 'react';
import Image from '../data';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { language } = useLanguage();

  const text = {
    id: {
      welcome: "Welcome to my universe",
      desc: "Saya adalah seorang IT Support dengan pengalaman selama 3 tahun dalam menangani dan memperbaiki masalah komputer maupun laptop. Selain itu, saya juga sangat tertarik dalam bidang Front-End Development dan pembuatan Website yang dinamis dan fungsional.",
      btnWork: "Lihat Bukti Kerja",
      btnContact: "Hubungi Saya"
    },
    en: {
      welcome: "Welcome to my universe",
      desc: "I am an IT Support professional with 3 years of experience in troubleshooting and repairing computer and laptop issues. Additionally, I am highly passionate about Front-End Development and building dynamic, functional websites.",
      btnWork: "View My Work",
      btnContact: "Contact Me"
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-on-scroll" style={{ animationPlayState: 'running' }}>
          <h2>{text[language].welcome}</h2>
          <h1>Hi, I'm <span className="gradient-text">Wahyu Hidayat</span></h1>
          <p>
            {text[language].desc}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">{text[language].btnWork}</a>
            <a href="#contact" className="btn btn-outline">{text[language].btnContact}</a>
          </div>
        </div>
        <div className="hero-image-container animate-on-scroll" style={{ animationPlayState: 'running', animationDelay: '0.2s' }}>
          <img src={Image.HeroImage} alt="Wahyu Hidayat" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
