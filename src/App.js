import React from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import HomeComponent from './components/Home';
import Services from './components/Services';
import Project from './components/Project';

const App = () => {
  return (
    <div>
      <NavBar />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: { xs: 2, md: 4 } 
        }}
      >
        <HomeComponent />
        <Services />
        <Project />
      </Box>
    </div>
  );
};

export default App;
