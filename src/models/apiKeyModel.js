const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  permissions: {
    type: String,
    enum: ['read', 'readwrite'],
    required: true,
  },
});

module.exports = mongoose.model('ApiKey', apiKeySchema);
