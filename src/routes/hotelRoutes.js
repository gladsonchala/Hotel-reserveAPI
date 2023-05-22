const express = require('express');
const router = express.Router();

const hotelController = require('../controllers/hotelController');
const { authenticate, authorize } = require('../middleware/authenticationMiddleware');

router.get('/', hotelController.getAllHotels);
router.get('/:hotel_id', hotelController.getHotelById);
router.post('/', authenticate, authorize('admin'), hotelController.createHotel);
router.put('/:hotel_id', authenticate, authorize('admin'), hotelController.updateHotel);
router.delete('/:hotel_id', authenticate, authorize('admin'), hotelController.deleteHotel);


module.exports = router;