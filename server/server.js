// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schema & Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      // Save to MongoDB
      const newContact = new Contact({ name, email, message });
      await newContact.save();
  
      // Send email via Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,        // your gmail
          pass: process.env.SMTP_PASSWORD      // your gmail app password
        }
      });
  
      const mailOptions = {
        from: email,
        to: 'siddharthprajapati59@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
        `
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ success: true, message: 'Message sent and emailed!' });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
