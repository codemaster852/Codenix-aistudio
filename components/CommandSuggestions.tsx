import React from 'react';
import { COMMANDS } from '../constants';

type Command = typeof COMMANDS[number];

interface CommandSuggestionsProps {
  suggestions: Command[];
  onSelect: (command: string) => void;
  activeIndex: number;
}

const CommandSuggestions: React.FC<CommandSuggestionsProps> = ({ suggestions, onSelect, activeIndex }) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute bottom-full mb-2 w-full bg-brand-secondary border border-brand-border rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto z-10">
      <ul>
        {suggestions.map((cmd, index) => {
          const Icon = cmd.icon;
          return (
            <li
              key={cmd.name}
              onClick={() => onSelect(cmd.name)}
              className={`p-2 rounded-md cursor-pointer flex items-center gap-3 ${index === activeIndex ? 'bg-brand-border' : 'hover:bg-brand-border/50'}`}
            >
              <Icon className="w-5 h-5 text-brand-subtext" />
              <div>
                <span className="font-mono text-sm text-brand-text">{cmd.name}</span>
                <span className="text-xs text-brand-subtext ml-2">{cmd.description}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommandSuggestions;