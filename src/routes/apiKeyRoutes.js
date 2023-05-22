const express = require('express');
const router = express.Router();

const apiKeyController = require('../controllers/apiKeyController');
const { authenticate, authorize } = require('../middleware/authenticationMiddleware');

router.get('/', authenticate, authorize('admin'), apiKeyController.getAllApiKeys);
router.get('/:key_id', authenticate, authorize('admin'), apiKeyController.getApiKeyById);
router.post('/', authenticate, authorize('admin'), apiKeyController.createApiKey);
router.delete('/:key_id', authenticate, authorize('admin'), apiKeyController.deleteApiKey);

module.exports = router;
