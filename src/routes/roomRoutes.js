const express = require('express');
const router = express.Router({ mergeParams: true });

const roomController = require('../controllers/roomController');
const { authenticate, authorize } = require('../middleware/authenticationMiddleware');

router.get('/', roomController.getAllRooms);
router.get('/:room_id', roomController.getRoomById);
router.post('/', authenticate, authorize('admin'), roomController.createRoom);
router.put('/:room_id', authenticate, authorize('admin'), roomController.updateRoom);
router.delete('/:room_id', authenticate, authorize('admin'), roomController.deleteRoom);

module.exports = router;