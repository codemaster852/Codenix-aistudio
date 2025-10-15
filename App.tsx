import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Dynamically import pages
import HomePage from './pages/HomePage';
import ModelsPage from './pages/ModelsPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import DownloadPage from './pages/DownloadPage';
import ChatPage from './pages/ChatPage';

const pageComponents: { [key in Page]: React.FC<any> } = {
  home: HomePage,
  models: ModelsPage,
  docs: DocsPage,
  about: AboutPage,
  download: DownloadPage,
  chat: ChatPage,
};

interface PageState {
  name: Page;
  props?: Record<string, any>;
}

export default function App() {
  const [pageState, setPageState] = useState<PageState>({ name: 'home' });

  const CurrentPageComponent = pageComponents[pageState.name];

  const handleSetPage = (name: Page, props: Record<string, any> = {}) => {
    setPageState({ name, props });
    window.scrollTo(0, 0); // Scroll to top on page change
  };
  
  const isChatPage = pageState.name === 'chat';

  return (
    <div className="bg-brand-primary min-h-screen flex flex-col">
      {!isChatPage && <Header currentPage={pageState.name} setCurrentPage={handleSetPage} />}
      <main className="flex-grow">
        <CurrentPageComponent {...pageState.props} setCurrentPage={handleSetPage} />
      </main>
      {!isChatPage && <Footer setCurrentPage={handleSetPage} />}
    </div>
  );
}
