const mongoose = require('mongoose');

mongoose.connext('mongodb://localhost:27017/userDB');

const userSchema = new mongoose.Schema({
      name: String,
      image: String,
      email: String,
});

module.exports = mongoose.model('User', userSchema);

