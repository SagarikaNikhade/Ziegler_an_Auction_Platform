const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  bidderName: { type: String, required: true },
  // Relationships
  aircraft: { type: mongoose.Schema.Types.ObjectId, ref: 'Aircraft'},
});

const BidModel = mongoose.model('Bid', bidSchema);

module.exports = {BidModel};
