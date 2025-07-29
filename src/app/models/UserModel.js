const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: Number,
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
