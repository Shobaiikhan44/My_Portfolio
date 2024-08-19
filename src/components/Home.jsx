import React, { useRef } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import myPic from '../Assets/myPic.png'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Resume from '../Assets/Muhammad_Shoban_FE.pdf';
import myAudio from '../Assets/tone.mp3'; // Add your audio file here

const ResponsiveImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  borderRadius: '50%',
  border: '4px solid #0DFFEB',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '200px',
    margin: '0 auto',
  },
}));

const HomeComponent = () => {
  const audioRef = useRef(null);

  const handleImageClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Box sx={{ marginTop: '0px', padding: { xs: 2, lg: 5 } }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6} order={{ xs: 1, md: 0 }} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="h4" component="div" fontWeight="bold">
            Hello, It's Me
          </Typography>
          <Typography variant="h2" component="div" fontWeight="800">
            M. Shoban
          </Typography>
          <Typography variant="h5" component="div" fontWeight="bold">
            And I'm <span style={{ color: '#0DFFEB' }}>Frontend Developer</span>
          </Typography>
          <Typography variant="body1" component="div" sx={{ mt: 2 }}>
            A certified Front-End Developer from Meta.<br />
            I specialize in creating dynamic, user-friendly,<br />
            and responsive web interfaces using React.js <br /> /Next.js
            with Tailwind CSS & Material UI.<br />
            Passionate about delivering high-quality code and seamless user experiences.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, mt: 2 }}>
            <a href="https://www.linkedin.com/in/muhammad-shoban-9b157324b/" rel="noopener noreferrer" target="_blank">
              <LinkedInIcon sx={{ fontSize: 40, color: '#0DFFEB', transition: 'transform 0.3s', '&:hover': { color: 'white', transform: 'scale(1.05)' } }} />
            </a>
            <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
              <FacebookIcon sx={{ fontSize: 40, color: '#0DFFEB', transition: 'transform 0.3s', '&:hover': { color: 'white', transform: 'scale(1.05)' } }} />
            </a>
            <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
              <InstagramIcon sx={{ fontSize: 40, color: '#0DFFEB', transition: 'transform 0.3s', '&:hover': { color: 'white', transform: 'scale(1.05)' } }} />
            </a>
            <a href="https://github.com/Shobaiikhan44" rel="noopener noreferrer" target="_blank">
              <GitHubIcon sx={{ fontSize: 40, color: '#0DFFEB', transition: 'transform 0.3s', '&:hover': { color: 'white', transform: 'scale(1.05)' } }} />
            </a>
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#0DFFEB",
              color: 'white',
              fontWeight: '800',
              borderRadius: '50px',
              transition: 'transform 0.3s',
              '&:hover': {
                backgroundColor: "#0CCEB7",
                transform: 'scale(1.05)',
              },
            }}
            href={Resume}
            download
          >
            Download CV
          </Button>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 0, md: 1 }} display="flex" justifyContent="center">
          <ResponsiveImage src={myPic} alt="Muhammad Shoban" onClick={handleImageClick} />
        </Grid>
      </Grid>
      <audio ref={audioRef} src={myAudio} />
    </Box>
  );
};

export default HomeComponent;
