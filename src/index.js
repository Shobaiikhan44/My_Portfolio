import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/theme';
import { CssBaseline } from '@mui/material'; // Import CssBaseline

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Apply CssBaseline for global styles */}
    <App />
  </ThemeProvider>
);
