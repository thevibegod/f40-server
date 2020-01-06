var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

var scoreSchema = new mongoose.Schema({
  rollNo:{type:String,required:true},
  data:[{taskId:ObjectId,taskTopic:String,uploadTime:String,Score:Number}]
});

module.exports = mongoose.model("scores", scoreSchema);
