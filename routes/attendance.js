var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var attendanceSchema = require('../models/attendanceSchema')

var connStr = "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


router.get('/studentattendance',(req,res)=>{
  if(!req.query.rollNo){
    return res.status(400).send("Bad Request.")
  }
  attendanceSchema.findOne({rollNo:req.query.rollNo}).then(data=>{
    return res.status(200).json(data)
  })
})

router.post('/postattendance',(req,res)=>{
  let arr=Object.keys(req.body);
  arr.map((data,index)=>{
    if(index!==0){
      attendanceSchema.findOneAndDelete({rollNo:data}).
      then(d=>{
        let obj={date:req.body.date,value:req.body[data]};
        let arr2=d.dates;
        arr2.push(obj);
        new attendanceSchema({rollNo:d.rollNo,dates:arr2}).save();
      }).then(()=>res.status(201).json('Attendance Updated')).catch(err=>res.json(err))

    }
  })

})


module.exports=router;
