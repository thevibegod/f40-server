var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var assessmentSchema = require('../models/assessmentSchema')

var connStr = "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});



router.post('/addassessment',(req,res)=>{
  new assessmentSchema({assessmentType:req.body.assessmentType,link:req.body.link,topic:req.body.topic}).save().then(data=>res.status(201).send("Assessment created.")).catch(err=>res.json(err));
})

router.get('/removeassessment',(req,res)=>{
  if(!req.query.topic){
    res.status(400).send("Bad Request");
  }
  assessmentSchema.findOneAndDelete({topic:req.query.topic}).then(data=>res.status(200).send("Assessment deleted.")).catch(err=>res.json(err));
})

router.get('/allassessments',(req,res)=>{
  assessmentSchema.find({}).then(assessment=>res.json(assessment))
})
module.exports=router;
