const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const device = require('express-device');
const axios = require('axios');
const ip = require('ip');
require('dotenv').config(); // For loading environment variables

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(device.capture());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contact-form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define message schema and model
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  ip: String,
  device: Object,
  location: Object,
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

// Routes
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;
  const userIp = ip.address();
  const deviceInfo = req.device;

  try {
    // Get user location
    const locationResponse = await axios.get(`https://ipinfo.io/${userIp}/geo`);
    const userData = {
      ip: userIp,
      device: deviceInfo,
      location: locationResponse.data,
    };

    const newMessage = new Message({
      name,
      email,
      message,
      ip: userIp,
      device: deviceInfo,
      location: locationResponse.data,
    });

    await newMessage.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email address
      to: process.env.EMAIL_USER, // Your email address
      replyTo: email, // Reply to the sender's email
      subject: 'New Contact Form Message',
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).send(newMessage);
  } catch (err) {
    res.status(400).send({ error: 'Error saving message' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).send(messages);
  } catch (err) {
    res.status(400).send({ error: 'Error fetching messages' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
