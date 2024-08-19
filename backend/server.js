const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // For loading environment variables

const app = express();
const port = 5000;
const messagesFilePath = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

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

// Helper function to save messages to a file
function saveMessageToFile(message) {
  fs.readFile(messagesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    let messages = [];
    if (data) {
      messages = JSON.parse(data);
    }
    messages.push(message);
    fs.writeFile(messagesFilePath, JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      }
    });
  });
}

// Routes
app.post('/api/messages', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Save to file
    saveMessageToFile(newMessage);

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
