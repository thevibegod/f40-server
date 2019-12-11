var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var notificationSchema = require('../models/courseSchema')

var connStr = "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

router.get('/addcourse',function(req, res){
  res.render('course1')
});
router.get('/updatecourse',function(req, res){
  res.render('course2')
});

router.post('/addcourse',(req, res)=>{
  const newcourse = new eventcourse({title:req.body.title,desc:req.body.desc,
  price:req.body.price,financialaid:req.body.financialaid})
  newEvent.save().then(()=>res.status(201).send('Added course to db')).catch((err)=>res.json(err))
});



  router.get('/coursedetails',(req,res)=>{
    if(!req.query.title){
      return res.status(400).send("Bad Request.")
    }
    courseSchema.findOne({title:req.query.title}).then(data=>{
        return res.status(200).json(data)
      })
    })

    router.get('/removecourse',(req,res)=>{
      if(!req.query.title){
        return res.status(400).send("Bad Request.")
      }
      coursenotification.findOneAndDelete({title:req.query.title}).then(data=>{
        gfs.remove({_id:data.id,root:'uploads'})
      }).then(res.status(200).send("course removed from db"))
      })



    router.post('/courseupdation',(req,res)=>{
      if(!req.body.rollNo){
        return res.status(400).send("Bad Request.")
      }
      courseSchema.findOneAndDelete({title:req.body.title}).then(data=>{
        gfs.remove({_id:data.id,root:'uploads'});}).then(()=>{
          const newEvent = new courseSchema({title:req.body.title,desc:req.body.desc,
          price:req.body.price,financialaid:req.body.financialaid})
          newEvent.save()}).then(()=>res.status(201).send('Updated course in db')).catch((err)=>res.json(err))
    })

    router.get('/getallcourse',(req,res)=>{
      courseSchema.find({}).then(function (course){
        res.json(course);
      })
    })
module.exports=router;
