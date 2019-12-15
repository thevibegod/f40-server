var mongoose = require("mongoose");

var attendanceSchema = new mongoose.Schema({
  rollNo: { type: String, required: true,unique:true},
  dates: [{date:String,value:Boolean}]

});

module.exports = mongoose.model("attendance", attendanceSchema);
