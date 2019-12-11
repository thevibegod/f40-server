var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var eventSchema = require('../models/eventSchema')
var multer=require('multer');
var crypto = require('crypto');
var path = require('path');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');

const conn = mongoose.createConnection("mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority")
let gfs;

conn.once('open',function(){
  gfs=Grid(conn.db,mongoose.mongo);
  gfs.collection('uploads')
})

var storage = new GridFsStorage({
  url: "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });


router.get('/addevent',function(req, res){
  res.render('events')
});
router.get('/updateevent',function(req, res){
  res.render('events2')
});

router.post('/addevent',upload.single('picture'),(req, res)=>{
  const newEvent = new eventSchema({title:req.body.title,id:req.file.id,desc:req.body.desc})
  newEvent.save().then(()=>res.status(201).send('Added Event to db')).catch((err)=>res.json(err))
});

router.get('/eventpicture',(req,res)=>{
  if(!req.query.title){
    return res.status(400).send("Bad Request.")
  }
  eventSchema.findOne({title:req.query.title}).then(data=>{
    gfs.files.findOne({_id:data.id},(err,file)=>{
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    })
  })})

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
        gfs.remove({_id:data.id,root:'uploads'})
      }).then(res.status(200).send("Event removed from db"))
      })



    router.post('/eventupdation',upload.single('picture'),(req,res)=>{
      if(!req.body.title){
        return res.status(400).send("Bad Request.")
      }
      eventSchema.findOneAndDelete({title:req.body.title}).then(data=>{
        gfs.remove({_id:data.id,root:'uploads'});}).then(()=>{
          const newEvent = new eventSchema({title:req.body.title,id:req.file.id,desc:req.body.desc})
          newEvent.save()}).then(()=>res.status(201).send('Updated Event in db')).catch((err)=>res.json(err))
    })

    router.get('/getallevents',(req,res)=>{
      eventSchema.find({}).then(function (events){
        res.json(events);
      })
    })
module.exports=router;
