const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let menteeProfileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  mailId: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  mentees:{
    type:Array,
    required: true
  }

});

module.exports = mongoose.model('MenteeProfile', menteeProfileSchema);
