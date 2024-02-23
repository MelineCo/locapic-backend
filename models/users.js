const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
 nickname: String,
 name: String,
 latitude: Number,
 longitude: Number
});

const User = mongoose.model('users', userSchema);

module.exports = User;