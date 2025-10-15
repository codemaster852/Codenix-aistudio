import React from 'react';
import { AIModel, ModelStatus } from '../types';
import { XIcon, CheckIcon } from './icons';

const getStatusClasses = (status: ModelStatus) => {
  switch (status) {
    case ModelStatus.Working:
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case ModelStatus.Stopped:
      return 'bg-red-500/10 text-red-400 border-red-500/20';
    case ModelStatus.ComingSoon:
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
  }
};

interface ModelDetailsModalProps {
  model: AIModel;
  onClose: () => void;
  onContinue: () => void;
}

const ModelDetailsModal: React.FC<ModelDetailsModalProps> = ({ model, onClose, onContinue }) => {
  const isActionable = model.status === ModelStatus.Working;
  const Logo = model.logo;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="model-title"
    >
      <div 
        className="bg-brand-secondary border border-brand-border rounded-xl w-full max-w-lg shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-brand-border flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex-shrink-0 text-brand-text">
                <Logo />
            </div>
            <div>
                <h2 id="model-title" className="text-2xl font-bold text-brand-text">{model.name}</h2>
                <span className="text-xs font-mono text-brand-subtext">Version: {model.version}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-brand-subtext hover:text-brand-text" aria-label="Close modal">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
            <div className="flex justify-start mb-4">
                <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
                    model.status
                    )}`}
                >
                    {model.status}
                </span>
            </div>
            <p className="text-brand-subtext mb-6">{model.description}</p>
            
            <h3 className="font-semibold text-brand-text mb-3">Key Features</h3>
            <ul className="space-y-2">
                {model.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-brand-subtext">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="p-6 bg-gray-900/50 border-t border-brand-border rounded-b-xl flex justify-end">
            <button 
                onClick={onContinue}
                disabled={!isActionable}
                className="bg-brand-accent text-white px-6 py-2.5 rounded-md hover:bg-brand-accent-hover transition-transform duration-200 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
            >
                {model.externalUrl ? 'Open IDE' : 'Continue'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsModal;