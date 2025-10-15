import React, { useState } from 'react';
import { MODELS } from '../constants';
import { AIModel, ModelStatus, Page } from '../types';
import ModelCard from '../components/ModelCard';
import ModelDetailsModal from '../components/ModelDetailsModal';

interface ModelsPageProps {
    setCurrentPage: (page: Page, props?: Record<string, any>) => void;
}

const ModelsPage: React.FC<ModelsPageProps> = ({ setCurrentPage }) => {
    const [modalModel, setModalModel] = useState<AIModel | null>(null);

    const handleCardClick = (model: AIModel) => {
        setModalModel(model);
    };

    const handleContinueFromModal = () => {
        if (!modalModel) return;

        if (modalModel.externalUrl) {
            window.open(modalModel.externalUrl, '_blank', 'noopener,noreferrer');
        } else if (modalModel.status === ModelStatus.Working) {
            setCurrentPage('chat', { modelId: modalModel.id });
        }
        
        setModalModel(null);
    };
    
    const handleCloseModal = () => {
        setModalModel(null);
    };

    return (
        <>
            <section id="models" className="py-20 md:py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
                        The Models
                    </h2>
                    <p className="text-brand-subtext max-w-2xl mx-auto">Select a model to see its features or start a conversation.</p>
                </div>
            
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {MODELS.map(model => (
                        <ModelCard key={model.id} model={model} onSelect={handleCardClick} isSelected={false} />
                    ))}
                </div>
            </section>
            {modalModel && (
                <ModelDetailsModal
                  model={modalModel}
                  onClose={handleCloseModal}
                  onContinue={handleContinueFromModal}
                />
            )}
        </>
    );
};

export default ModelsPage;
