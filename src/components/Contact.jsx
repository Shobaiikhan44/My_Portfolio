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
import emailjs from 'emailjs-com';

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
    from_name: '',
    to_name: 'Your Name', // Replace with the recipient's name if needed
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
    tempErrors.from_name = form.from_name ? '' : 'This field is required.';
    tempErrors.message = form.message ? '' : 'This field is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const serviceID = 'default_service';
      const templateID = 'template_h1z3fb5'; // Replace with your actual template ID

      emailjs.sendForm(serviceID, templateID, e.target, 'JGz-t5QE5OqJkztzh') // Replace with your user ID
        .then((result) => {
          setSnackbarMessage('Message sent successfully!');
          setSnackbarSeverity('success');
          setForm({ from_name: '', to_name: 'Your Name', message: '' });
        }, (error) => {
          setSnackbarMessage('Error sending message.');
          setSnackbarSeverity('error');
          console.error('Error:', error);
        }).finally(() => {
          setOpenSnackbar(true);
        });
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
              id="from_name"
              label="Your Name"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              error={!!errors.from_name}
              helperText={errors.from_name}
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
