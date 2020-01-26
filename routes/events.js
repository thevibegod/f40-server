var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs')
var mv = require("mv")
var mongoose = require('mongoose')
var eventSchema = require('../models/eventSchema')

var connStr =
  process.env.DB_URL;
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

router.post('/addevent',(req, res)=>{
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.attachment.path;
    var ext = files.attachment.name.split('.')[1];
    var newpath = './public/events/' + fields.title + 'ml' + Date.parse(new Date()) + '.' + ext ;
    mv(oldpath, newpath, function (err) {
      if (err) throw err;
      const newEvent = new eventSchema({title:fields.title,id:newpath.slice(8),desc:fields.desc})
      newEvent.save().then(()=>res.status(201).send('Added Event to db')).catch((err)=>res.json(err));
      });
    })

});

  router.get('/eventdetails',(req,res)=>{
    if(!req.query.title){
      return res.status(400).send("Bad Request.")
    }
    eventSchema.findOne({title:req.query.title}).then(data=>{
        return res.status(200).json(data)
      })
    })

    router.get('/removeevent',(req,res)=>{
      if(!req.query.title){
        return res.status(400).send("Bad Request.")
      }
      eventSchema.findOneAndDelete({title:req.query.title}).then(data=>{
        fs.unlink('./public'+data.id, function (err) {
          if (err) throw err;
          console.log('File deleted!');
        });
      }).then(res.status(200).send("Event removed from db"))
      })



    router.post('/eventupdation',(req,res)=>{
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        if(!fields.title){
          return res.status(400).send("Bad Request.")
        }
        var oldpath = files.attachment.path;
        var ext = files.attachment.name.split('.')[1];
        var newpath = './public/events/' + fields.title + 'ml' + Date.parse(new Date()) + '.' + ext ;
        mv(oldpath, newpath, function (err) {
          if (err) throw err;
          eventSchema.findOne({title:fields.title}).then(data=>{
            fs.unlink('./public'+data.id, function (err) {
              if (err) throw err;
              console.log('File deleted!');
            });
              eventSchema.findOneAndUpdate({title:fields.title},{title:fields.title,id:newpath.slice(8),desc:fields.desc},{new:true}).then(()=>res.status(201).send('Updated Event in db')).catch((err)=>res.json(err))
          });
        })

    })
  })

    router.get('/getallevents',(req,res)=>{
      eventSchema.find({}).then(function (events){
        res.json(events);
      })
    })
module.exports=router;
