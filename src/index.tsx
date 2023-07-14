import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './components/common/ErrorBoundary';
import ErrorFallback from './components/common/ErrorFallback';
import IssueDetailProvider from './context/detailContext';
import IssuesContextProvider from './context/IssuesContext';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={ErrorFallback}>
      <BrowserRouter>
        <IssuesContextProvider>
          <IssueDetailProvider>
            <App />
          </IssueDetailProvider>
        </IssuesContextProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
