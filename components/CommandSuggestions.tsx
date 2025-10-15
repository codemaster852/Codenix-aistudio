import React from 'react';
import { AIModel } from '../types';

interface CommandSuggestionsProps {
  model: AIModel;
  input: string;
  onSelect: (command: string) => void;
}

interface Command {
  name: string;
  description: string;
  modelIds?: string[];
}

const ALL_COMMANDS: Command[] = [
  { name: '/image', description: 'Generate an image', modelIds: ['nix-2.0'] },
  { name: '/help', description: 'Show available commands' },
];

const CommandSuggestions: React.FC<CommandSuggestionsProps> = ({ model, input, onSelect }) => {
  if (!input.startsWith('/') || input.includes(' ')) {
    return null;
  }

  const suggestions = ALL_COMMANDS.filter(cmd => 
    cmd.name.startsWith(input) &&
    (!cmd.modelIds || cmd.modelIds.includes(model.id))
  );

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute bottom-full mb-2 w-full bg-brand-secondary border border-brand-border rounded-lg shadow-lg p-2 max-h-48 overflow-y-auto z-10">
      <ul>
        {suggestions.map(cmd => (
          <li
            key={cmd.name}
            onClick={() => onSelect(cmd.name + ' ')}
            className="p-2 hover:bg-brand-border rounded-md cursor-pointer flex justify-between items-center"
          >
            <span className="font-mono text-sm text-brand-text">{cmd.name}</span>
            <span className="text-xs text-brand-subtext">{cmd.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandSuggestions;
