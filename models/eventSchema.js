var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  title:{type:String,required:true,unique:true},
  desc:{type:String,required:true},
  id : {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Events',eventSchema)
