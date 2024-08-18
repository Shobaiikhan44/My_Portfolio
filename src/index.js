import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme.jsx';
import { CssBaseline } from '@mui/material'; // Import CssBaseline

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* Apply CssBaseline for global styles */}
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
