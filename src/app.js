const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/hotelRoutes'));
app.use('/api', require('./routes/roomRoutes'));
app.use('/api', require('./routes/apiKeyRoutes'));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
