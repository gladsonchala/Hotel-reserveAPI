const express = require('express');
const router = express.Router();

const apiKeyController = require('../controllers/apiKeyController');
const { authenticate } = require('../middleware/authenticationMiddleware');

router.get('/', authenticate, apiKeyController.getAllApiKeys);
router.get('/:key_id', authenticate, apiKeyController.getApiKeyById);
router.post('/', authenticate, apiKeyController.createApiKey);
router.delete('/:key_id', authenticate, apiKeyController.deleteApiKey);

module.exports = router;