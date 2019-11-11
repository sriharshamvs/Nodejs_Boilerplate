const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        max: 100
    },
    age: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: Number,
    }
});

module.exports = mongoose.model('User', UserSchema);