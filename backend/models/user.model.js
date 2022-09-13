const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for Users
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true, versionKey: false }
);

// Create model for User
const User = mongoose.model('users', UserSchema);
module.exports = User;