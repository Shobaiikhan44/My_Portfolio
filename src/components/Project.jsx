import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import Cooking_page from '../Assets/Cooking_Page.jpg';
import Business_Website from '../Assets/Business_Website.PNG';
import Little_Lemon from '../Assets/Little_Lemon.png';
import Shoping_page from '../Assets/Shoping_page.jpg';
import Login_Page from '../Assets/Login_Page.png';
import Travel_Agency_Page from '../Assets/travel-agency-free-landing-pageff.jpg';

const CardContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  '&:hover .hoverContent': {
    transform: 'translateY(0)',
    opacity: 1,
  },
});

const HoverContent = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '80%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transform: 'translateY(100%)',
  transition: 'transform 0.3s ease, opacity 0.3s ease',
  padding: '16px',
  boxSizing: 'border-box',
});

const projects = [
  {
    title: 'Business Website',
    image: Business_Website,
    shortDescription: 'Short description of project 1',
    description: 'Detailed description of project 1',
    link: "https://vocal-pudding-3a4dd0.netlify.app",
  },
  {
    title: 'Shoping page',
    image: Shoping_page,
    shortDescription: 'Short description of project 2',
    description: 'Detailed description of project 2',
  },
  {
    title: 'Little Lemon',
    image: Little_Lemon,
    shortDescription: 'Short description of project 3',
    description: 'Detailed description of project 3',
  },
  {
    title: 'Login Page',
    image: Login_Page,
    shortDescription: 'Short description of project 4',
    description: 'Detailed description of project 4',
  },
  {
    title: 'Travel Agency',
    image: Travel_Agency_Page,
    shortDescription: 'Short description of project 5',
    description: 'Detailed description of project 5',
  },
  {
    title: 'Cooking page',
    image: Cooking_page,
    shortDescription: 'Short description of project 6',
    description: 'Detailed description of project 6',
  },
];

const Project = () => {
  return (
    <Container sx={{ marginTop: '150px', maxWidth: '1200px' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#0DFFEB',
          fontWeight: '800',
          marginBottom: '60px',
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardContainer>
              <Card>
                <CardMedia component="img" height="140" image={project.image} alt={project.title} />
                <CardContent >
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.shortDescription}
                  </Typography>
                </CardContent>
                <HoverContent className="hoverContent">
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2" sx={{ marginBottom: '16px' }}>
                    {project.description}
                  </Typography>
                  {project.link && (
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      sx={{
                        fontWeight: '800',
                        color: 'white',
                        backgroundColor: '#0DFFEB',
                        '&:hover': {
                          backgroundColor: '#0ACCCD',
                        },
                      }}
                    >
                      Explore
                    </Button>
                  )}
                </HoverContent>
              </Card>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;
