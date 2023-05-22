const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
  },
  room_type: String,
  room_area: Number,
  room_pricing: Number,
  room_photos: [String],
  additional_services: [String],
  other_description: String,
});

module.exports = mongoose.model('Room', roomSchema);
