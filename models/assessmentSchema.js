var mongoose = require("mongoose");

var assessmentSchema = new mongoose.Schema({
  assessmentType: {type: String, required: true},
  link: {type: String, required: true,unique:true},
  topic:{type:String, required: true,unique:true}

});

module.exports = mongoose.model("assessment", assessmentSchema);
