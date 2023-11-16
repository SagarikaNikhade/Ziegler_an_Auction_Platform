const mongoose = require('mongoose');

const aircraftSchema = mongoose.Schema({
  image : { type: String, required: true },
  model: { type: String, required: true },
  manufacturer: { type: String, required: true },
  yearOfManufacture: { type: Number, required: true },
  totalHours: { type: Number, required: true },
  // Relationships
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }],
},{
    versionKey:false
});

const AircraftModel = mongoose.model('Aircraft', aircraftSchema);

module.exports = {AircraftModel};
