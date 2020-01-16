const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adminProfileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  mailId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AdminProfile', adminProfileSchema);
