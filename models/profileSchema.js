const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let profileSchema = new Schema({
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
  studentMentorName: {
    type: String,
    required: true
  },
  studentMentorMail: {
    type: String,
    required: true
  },
  studentMentorPhone: {
    type: String,
    required: true
  },
  facultyMentorName: {
    type: String,
    required: true
  },
  facultyMentorMail: {
    type: String,
    required: true
  },
  facultyMentorPhone: {
    type: String,
    required: true
  },
  achievements: {
    type: [String]
  }
});

module.exports = mongoose.model('Profile', profileSchema);