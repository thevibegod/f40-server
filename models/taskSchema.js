var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
  taskType: {type: String, required: true},
  topic:{type:String, required: true},
  deadline:{type:String,required:true},
  uploadTime:{type:String,required:true},
  rollNo:String,
  attachment:{url:String,feedback:String,timeStamp:String,score:Number}
});

module.exports = mongoose.model("tasks", taskSchema);
