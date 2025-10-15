import React, { useState, useEffect, useMemo } from 'react';
import { AIModel, Message, Page, ContentPart } from '../types';
import { MODELS } from '../constants';
import { callNix15Webhook } from '../services/webhookService';
// FIX: Import the gemini service to handle Codenix IDE model
import { generateCodenixIdeResponse } from '../services/geminiService';
import ChatInterface from '../components/ChatInterface';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '../components/icons';

interface ChatPageProps {
  modelId?: string;
  setCurrentPage: (page: Page, props?: Record<string, any>) => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ modelId, setCurrentPage }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  const selectedModel = useMemo(() => {
    return MODELS.find((m) => m.id === modelId);
  }, [modelId]);
  
  const ModelLogo = selectedModel?.logo;

  // Effect for Text-to-Speech
  useEffect(() => {
    if (isVoiceMode && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.sender === 'ai') {
        const textToSpeak = lastMessage.content
          .filter((part) => part.type === 'text')
          .map((part) => (part as { type: 'text'; value: string }).value)
          .join(' ');
        
        if (textToSpeak && textToSpeak !== '...') {
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          speechSynthesis.speak(utterance);
        }
      }
    }
    return () => {
      speechSynthesis.cancel();
    };
  }, [messages, isVoiceMode]);
  
  // Redirect if no model is selected
  useEffect(() => {
    if (!selectedModel) {
      setCurrentPage('models');
    }
  }, [selectedModel, setCurrentPage]);

  const handleSendMessage = async (prompt: string, type?: 'button') => {
    if (!prompt.trim() || isLoading || !selectedModel) return;
    speechSynthesis.cancel();

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      // If the message is from a button click, we show the button's text value as the user's message
      // FIX: Simplified redundant conditional
      content: [{ type: 'text', value: prompt }],
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const aiThinkingMessage: Message = {
      id: `ai-loading-${Date.now()}`,
      sender: 'ai',
      content: [{ type: 'text', value: '...' }],
    };
    setMessages((prev) => [...prev, aiThinkingMessage]);

    try {
      let aiResponseContent: ContentPart[] = [{ type: 'text', value: "Sorry, this model is not configured." }];
      if (selectedModel.id === 'nix-1.5') {
        aiResponseContent = await callNix15Webhook(prompt);
      // FIX: Add logic to handle the Codenix IDE model
      } else if (selectedModel.id === 'codenix-ide') {
        aiResponseContent = await generateCodenixIdeResponse(prompt);
      }
      
      setMessages((prev) => prev.slice(0, -1).concat({
        id: `ai-response-${Date.now()}`,
        sender: 'ai',
        content: aiResponseContent,
      }));

    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages((prev) => prev.slice(0, -1).concat({
        id: `ai-error-${Date.now()}`,
        sender: 'ai',
        content: [{ type: 'text', value: 'An error occurred. Please try again.' }],
      }));
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedModel || !ModelLogo) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen bg-brand-primary">
        <header className="sticky top-0 z-50 bg-brand-primary/80 backdrop-blur-lg border-b border-brand-border">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => setCurrentPage('models')} className="bg-brand-secondary text-brand-text px-4 py-2 rounded-md hover:bg-brand-border transition-colors duration-200">
                    &larr; Back to Models
                </button>
                <div className="flex items-center space-x-4">
                    <div className="text-right">
                        <p className="text-brand-text font-semibold">{selectedModel.name}</p>
                        <p className="text-sm text-brand-subtext">Model Active</p>
                    </div>
                     <div className="w-12 h-12 bg-brand-secondary rounded-full p-2 border border-brand-border">
                        <ModelLogo />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => setIsVoiceMode(prev => !prev)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isVoiceMode ? 'bg-brand-accent text-white' : 'bg-brand-secondary text-brand-subtext hover:bg-brand-border'}`}
                        aria-label={isVoiceMode ? 'Disable Voice Mode' : 'Enable Voice Mode'}
                    >
                        {isVoiceMode ? <SpeakerWaveIcon className="w-6 h-6" /> : <SpeakerXMarkIcon className="w-6 h-6" />}
                    </button>
                </div>
            </nav>
        </header>

        <main className="flex-grow flex-1 overflow-hidden">
            <ChatInterface
                model={selectedModel}
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
            />
        </main>
    </div>
  );
};

export default ChatPage;
