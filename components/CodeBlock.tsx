import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, ...props }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const codeText = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (match) {
    return (
      <div className="relative bg-gray-900 rounded-md my-4">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-md">
          <span className="text-xs text-gray-400 font-sans">{match[1]}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-green-400" /> Copied!
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4" /> Copy
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code {...props} className={className}>
            {children}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <code {...props} className="bg-gray-800 text-green-400 px-1 py-0.5 rounded-md font-mono text-sm">
      {children}
    </code>
  );
};

export default CodeBlock;