import React from 'react';
import { AIModel, ModelStatus } from './types';
import { Nix05Logo, Nix1Logo, Nix15Logo, Nix2Logo, CodenixIdeLogo } from './components/modelLogos';
import { ImageIcon, SpeakerWaveIcon, VideoIcon, SearchIcon, DocumentIcon, QrCodeIcon } from './components/icons';

export const MODELS: AIModel[] = [
  {
    id: 'codenix-ide',
    name: 'Codenix IDE',
    description: 'The original AI coding assistant, now decommissioned. It provided world-class code generation, explanations, and debugging help.',
    status: ModelStatus.Stopped,
    version: '2.5-pro (Legacy)',
    features: [
      'Code Generation & Completion',
      'Debugging Assistance',
      'Algorithm Explanation',
      'Multi-language Support',
    ],
    logo: CodenixIdeLogo,
  },
  {
    id: 'nix-1.5',
    name: 'Nix 1.5',
    description: 'A versatile and creative model for general-purpose tasks, from writing to conversation.',
    status: ModelStatus.Working,
    version: '1.5.2',
    features: [
      'Natural Language Understanding',
      'Creative Text Generation',
      'Multi-turn Conversation',
      'Basic Reasoning',
    ],
    logo: Nix15Logo,
  },
  {
    id: 'nix-2.0',
    name: 'Nix 2.0',
    description: 'The next generation of creative AI. Features advanced reasoning, multimodality, and enhanced contextual understanding.',
    status: ModelStatus.ComingSoon,
    version: '2.0.0-beta',
    features: [
      'Advanced Multimodal Reasoning',
      'Long-context Understanding',
      'Function Calling & API Integration',
      'Enhanced Safety Features',
    ],
    logo: Nix2Logo,
  },
  {
    id: 'nix-1.0',
    name: 'Nix 1.0',
    description: 'The original large language model that powered the first version of our creative suite.',
    status: ModelStatus.Stopped,
    version: '1.0.8',
    features: [
      'Pioneering Generative Text',
      'Core Conversational AI',
      'Legacy System Integration',
    ],
    logo: Nix1Logo,
  },
  {
    id: 'nix-0.5',
    name: 'Nix 0.5 (Legacy)',
    description: 'The earliest prototype model, now decommissioned. Paved the way for future innovations.',
    status: ModelStatus.Stopped,
    version: '0.5.3',
    features: [
      'Early Research Prototype',
      'Basic Text Generation',
      'Foundation for Nix 1.0',
    ],
    logo: Nix05Logo,
  },
];

export const COMMANDS = [
  { name: '/image', icon: ImageIcon, description: 'Generate an image from a prompt' },
  { name: '/voice', icon: SpeakerWaveIcon, description: 'Generate audio from text' },
  { name: '/video', icon: VideoIcon, description: 'Generate a short video clip' },
  { name: '/veo3', icon: VideoIcon, description: 'Advanced video generation' },
  { name: '/docs', icon: DocumentIcon, description: 'Search documentation' },
  { name: '/search', icon: SearchIcon, description: 'Perform a web search' },
  { name: '/qr', icon: QrCodeIcon, description: 'Create a QR code' },
];