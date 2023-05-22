const jwt = require('jsonwebtoken');

const apiSecret = process.env.API_SECRET;

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Access denied. Missing token.' });
  }

  try {
    const decoded = jwt.verify(token, apiSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};