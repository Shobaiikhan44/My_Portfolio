import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const GlassPaper = styled(Paper)({
  padding: '16px',
 
  backdropFilter: 'blur(10px)',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Education = () => {
  const educationData = [
    {
      degree: 'MCS',
      year: '2022 - 2024',
      institution: 'Virtual University of Pakistan',
    },
    {
      degree: 'ADS',
      year: '2019 - 2021',
      institution: 'University of Punjab',
    },
    {
      degree: 'Intermediate',
      year: '2017 - 2019',
      institution: 'Punjab College of Excellence',
    },
    {
      degree: 'Matriculation',
      year: '2014 - 2016',
      institution: 'High School Hameed',
    },
  ];

  return (
    <Box sx={{ padding: 2, margin: '130px' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#0DFFEB',
          fontWeight: '800',
          marginBottom: '60px',
        }}
      >
        Education
      </Typography>
      <Timeline position="alternate">
        {educationData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="Secondary">
                {item.year}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <GlassPaper elevation={3}>
                <Typography variant="h6"fontWeight={700} component="span">
                  {item.degree}
                </Typography>
                <Typography>{item.institution}</Typography>
              </GlassPaper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default Education;
