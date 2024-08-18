// src/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#151925',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});
