const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstname : { type: String, required: false },
    lastname : { type: String, required: false },
    active : { type: Boolean, required: false },
    role : { type: String, required: false }
});

module.exports = mongoose.model('User', userSchema);
