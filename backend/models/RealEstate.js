const mongoose = require('mongoose');

const RealEstateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: String,
    required: true
  },
  location: String,
  imageUrl: String,
  isPurchased: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('RealEstate', RealEstateSchema);
