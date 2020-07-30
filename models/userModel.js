const mongoose = require("mongoose");

const users = mongoose.model(
  "users",
  new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    contactNo: { type: String },
    address: { type: String },
    isActive: { type: Boolean },
  })
);

module.exports = { users };
