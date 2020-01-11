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

router.post('/changeattendance',(req,res)=>{
  if(!req.query.rollNo || !req.body.date || req.body.value === null)
  {
    return res.status(400).json({success:false,msg:"Bad Request"})
  }
  attendanceSchema.findOne({rollNo:req.query.rollNo}).then(data=>{
    let arr = data.dates,ind;
    arr.map((d,i)=>{
      if(d.date===req.body.date){
        d["value"]=req.body.value
      }
    });
    attendanceSchema.findOneAndUpdate({rollNo:req.query.rollNo},{dates:arr},{new:true}).then(()=>{
      return res.status(200).json({success:true,msg:"Attendance Updated"})
    })
  })
})


module.exports=router;
