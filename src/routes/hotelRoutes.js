const express = require('express');
const router = express.Router();

const hotelController = require('../controllers/hotelController');
const { authenticate, authorize } = require('../middleware/authenticationMiddleware');

router.get('/', authenticate, hotelController.getAllHotels);
router.get('/:hotel_id', authenticate, hotelController.getHotelById);
router.post('/', authenticate, authorize('admin'), hotelController.createHotel);
router.put('/:hotel_id', authenticate, authorize('admin'), hotelController.updateHotel);
router.delete('/:hotel_id', authenticate, authorize('admin'), hotelController.deleteHotel);

router.get('/:hotel_id/rooms', authenticate, hotelController.getAllRooms);
router.get('/:hotel_id/rooms/:room_id', authenticate, hotelController.getRoomById);
router.post('/:hotel_id/rooms', authenticate, authorize('admin'), hotelController.createRoom);
router.put('/:hotel_id/rooms/:room_id', authenticate, authorize('admin'), hotelController.updateRoom);
router.delete('/:hotel_id/rooms/:room_id', authenticate, authorize('admin'), hotelController.deleteRoom);

module.exports = router;
