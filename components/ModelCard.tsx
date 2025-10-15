import React from 'react';
import { AIModel, ModelStatus } from '../types';

interface ModelCardProps {
  model: AIModel;
  onSelect: (model: AIModel) => void;
  isSelected: boolean;
}

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

const ModelCard: React.FC<ModelCardProps> = ({ model, onSelect, isSelected }) => {
  const Logo = model.logo;
  return (
    <div
      className={`
        bg-brand-secondary rounded-xl p-6 flex flex-col text-center
        border transition-all duration-300 transform cursor-pointer
        ${isSelected ? 'border-brand-accent scale-105 shadow-lg' : 'border-brand-border'}
        hover:border-brand-accent-hover hover:-translate-y-1
      `}
      onClick={() => onSelect(model)}
      aria-pressed={isSelected}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(model)}
    >
      <div className="flex-grow">
        <div className="w-20 h-20 mx-auto mb-4 text-brand-text">
            <Logo />
        </div>
        <div className="flex justify-between items-start text-left">
          <h3 className="text-xl font-bold text-brand-text">{model.name}</h3>
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded-full ${getStatusClasses(
              model.status
            )}`}
          >
            {model.status}
          </span>
        </div>
        <p className="text-brand-subtext mt-2 text-sm text-left">{model.description}</p>
      </div>
      <div className="mt-6 text-left">
        <span className="text-xs font-mono text-brand-subtext">Version: {model.version}</span>
      </div>
    </div>
  );
};

export default ModelCard;