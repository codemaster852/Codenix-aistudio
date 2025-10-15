import React from 'react';

const AboutPage = () => {
    return (
        <section id="about" className="py-20 md:py-24 container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
                    About Codenix AI Studio
                </h2>
                <p className="text-brand-subtext max-w-2xl mx-auto">Innovating at the intersection of creativity and code.</p>
            </div>
            
            <div className="max-w-4xl mx-auto text-lg text-brand-subtext space-y-6 text-left bg-brand-secondary p-10 border border-brand-border rounded-lg">
                <p>
                    <strong>Codenix AI Studio</strong> is an integrated platform designed for developers, creators, and enthusiasts to access our family of AI models. From legacy versions that paved the way, to our current working models and a glimpse into the future, Codenix provides a unified environment for experimentation and development.
                </p>
                <p>
                    Our mission is to democratize access to powerful artificial intelligence. We believe that by providing robust tools, clear documentation, and a seamless user experience, we can empower builders and dreamers to create the applications of tomorrow. Whether you're debugging complex code with Codenix IDE or drafting a novel with Nix 1.5, our studio is your partner in innovation.
                </p>
                <p>
                    We are committed to pushing the boundaries of what's possible, and we're excited to have you join us on this journey.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;