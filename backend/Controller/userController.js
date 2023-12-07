const mongoose = require('mongoose');
const User = require('../Schema/userSchema');

exports.signin = async (req, res) => {
  try {
    const { name, email, phoneNumber, transactionId, Eventname } = req.body;
    console.log(name, email, phoneNumber, transactionId, Eventname);
    

    // Check if a user with the same transactionId already exists
    const existingUser = await User.findOne({ transactionId });

    if (existingUser) {
      // If a user with the same transactionId exists, return an error response
      return res.status(400).json({
        success: false,
        message: 'Data with this transaction ID already submitted.',
      });
    }

    // If no existing user with the same transactionId, proceed to create the user
    const response = await User.create({
      name,
      email,
      phoneNumber,
      transactionId,
      Eventname,
    });

    console.log(response);

    return res.status(200).json({
      success: true,
      data: response,
      message: 'Sign in successfully',
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
