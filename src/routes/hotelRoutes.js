const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');
const { authenticate, authorize } = require('../middleware/authenticationMiddleware');

// GET /hotels - Returns a list of all hotels
router.get('/', hotelController.getAllHotels);

// GET /hotels/:hotel_id - Returns details for a specific hotel
router.get('/:hotel_id', hotelController.getHotelById);

// POST /hotels - Creates a new hotel with the provided details
router.post('/', authenticate, authorize('admin'), hotelController.createHotel);

// PUT /hotels/:hotel_id - Updates the details for a specific hotel
router.put('/:hotel_id', authenticate, authorize('admin'), hotelController.updateHotel);

// DELETE /hotels/:hotel_id - Deletes a specific hotel
router.delete('/:hotel_id', authenticate, authorize('admin'), hotelController.deleteHotel);

// GET /hotels/:hotel_id/rooms - Returns a list of all rooms for a specific hotel
router.get('/:hotel_id/rooms', hotelController.getAllRooms);

// GET /hotels/:hotel_id/rooms/:room_id - Returns details for a specific room in a specific hotel
router.get('/:hotel_id/rooms/:room_id', hotelController.getRoomById);

// POST /hotels/:hotel_id/rooms - Creates a new room for a specific hotel with the provided details
router.post('/:hotel_id/rooms', authenticate, authorize('admin'), hotelController.createRoom);

// PUT /hotels/:hotel_id/rooms/:room_id - Updates the details for a specific room in a specific hotel
router.put('/:hotel_id/rooms/:room_id', authenticate, authorize('admin'), hotelController.updateRoom);

// DELETE /hotels/:hotel_id/rooms/:room_id - Deletes a specific room in a specific hotel
router.delete('/:hotel_id/rooms/:room_id', authenticate, authorize('admin'), hotelController.deleteRoom);

module.exports = router;