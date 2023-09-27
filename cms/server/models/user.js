const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    pass: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User; // Export the User model
