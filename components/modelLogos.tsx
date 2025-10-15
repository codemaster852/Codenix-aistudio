import React from 'react';
import { CodeIcon } from './icons';

export const Nix05Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="gradNixOld" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="url(#gradNixOld)" />
    <text x="50" y="62" fontSize="30" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">0.5</text>
  </svg>
);

export const Nix1Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="gradNixOld" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#4F46E5', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#A855F7', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="url(#gradNixOld)" />
    <text x="50" y="62" fontSize="30" fill="white" textAnchor="middle" fontFamily="monospace" fontWeight="bold">1.0</text>
  </svg>
);

export const CodenixIdeLogo: React.FC<any> = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
    <CodeIcon style={{ width: '80%', height: '80%', color: '#A855F7' }} {...props} />
  </div>
);

export const Nix15Logo: React.FC<any> = (props) => (
    <div {...props} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/Gemini_Generated_Image_mdvqrdmdvqrdmdvq.png" alt="Nix 1.5 Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>
);

export const Nix2Logo: React.FC<any> = (props) => (
    <div {...props} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/nix 2.jpg" alt="Nix 2 LLM Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>
);