import React from 'react';
import { Page } from '../types';
import { CodeIcon } from './icons';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => {
    const isActive = currentPage === page;
    return (
        <a
            onClick={() => setCurrentPage(page)}
            className={`cursor-pointer transition-colors duration-200 ${isActive ? 'text-brand-text' : 'text-brand-subtext hover:text-brand-text'}`}
        >
            {children}
        </a>
    );
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    return (
        <header className="sticky top-0 z-50 bg-brand-primary/80 backdrop-blur-lg border-b border-brand-border">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a onClick={() => setCurrentPage('home')} className="flex items-center gap-2 cursor-pointer">
                    <CodeIcon className="w-8 h-8 text-brand-accent" />
                    <h1 className="text-2xl font-bold text-brand-text">Codenix AI Studio</h1>
                </a>
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink page="models" currentPage={currentPage} setCurrentPage={setCurrentPage}>Models</NavLink>
                    <NavLink page="docs" currentPage={currentPage} setCurrentPage={setCurrentPage}>Docs</NavLink>
                    <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About</NavLink>
                    <button onClick={() => setCurrentPage('download')} className="bg-brand-accent text-white px-4 py-2 rounded-md hover:bg-brand-accent-hover transition-transform duration-200 hover:scale-105">
                        Download App
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;