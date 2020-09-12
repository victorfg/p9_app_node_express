const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    nombreDeLaSala: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Room', UserSchema);