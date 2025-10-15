import { AIModel, ModelStatus } from './types';
import * as Logos from './components/modelLogos';

export const MODELS: AIModel[] = [
  {
    id: 'nix-0.5',
    name: 'Nix 0.5',
    description: 'The first generation proof-of-concept model. Limited capabilities.',
    status: ModelStatus.Stopped,
    version: '0.5',
    logo: Logos.Nix05Logo,
    features: ['Proof-of-concept', 'Basic text generation', 'Archived'],
  },
  {
    id: 'nix-1',
    name: 'Nix 1',
    description: 'The first public release, known for its creative text generation.',
    status: ModelStatus.Stopped,
    version: '1.0',
    logo: Logos.Nix1Logo,
    features: ['First public release', 'Creative text capabilities', 'Archived'],
  },
  {
    id: 'nix-1.5',
    name: 'Nix 1.5',
    description: 'An improved and optimized version of Nix 1 with faster response times.',
    status: ModelStatus.Working,
    version: '1.5',
    logo: Logos.Nix15Logo,
    features: ['Optimized for speed', 'Enhanced creativity', 'Webhook integration'],
  },
  {
    id: 'codenix-ide',
    name: 'Codenix IDE',
    description: 'A fine-tuned model for code generation, explanation, and debugging. Currently offline.',
    status: ModelStatus.Stopped,
    version: '1.0',
    logo: Logos.CodenixIdeLogo,
    features: ['Code generation & explanation', 'Debugging assistance', 'Currently offline', 'External IDE'],
    externalUrl: 'https://codenix-ide.netlify.app/',
  },
  {
    id: 'nix-2',
    name: 'Nix 2',
    description: 'The next generation of our AI, promising multi-modal capabilities.',
    status: ModelStatus.ComingSoon,
    version: '2.0',
    logo: Logos.Nix2Logo,
    features: ['Next-generation architecture', 'Planned multi-modal support', 'Advanced reasoning'],
  },
];