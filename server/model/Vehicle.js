// models/Vehicle.js

const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  seating_capacity: {
    type: Number,
    required: true,
  },
  availability_status: {
    type: Boolean,
    default: true,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
