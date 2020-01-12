var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var courseSchema = require('../models/courseSchema')

var connStr = process.env.DB_URL;
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
  const newcourse = new courseSchema({title:req.body.title,desc:req.body.desc,
  price:req.body.price,financialaid:req.body.financialaid,link:req.body.link})
  newcourse.save().then(()=>res.status(201).send('Added course to db')).catch((err)=>res.json(err))
});



  router.get('/coursedetails',(req,res)=>{
    if(!req.query.title){
      return res.status(400).send("Bad Request.")
    }
    courseSchema.findOne({title:req.query.title}).then(data=>{
        return res.status(200).json(data)
      }).catch((err)=>console.log(err))
    })

    router.get('/removecourse',(req,res)=>{
      if(!req.query.title){
        return res.status(400).send("Bad Request.")
      }
      courseSchema.findOneAndDelete({title:req.query.title}).then(res.status(200).send("course removed from db"))
      })



    router.post('/courseupdation',(req,res)=>{
      if(!req.body.title){
        return res.status(400).send("Bad Request.")
      }
      courseSchema.findOneAndDelete({title:req.body.title}).then(()=>{
          const newcourse = new courseSchema({title:req.body.title,desc:req.body.desc,
          price:req.body.price,financialaid:req.body.financialaid,link:req.body.link})
          newcourse.save()}).then(()=>res.status(201).send('Updated course in db')).catch((err)=>res.json(err))
    })

    router.get('/getallcourses',(req,res)=>{
      courseSchema.find({}).then(function (course){
        res.json(course);
      })
    })
module.exports=router;
