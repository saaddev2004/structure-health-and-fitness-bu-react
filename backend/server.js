const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - CORS ko specific set kiya
app.use(cors({
  origin: 'https://structure-health-and-fitness-bu-rea.vercel.app', // Vercel ka exact link
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// MongoDB connection - Deprecated warnings remove kar di hain
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api', require('./routes/api'));

// Railway ke liye '0.0.0.0' par listen karna lazmi hai
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});