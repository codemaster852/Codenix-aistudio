import React from 'react';
import { AppleIcon, WindowsIcon, LinuxIcon, AndroidIcon } from '../components/icons';

const DownloadCard: React.FC<{
    icon: React.ReactNode;
    platform: string;
    description: string;
}> = ({ icon, platform, description }) => (
    <div className="bg-brand-secondary border border-brand-border rounded-lg p-8 text-center flex flex-col items-center">
        <div className="text-brand-accent w-16 h-16 mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-brand-text">{platform}</h3>
        <p className="text-brand-subtext mt-2 mb-6 flex-grow">{description}</p>
        <button className="w-full bg-gray-700 text-white px-8 py-3 rounded-full font-semibold text-lg cursor-not-allowed opacity-50">
            Coming Soon
        </button>
    </div>
);


const DownloadPage = () => {
    return (
        <section id="download" className="py-20 md:py-24 container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
                    Download the App
                </h2>
                <p className="text-brand-subtext max-w-2xl mx-auto">
                    Get the best Codenix AI Studio experience with our native desktop application, offering enhanced performance and offline capabilities.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <DownloadCard 
                    icon={<WindowsIcon className="w-full h-full" />}
                    platform="Windows"
                    description="The native Windows app for x64 systems."
                />
                <DownloadCard 
                    icon={<AppleIcon className="w-full h-full" />}
                    platform="macOS"
                    description="Optimized for both Intel and Apple Silicon Macs."
                />
                <DownloadCard 
                    icon={<LinuxIcon className="w-full h-full" />}
                    platform="Linux"
                    description="Available as a .deb package for Debian/Ubuntu."
                />
                <DownloadCard 
                    icon={<AndroidIcon className="w-full h-full" />}
                    platform="Android"
                    description="Get the Codenix experience on the go with our Android app."
                />
            </div>
        </section>
    );
};

export default DownloadPage;
