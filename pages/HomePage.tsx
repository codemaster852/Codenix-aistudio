import React from 'react';
import { Page } from '../types';

const FeatureCard: React.FC<{title: string, description: string}> = ({ title, description }) => (
    <div className="bg-brand-secondary p-6 rounded-lg border border-brand-border">
        <h3 className="text-xl font-bold text-brand-accent">{title}</h3>
        <p className="mt-2 text-brand-subtext">{description}</p>
    </div>
);


const HomePage: React.FC<{ setCurrentPage: (page: Page) => void }> = ({ setCurrentPage }) => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative text-center py-32 md:py-48 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-brand-primary to-brand-primary animate-gradient-bg"></div>
                <div className="absolute inset-0 bg-grid-gray-800/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-primary/80 to-brand-primary"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-text">
                        Welcome to <span className="text-brand-accent">Codenix AI Studio</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-subtext">
                        Your gateway to the next generation of artificial intelligence. Interact, create, and innovate with our powerful suite of AI models.
                    </p>
                    <button onClick={() => setCurrentPage('models')} className="mt-8 bg-brand-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-brand-accent-hover transform hover:scale-105 transition">
                        Explore Models
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 md:py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureCard
                        title="Performance"
                        description="Our models are optimized for speed and efficiency, ensuring low-latency responses for real-time applications."
                    />
                    <FeatureCard
                        title="Versatility"
                        description="From creative writing with Nix 1.5 to complex code generation with Codenix IDE, our models cover a wide range of tasks."
                    />
                    <FeatureCard
                        title="Accessibility"
                        description="With simple webhook integrations and clear documentation, getting started with our AI has never been easier."
                    />
                </div>
            </section>
        </>
    );
};

export default HomePage;