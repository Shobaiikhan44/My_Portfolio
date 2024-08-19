import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import HomeComponent from './components/Home';
import Services from './components/Services';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: { xs: 2, md: 4 } 
        }}
      >
        <Routes>
          <Route path="/" element={
            <Box>
              <HomeComponent />
              <Services />
              <Project />
              <Contact />
            </Box>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
