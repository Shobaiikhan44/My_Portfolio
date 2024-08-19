import React, { useState } from 'react';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import HomeComponent from './components/Home';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'projects':
        return <Project />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <HomeComponent />
            <Services />
            <Project />
            <Contact />
          </>
        );
    }
  };

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: { xs: 2, md: 4 } 
        }}
      >
        {renderContent()}
      </Box>
    </div>
  );
};

export default App;
