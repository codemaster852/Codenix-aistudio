import React from 'react';

export const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
  </svg>
);

export const AppleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.8,3.3c-1.3-1.3-3.1-2.1-5-2.1c-1.7,0-3.5,0.8-4.8,2.1c-1.3,1.3-2.1,3-2.1,4.8c0,2,0.8,3.8,2.1,5.1 c1.3,1.3,3.1,2.1,4.8,2.1c0.3,0,0.6,0,0.8-0.1c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0,0.2,0c0.3,0,0.6-0.1,0.8-0.2c-0.2,0.6-0.3,1.1-0.3,1.7 c0,1.5,0.5,2.9,1.5,4c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c1-1.1,1.5-2.5,1.5-4c0-0.6-0.1-1.1-0.3-1.7c0.3,0.1,0.5,0.1,0.8,0.2 c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.3,0,0.5,0,0.8-0.1c1.8,0,3.5-0.8,4.8-2.1c1.3-1.3,2.1-3,2.1-5.1 C20.9,6.3,20.1,4.6,18.8,3.3z M12.8,1.8c1.2-0.2,2.4,0.1,3.3,0.9c-0.9,0.7-1.5,1.8-1.5,3c0,0.2,0,0.3,0.1,0.5 C14.3,6,14,5.8,13.7,5.8c-1.2,0.2-2.3,0.9-2.9,2c-0.6,1.1-0.6,2.4,0,3.5c0.5,0.8,1.3,1.4,2.2,1.6c1.1,0.2,2.2-0.1,3-0.8 c0.1,0.2,0.2,0.3,0.2,0.5c0,1.3-0.6,2.4-1.5,3c-0.8,0.6-1.9,0.8-2.9,0.5c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.2,0 c-0.1,0-0.2,0-0.2,0c-1.1-0.2-2.2-0.7-2.9-1.6c-0.8-0.9-1.2-2.1-1.2-3.3c0-1.5,0.6-2.9,1.6-3.8C10.5,3.6,11.5,2,12.8,1.8z" />
    </svg>
);

export const WindowsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M1,2.8v8.6h9.7V1L1,2.8z M1,12.6v8.6L10.7,23v-9.4H1z M11.8,1v10.6h11.2V-0.2L11.8,1z M11.8,12.6V23l11.2-1.8V12.6H11.8z" />
    </svg>
);

export const LinuxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z M12.5,13.9c-0.2,0.4-0.6,0.8-1,1c-0.4,0.2-0.8,0.3-1.3,0.3c-0.5,0-0.9-0.1-1.3-0.3c-0.4-0.2-0.7-0.5-1-1c-0.2-0.4-0.4-0.8-0.4-1.3c0-0.5,0.1-1,0.4-1.4c0.3-0.4,0.6-0.8,1-1c0.4-0.2,0.8-0.3,1.3-0.3c0.5,0,0.9,0.1,1.3,0.3c0.4,0.2,0.7,0.5,1,1c0.2,0.4,0.4,0.9,0.4,1.4C12.9,13,12.8,13.5,12.5,13.9z M12.5,7.9c-0.2,0.4-0.6,0.8-1,1c-0.4,0.2-0.8,0.3-1.3,0.3c-0.5,0-0.9-0.1-1.3-0.3c-0.4-0.2-0.7-0.5-1-1c-0.2-0.4-0.4-0.8-0.4-1.3c0-0.5,0.1-1,0.4-1.4c0.3-0.4,0.6-0.8,1-1c0.4-0.2,0.8-0.3,1.3-0.3c0.5,0,0.9,0.1,1.3,0.3c0.4,0.2,0.7,0.5,1,1c0.2,0.4,0.4,0.9,0.4,1.4C12.9,7,12.8,7.5,12.5,7.9z" />
    </svg>
);

export const AndroidIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19,8.5h-2.5V6c0-0.8-0.7-1.5-1.5-1.5H9c-0.8,0-1.5,0.7-1.5,1.5v2.5H5c-0.8,0-1.5,0.7-1.5,1.5v6c0,0.8,0.7,1.5,1.5,1.5h14 c0.8,0,1.5-0.7,1.5-1.5v-6C20.5,9.2,19.8,8.5,19,8.5z M7.5,14.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.1,14.5,7.5,14.5z M16.5,14.5c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S17.1,14.5,16.5,14.5z" />
    </svg>
);

export const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
);

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const MicrophoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.75 6.75 0 11-13.5 0v-1.5A.75.75 0 016 10.5z" />
    </svg>
);

export const SpeakerWaveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.348 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
  </svg>
);

export const SpeakerXMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.348 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.945.945 2.56.276 2.56-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.94 12l-2.22 2.22a.75.75 0 101.06 1.06L20 13.06l2.22 2.22a.75.75 0 101.06-1.06L21.06 12l2.22-2.22a.75.75 0 10-1.06-1.06L20 10.94l-2.22-2.22z" />
  </svg>
);