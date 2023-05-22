const ApiKey = require('../models/apiKeyModel');

// GET /apikeys - Returns a list of all API keys
exports.getAllApiKeys = async (req, res, next) => {
  try {
    const apiKeys = await ApiKey.find();
    res.status(200).json(apiKeys);
  } catch (err) {
    next(err);
  }
};

// GET /apikeys/{key_id} - Returns details for a specific API key
exports.getApiKeyById = async (req, res, next) => {
  try {
    const apiKey = await ApiKey.findById(req.params.key_id);
    if (!apiKey) {
      return res.status(404).json({ error: 'API key not found' });
    }
    res.status(200).json(apiKey);
  } catch (err) {
    next(err);
  }
};

// POST /apikeys - Creates a new API key
exports.createApiKey = async (req, res, next) => {
  try {
    const apiKey = await ApiKey.create(req.body);
    res.status(201).json(apiKey);
  } catch (err) {
    next(err);
  }
};

// DELETE /apikeys/{key_id} - Deletes a specific API key
exports.deleteApiKey = async (req, res, next) => {
  try {
    const apiKey = await ApiKey.findByIdAndDelete(req.params.key_id);
    if (!apiKey) {
      return res.status(404).json({ error: 'API key not found' });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};