var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
  taskType: {type: String, required: true},
  topic:{type:String, required: true,unique:true},
  deadline:{type:String,required:true},
  uploadTime:{type:String,required:true,unique:true},
  attachments:{type:[{rollNo:String,attachmentId:mongoose.ObjectId,feedback:String,timeStamp:String}]}
});

module.exports = mongoose.model("tasks", taskSchema);
