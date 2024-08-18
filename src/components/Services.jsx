import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DescriptionIcon from '@mui/icons-material/Description';

const services = [
  {
    title: 'Frontend Developer',
    description: 'A Front-End Developer with expertise in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. Skilled in designing dynamic and interactive web pages that enhance user experience and engagement.',
    icon: <DeveloperModeIcon style={{ fontSize: 40 }} />,
    link: 'https://www.upwork.com/freelancers/~0103cc8be19a268032',
  },
  {
    title: 'UI/UX Designer',
    description: 'A UI/UX Designer with expertise in creating responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js. Skilled in designing dynamic and interactive web pages that enhance user experience and engagement.',
    icon: <DesignServicesIcon style={{ fontSize: 40 }} />,
    link: 'https://www.upwork.com/freelancers/~0103cc8be19a268032',
  },
  {
    title: 'Resume Writing',
    description: 'Creating standout resumes that effectively highlight your skills and experiences, tailored precisely to your industry and desired role. My expertise ensures your resume makes a lasting impression, significantly enhancing your career opportunities.',
    icon: <DescriptionIcon style={{ fontSize: 40 }} />,
    link: 'https://www.gigfalcon.com/manage-gigs',
  }
];

const Services = () => {
  return (
    <Container sx={{ marginTop: '120px' }}>
      <Typography variant='h4' sx={{
        textAlign: 'center',
        color: '#0DFFEB',
        fontWeight: '800',
        marginBottom: '60px'
      }}>Services</Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              textAlign: 'center',
              borderRadius: '20px',
              padding: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              }
            }}>
              <CardContent>
                <div style={{ color: "#0DFFEB", marginBottom: '8px' }}>
                  {service.icon}
                </div>
                <Typography variant="h5" component="div" fontWeight='800' gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <a href={service.link}>
                  <Button size="small" variant='contained' sx={{
                    backgroundColor: '#0DFFEB',
                    color: 'white',
                    borderRadius: '10px'
                  }}>Read More</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
