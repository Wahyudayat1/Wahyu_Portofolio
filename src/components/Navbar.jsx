import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">WH<span className="gradient-text">.</span></a>
        
        {/* Mobile Toggle Only */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>{language === 'id' ? 'Tentang' : 'About'}</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>{language === 'id' ? 'Keahlian' : 'Skills'}</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>{language === 'id' ? 'Proyek' : 'Projects'}</a></li>
          <li><a href="#certificates" onClick={() => setIsOpen(false)}>{language === 'id' ? 'Sertifikat' : 'Certificates'}</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>{language === 'id' ? 'Kontak' : 'Contact'}</a></li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              className="lang-toggle btn-outline" 
              onClick={toggleLanguage}
              style={{ padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', borderRadius: '20px', cursor: 'pointer' }}
            >
              <Globe size={16} />
              {language === 'id' ? 'ID' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
