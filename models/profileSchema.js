const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let profileSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  id : {
    type: ObjectId,
    required: true
  },
  rollNo :{
    type:String,
    required:true,
    unique:true
  },
  batch:{
    type:String,
    required:true
  },
  mentorName:{
    type: String,
    required: true
  },
  attendance:{
    type: Number,
    required: true
  },
  achievements:{
    type: [String]
  }
});

 module.exports = mongoose.model('Profile', profileSchema);
