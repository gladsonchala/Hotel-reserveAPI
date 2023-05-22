const Hotel = require('../models/hotelModel');

// GET /hotels - Returns a list of all hotels
exports.getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// GET /hotels/{hotel_id} - Returns details for a specific hotel
exports.getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.hotel_id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// POST /hotels - Creates a new hotel
exports.createHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (err) {
    next(err);
  }
};

// PUT /hotels/{hotel_id} - Updates the details for a specific hotel
exports.updateHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.hotel_id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// DELETE /hotels/{hotel_id} - Deletes a specific hotel
exports.deleteHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.hotel_id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};