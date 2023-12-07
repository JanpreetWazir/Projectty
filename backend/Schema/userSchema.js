const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  Eventname: {  // Update the field name to "Eventname" (with a capital "E")
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
