import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AIModel, Message, ContentPart } from '../types';
import { MicrophoneIcon } from './icons';
import CodeBlock from './CodeBlock';

// Add type definitions for Web Speech API to prevent TypeScript errors.
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const isSpeechRecognitionSupported = !!SpeechRecognition;

const welcomeMessages = ["How can I assist you today?", "What is on your agenda?"];

interface ChatInterfaceProps {
  model: AIModel;
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (prompt: string, type?: 'button') => void;
}

const renderContentPart = (part: ContentPart, index: number, onSendMessage: (prompt: string, type?: 'button') => void) => {
  switch (part.type) {
    case 'text':
      return (
        <ReactMarkdown
            key={index}
            className="prose prose-invert max-w-none prose-p:my-2 prose-h1:my-4 prose-h2:my-3 prose-h3:my-2 prose-pre:bg-transparent prose-pre:p-0"
            remarkPlugins={[remarkGfm]}
            components={{
                code: ({node, inline, className, children, ...props}) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <CodeBlock className={className} {...props}>
                            {String(children).replace(/\n$/, '')}
                        </CodeBlock>
                    ) : (
                        <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded-md font-mono text-sm" {...props}>
                            {children}
                        </code>
                    )
                }
            }}
        >
            {part.value}
        </ReactMarkdown>
      );
    case 'image':
      return <img key={index} src={part.url} alt={part.alt || 'AI generated image'} className="rounded-lg mt-2 max-w-full h-auto" />;
    case 'video':
      return <video key={index} src={part.url} controls className="rounded-lg mt-2 max-w-full" />;
    case 'audio':
      return <audio key={index} src={part.url} controls className="w-full mt-2" />;
    case 'link':
      return <a key={index} href={part.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{part.text}</a>;
    case 'button':
        return <button key={index} onClick={() => onSendMessage(part.value, 'button')} className="mt-2 mr-2 bg-brand-accent text-white px-4 py-2 rounded-md hover:bg-brand-accent-hover transition-colors">{part.text}</button>
    default:
      return null;
  }
}


const ChatInterface: React.FC<ChatInterfaceProps> = ({ model, messages, isLoading, onSendMessage }) => {
  const [prompt, setPrompt] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const welcomeMessage = useMemo(() => welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)], []);
  const hasUserSentMessage = messages.some(msg => msg.sender === 'user');

  useEffect(() => {
    if(hasUserSentMessage) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, hasUserSentMessage]);
  
  useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [prompt]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;
    onSendMessage(prompt);
    setPrompt('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // --- Voice Input Logic ---
  useEffect(() => {
    if (!isSpeechRecognitionSupported) {
      console.log("Speech recognition not supported by this browser.");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    const recognition = recognitionRef.current;
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      setPrompt(finalTranscript + interimTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
      setTimeout(() => {
        if (textareaRef.current?.value.trim()) {
           handleSubmit();
        }
      }, 500);
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };
    
    return () => {
        recognition.stop();
    };

  }, []);

  const toggleListening = () => {
    if (isLoading) return;
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
    setIsListening(!isListening);
  };
  
  const getAiAvatar = () => {
      const Logo = model.logo;
      return (
          <div className="w-10 h-10 rounded-full bg-brand-secondary p-1.5 flex-shrink-0 flex items-center justify-center border border-brand-border">
              <Logo className="w-full h-full" />
          </div>
      )
  }

  return (
    <div className="h-full flex flex-col container mx-auto max-w-4xl">
      <div className="flex-grow overflow-y-auto p-6">
        {!hasUserSentMessage ? (
            <div className="h-full flex flex-col items-center justify-center text-center pb-20">
                <div className="w-24 h-24 mb-4 text-brand-text">
                    <model.logo />
                </div>
                <p className="text-xl text-brand-subtext">{welcomeMessage}</p>
            </div>
        ) : (
            <div className="space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'ai' && getAiAvatar()}
                <div
                  className={`
                    max-w-xl rounded-2xl px-5 py-3
                    ${
                      msg.sender === 'user'
                        ? 'bg-brand-accent text-white rounded-br-none'
                        : 'bg-brand-secondary text-brand-subtext rounded-bl-none'
                    }
                  `}
                >
                  {msg.content[0]?.type === 'text' && msg.content[0]?.value === '...' && isLoading ? (
                      <div className="flex items-center justify-center space-x-1.5">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      </div>
                  ) : (
                    msg.content.map((part, index) => renderContentPart(part, index, onSendMessage))
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="px-6 pb-6 pt-2">
        <form
          onSubmit={handleSubmit}
          className="flex items-end gap-3 bg-brand-secondary border border-brand-border rounded-xl p-2"
        >
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isListening ? 'Listening...' : `Message ${model.name}...`}
            className="flex-grow bg-transparent focus:outline-none resize-none p-2 text-brand-text max-h-48"
            rows={1}
            disabled={isLoading || isListening}
          />
          {isSpeechRecognitionSupported && (
            <button
                type="button"
                onClick={toggleListening}
                disabled={isLoading}
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors
                           ${isListening ? 'bg-red-500/80 text-white animate-pulse' : 'text-brand-subtext hover:bg-brand-border hover:text-brand-text'}
                           disabled:bg-gray-600 disabled:cursor-not-allowed`}
            >
                <MicrophoneIcon className="w-6 h-6" />
            </button>
          )}
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="bg-brand-accent text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                       hover:bg-brand-accent-hover transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;