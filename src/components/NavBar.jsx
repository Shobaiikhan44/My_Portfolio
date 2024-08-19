import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const StyledButton = styled(Button)({
  color: 'inherit',
  fontWeight: 'bold',
  gap: '40px',
  transition: 'color 0.3s',
  marginInline: '8px',
  '&:hover': {
    backgroundColor: '#0DFFEB',
    transform: 'scale(1.05)'
  },
});

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 24, fontWeight: 'bold'}}>
        Portfolio.
      </Typography>
      <List>
        {['Home', 'Services', 'Projects', 'Contact'].map((text) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 24, fontWeight: 'bold' }}>
          Portfolio.
        </Typography>
        
        {isMobile ? (
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex' }}>
            <StyledButton component={Link} to="/">Home</StyledButton>
            <StyledButton component={Link} to="/services">Services</StyledButton>
            <StyledButton component={Link} to="/projects">Projects</StyledButton>
            <StyledButton component={Link} to="/contact">Contact</StyledButton>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
