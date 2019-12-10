var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var eventSchema = new mongoose.Schema({
  title:{type:String,required:true,unique:true},
  desc:{type:String,required:true},
  id : {
    type: ObjectId,
    required: true
  }
})

module.exports = mongoose.model('Events',eventSchema)
