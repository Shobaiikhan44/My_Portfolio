import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Snackbar,
  Alert
} from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const FormBox = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = form.name ? '' : 'This field is required.';
    tempErrors.email = form.email ? '' : 'This field is required.';
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email) ? '' : 'Email is not valid.';
    tempErrors.message = form.message ? '' : 'This field is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5000/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (response.ok) {
          setSnackbarMessage('Message sent successfully!');
          setSnackbarSeverity('success');
          setForm({ name: '', email: '', message: '' });
        } else {
          setSnackbarMessage('Error sending message.');
          setSnackbarSeverity('error');
        }
      } catch (error) {
        setSnackbarMessage('Error sending message.');
        setSnackbarSeverity('error');
        console.error('Error:', error);
      } finally {
        setOpenSnackbar(true);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <StyledContainer component="main" maxWidth="md">
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#0DFFEB',
          fontWeight: '800',
          marginBottom: '60px',
        }}
      >
        Contact
      </Typography>
      <FormBox component="form" noValidate onSubmit={handleSubmit}>
        <ResponsiveGrid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#0DFFEB", fontWeight: '700' }}
            >
              Send Message
            </Button>
          </Grid>
        </ResponsiveGrid>
      </FormBox>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default Contact;
