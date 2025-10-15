import React from 'react';

const DocsPage = () => {
  return (
    <section id="docs" className="py-20 md:py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
          Documentation
        </h2>
        <p className="text-brand-subtext max-w-2xl mx-auto">Find everything you need to get started with the Codenix AI models.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-brand-secondary p-8 rounded-lg border border-brand-border">
        <article className="prose prose-invert max-w-none prose-h3:text-brand-accent prose-code:text-green-400 prose-code:bg-gray-800 prose-code:p-1 prose-code:rounded-md prose-pre:bg-gray-800">
          <h3>Getting Started Guide</h3>
          <p>
            Welcome to the Codenix AI Studio! To begin, navigate to the "Models" page. From there, you can select any model with a "Working" status. Clicking on a model card will activate the chat interface, connecting you directly to the selected AI.
          </p>

          <h3>Prompt Guide</h3>
          <p>
            The quality of the AI's response is highly dependent on the quality of your prompt. For the best results, follow these guidelines:
          </p>
          <ul>
            <li><strong>Be Specific:</strong> Instead of "write a story", try "write a short sci-fi story about a robot who discovers music".</li>
            <li><strong>Provide Context:</strong> If you're asking a follow-up question, briefly mention the previous context.</li>
            <li><strong>Use Commands (where supported):</strong> Some models may respond to special commands prefixed with a slash. This is the standard format:</li>
          </ul>
          <pre><code>/image A beautiful sunset over the mountains.</code></pre>

          <h3>API and Webhook Usage</h3>
          <p>
            Programmatic access to our models, including Nix 1.5, is available via dedicated API endpoints for subscribers. This allows for seamless integration into your own applications and services.
          </p>
          <p>
            To get your unique API key and access the webhook URL, please refer to the 'API Keys' section in your account dashboard. For enterprise solutions or more information on our paid plans, please contact our sales team.
          </p>
        </article>
      </div>
    </section>
  );
};

export default DocsPage;