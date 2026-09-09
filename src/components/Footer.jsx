import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Wahyu Hidayat. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>Developed with React + Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
