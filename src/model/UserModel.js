const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: { type: String, unique: true, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    phone: { type: String, unique: true, require: true },
    password: { type: String, require: true }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;