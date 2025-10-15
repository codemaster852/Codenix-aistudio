import React from 'react';

const LogoWrapper: React.FC<{ children: React.ReactNode; props: any }> = ({ children, props }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
      <linearGradient id="logo-gradient-muted" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4B5563" />
        <stop offset="100%" stopColor="#6B7280" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);

export const Nix05Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <LogoWrapper props={props}>
    <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="url(#logo-gradient-muted)" opacity="0.6" />
    <text x="50" y="62" fontSize="28" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">0.5</text>
  </LogoWrapper>
);

export const Nix1Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <LogoWrapper props={props}>
    <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="url(#logo-gradient-muted)" opacity="0.8" />
    <text x="50" y="62" fontSize="28" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">1.0</text>
  </LogoWrapper>
);

export const CodenixIdeLogo: React.FC<any> = (props) => (
  <LogoWrapper props={props}>
    <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" fill="url(#logo-gradient-muted)" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M35.25 26.75L50.5 52l-15.25 25.25m-10.5 0L10.5 52l15.25-25.25m17.5 0l-4.5 46.5"  
        stroke="white" strokeWidth="5" fill="none" transform="scale(0.8) translate(12, -2)"
      />
  </LogoWrapper>
);

export const Nix15Logo: React.FC<any> = (props) => (
    <LogoWrapper props={props}>
        <path 
            d="M85.7,20.05 C91.1,23.25 95,29.15 95,35.7 L95,64.3 C95,70.85 91.1,76.75 85.7,79.95 L58.3,94.95 C52.9,98.15 47.1,98.15 41.7,94.95 L14.3,79.95 C8.9,76.75 5,70.85 5,64.3 L5,45.5 C5,44.5 5.5,43.5 6,42.8 L20,20 Z" 
            fill="url(#logo-gradient)" 
        />
        <text x="51" y="42" fontSize="10" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">CODENIX</text>
        <text x="51" y="72" fontSize="30" fill="white" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">Nix 1.5</text>
        <circle cx="35" cy="28" r="3" fill="white" opacity="0.7" />
        <circle cx="68" cy="25" r="2" fill="white" opacity="0.7" />
        <rect x="30" y="80" width="15" height="3" fill="white" opacity="0.7" rx="1.5" />
        <rect x="50" y="80" width="20" height="3" fill="white" opacity="0.7" rx="1.5" />
    </LogoWrapper>
);

export const Nix2Logo: React.FC<any> = (props) => (
    <LogoWrapper props={props}>
        <circle cx="50" cy="50" r="45" stroke="url(#logo-gradient)" strokeWidth="6" fill="none" />
        <path d="M35 30 L35 70 L45 70 L45 50 L55 70 L65 70 L65 30 L55 30 L55 50 L45 30 Z" fill="url(#logo-gradient)" />
        <text x="50" y="86" fontSize="8" fill="#E5E7EB" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.5">NIX 2 LLM</text>
    </LogoWrapper>
);
