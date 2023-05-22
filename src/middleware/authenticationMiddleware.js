const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const { API_SECRET } = process.env;

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Authorization token is required' });
  }
  try {
    const decoded = jwt.verify(token, API_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid authorization token' });
  }
};

const authorize = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
};

module.exports = { authenticate, authorize };
