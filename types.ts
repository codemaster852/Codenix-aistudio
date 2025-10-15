import React from 'react';

export enum ModelStatus {
  Working = 'Working',
  Stopped = 'Stopped Working',
  ComingSoon = 'Coming Soon',
}

export interface AIModel {
  id: string;
  name: string;
  description: string;
  status: ModelStatus;
  version: string;
  features: string[];
  logo: React.FC<any>;
  externalUrl?: string;
}

export type ContentPart =
  | { type: 'text'; value: string }
  | { type: 'image'; url: string; alt?: string }
  | { type: 'video'; url: string }
  | { type: 'audio'; url: string }
  | { type: 'link'; url: string; text: string }
  | { type: 'button'; text: string; value: string };

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: ContentPart[];
}

export type Page = 'home' | 'models' | 'docs' | 'about' | 'download' | 'chat';