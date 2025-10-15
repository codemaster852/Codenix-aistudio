import React from 'react';
import { Page } from '../types';
import { CodeIcon } from './icons';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page; setCurrentPage: (page: Page) => void; children: React.ReactNode }> = ({ page, setCurrentPage, children }) => (
    <a onClick={() => setCurrentPage(page)} className="text-brand-subtext hover:text-brand-text transition cursor-pointer">
        {children}
    </a>
);


const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    return (
        <footer className="border-t border-brand-border bg-brand-secondary">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        <a onClick={() => setCurrentPage('home')} className="flex items-center gap-2 cursor-pointer mb-4">
                            <CodeIcon className="w-8 h-8 text-brand-accent" />
                            <h1 className="text-2xl font-bold text-brand-text">Codenix AI Studio</h1>
                        </a>
                        <p className="text-brand-subtext text-sm max-w-xs">Your gateway to the next generation of artificial intelligence.</p>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-semibold text-brand-text mb-4">Platform</h4>
                            <ul className="space-y-2">
                                <li><FooterLink page="models" setCurrentPage={setCurrentPage}>Models</FooterLink></li>
                                <li><FooterLink page="download" setCurrentPage={setCurrentPage}>Download</FooterLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-text mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><FooterLink page="docs" setCurrentPage={setCurrentPage}>Docs</FooterLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-brand-text mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><FooterLink page="about" setCurrentPage={setCurrentPage}>About Us</FooterLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-brand-border pt-8 text-center text-brand-subtext text-sm">
                    <p>&copy; {new Date().getFullYear()} Codenix AI Studio. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;