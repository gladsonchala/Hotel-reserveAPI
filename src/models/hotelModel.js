const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  photos_url: [String],
  ground: String,
  city: String,
  approximate_location: String,
  google_map_location_url: String,
  latitude: Number,
  longitude: Number,
  price_range: {
    min: Number,
    max: Number,
  },
  additional_services: [String],
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },
  ],
  other_description: String,
});

module.exports = mongoose.model('Hotel', hotelSchema);
