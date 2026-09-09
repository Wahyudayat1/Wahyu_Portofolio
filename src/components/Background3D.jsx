import React from 'react';
import '../index.css';

const Background3D = () => {
    return (
        <div className="calm-background">
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
            <div className="noise-overlay"></div>
        </div>
    );
};

export default Background3D;
