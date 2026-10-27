require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));

// 404 for unknown URL
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));