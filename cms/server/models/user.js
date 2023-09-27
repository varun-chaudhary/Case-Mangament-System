const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    pass: String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel; // Export the User model
