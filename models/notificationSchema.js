const mongoose = require('mongoose');
var notificationSchema=new mongoose.Schema(
{
  title :{
    type:String,
    required:true,
    unique:true
  },
  desc :
  {
    type:String,
    required:true,
  },
})
 module.exports = mongoose.model('Notification', notificationSchema);
