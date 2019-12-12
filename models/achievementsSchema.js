var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;

var achievementsSchema = new mongoose.Schema({
  achievements:{type:String,required:true},
  date : {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('achievements',achievementsSchema)
