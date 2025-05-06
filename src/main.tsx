import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App.tsx';
import { ThemeProvider } from './app/providers/theme-provider';
import './app/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
