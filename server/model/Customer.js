// models/Customer.js

const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact_number: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
