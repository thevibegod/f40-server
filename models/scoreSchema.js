var mongoose = require("mongoose");

var scoreSchema = new mongoose.Schema({
  scores:[{rollNo:String,score:Number}],
  taskId:{type:mongoose.ObjectId,unique:true}
});

module.exports = mongoose.model("scores", scoreSchema);
