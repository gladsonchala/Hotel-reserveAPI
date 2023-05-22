const Room = require('../models/roomModel');

// GET /hotels/{hotel_id}/rooms - Returns a list of all rooms for a specific hotel
exports.getAllRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find({ hotel_id: req.params.hotel_id });
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

// GET /hotels/{hotel_id}/rooms/{room_id} - Returns details for a specific room in a specific hotel
exports.getRoomById = async (req, res, next) => {
  try {
    const room = await Room.findOne({
      _id: req.params.room_id,
      hotel_id: req.params.hotel_id,
    });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// POST /hotels/{hotel_id}/rooms - Creates a new room for a specific hotel with the provided details
exports.createRoom = async (req, res, next) => {
  try {
    const room = await Room.create({
      hotel_id: req.params.hotel_id,
      ...req.body,
    });
    res.status(201).json(room);
  } catch (err) {
    next(err);
  }
};

// PUT /hotels/{hotel_id}/rooms/{room_id} - Updates the details for a specific room in a specific hotel
exports.updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findOneAndUpdate(
      {
        _id: req.params.room_id,
        hotel_id: req.params.hotel_id,
      },
      req.body,
      { new: true, runValidators: true }
    );
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// DELETE /hotels/{hotel_id}/rooms/{room_id} - Deletes a specific room in a specific hotel
exports.deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findOneAndDelete({
      _id: req.params.room_id,
      hotel_id: req.params.hotel_id,
    });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
