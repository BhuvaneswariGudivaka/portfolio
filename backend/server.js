const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Data:', { name, email, message });
  res.json({ success: true, message: 'Form received successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
