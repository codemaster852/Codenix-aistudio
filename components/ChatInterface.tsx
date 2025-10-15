import React, { useState, useRef, useEffect } from 'react';
import { AIModel, Message, ContentPart } from '../types';
import CommandSuggestions from './CommandSuggestions';
import { PaperAirplaneIcon, UserCircleIcon, SparklesIcon } from './icons';
import CodeBlock from './CodeBlock';
import { COMMANDS } from '../constants';

const parseTextForCodeBlocks = (text: string) => {
  const codeBlockRegex = /```(\w+)?\n([\s\S]+?)```/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.substring(lastIndex, match.index) });
    }
    parts.push({ type: 'code', language: match[1] || 'plaintext', content: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.substring(lastIndex) });
  }

  return parts;
};


const ContentPartRenderer: React.FC<{ part: ContentPart, onSendMessage: (prompt: string, type: 'button') => void }> = ({ part, onSendMessage }) => {
  switch (part.type) {
    case 'text':
      const textParts = parseTextForCodeBlocks(part.value);
      return (
        <div>
          {textParts.map((p, i) =>
            p.type === 'code' ? (
              <CodeBlock key={i} className={`language-${p.language}`}>
                {p.content}
              </CodeBlock>
            ) : (
              <p key={i} className="whitespace-pre-wrap">{p.content}</p>
            )
          )}
        </div>
      );
    case 'image':
      return <img src={part.url} alt={part.alt || 'AI generated image'} className="rounded-lg max-w-full h-auto bg-brand-border" />;
    case 'video':
      return <video src={part.url} controls className="rounded-lg max-w-full bg-black" />;
    case 'audio':
      return <audio src={part.url} controls className="w-full" />;
    case 'link':
      return <a href={part.url} target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">{part.text}</a>;
    case 'button':
      return (
        <button
          onClick={() => onSendMessage(part.value, 'button')}
          className="bg-brand-secondary border border-brand-border px-3 py-1 rounded-md text-sm text-brand-text hover:bg-brand-border transition"
        >
          {part.text}
        </button>
      );
    default:
      return null;
  }
};

const ChatMessage: React.FC<{ message: Message, model: AIModel, onSendMessage: (prompt: string, type: 'button') => void }> = ({ message, model, onSendMessage }) => {
  const isUser = message.sender === 'user';
  const ModelLogo = model.logo;
  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="w-8 h-8 flex-shrink-0 bg-brand-secondary rounded-full p-1 border border-brand-border text-brand-text">
          {message.content[0]?.type === 'text' && message.content[0].value === '...' ? <SparklesIcon className="animate-pulse" /> : <ModelLogo />}
        </div>
      )}
      <div
        className={`
          max-w-xl p-4 rounded-xl space-y-2
          ${isUser ? 'bg-brand-accent/90 text-white rounded-br-none' : 'bg-brand-secondary border border-brand-border text-brand-text rounded-bl-none'}
        `}
      >
        {message.content.map((part, index) => (
          <ContentPartRenderer key={index} part={part} onSendMessage={onSendMessage} />
        ))}
      </div>
      {isUser && (
        <div className="w-8 h-8 flex-shrink-0 bg-brand-secondary rounded-full border border-brand-border text-brand-subtext">
          <UserCircleIcon />
        </div>
      )}
    </div>
  );
};

interface ChatInterfaceProps {
  model: AIModel;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (prompt: string, type?: 'button') => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ model, messages, isLoading, onSendMessage }) => {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState(COMMANDS);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.startsWith('/') && !value.includes(' ')) {
        const query = value.substring(1).toLowerCase();
        const filtered = COMMANDS.filter(cmd => cmd.name.toLowerCase().includes(`/${query}`));
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
        setActiveSuggestionIndex(0);
    } else {
        setShowSuggestions(false);
    }
  };
  
  const handleSelectSuggestion = (command: string) => {
    setInput(command + ' ');
    setShowSuggestions(false);
    textareaRef.current?.focus();
  };

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (showSuggestions) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev + 1) % filteredSuggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSuggestionIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelectSuggestion(filteredSuggestions[activeSuggestionIndex].name);
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
      }
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-brand-primary">
      <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} model={model} onSendMessage={onSendMessage} />
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <div className="p-4 md:p-6 border-t border-brand-border bg-brand-primary/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto relative">
          {showSuggestions && (
            <CommandSuggestions 
              suggestions={filteredSuggestions}
              onSelect={handleSelectSuggestion}
              activeIndex={activeSuggestionIndex}
            />
          )}
          <div className="relative flex items-end">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={`Message ${model.name}...`}
              rows={1}
              className="w-full bg-brand-secondary border border-brand-border rounded-lg p-3 pr-12 resize-none text-brand-text placeholder-brand-subtext focus:ring-2 focus:ring-brand-accent focus:outline-none transition"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 bottom-2 p-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-brand-accent hover:bg-brand-accent-hover text-white enabled:hover:scale-110 enabled:transition-transform"
              aria-label="Send message"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;