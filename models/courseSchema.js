var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var courseSchema = new mongoose.Schema({
  title:{type:String,required:true,unique:true},
  desc:{type:String,required:true},
  price : {
    type: String,
    required: true
  },
  financialaid :{
    type:Boolean,
    required: true
  },
  link :{
    type:String,
    required: true
  },
  link:{
    type:String,
    required:true,
    unique:true
  }
})

module.exports = mongoose.model('Course',courseSchema)
