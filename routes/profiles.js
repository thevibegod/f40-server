var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
var profileSchema = require('../models/profileSchema')
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


router.get('/addprofile',function(req, res){
  res.render('profile')
});
router.get('/updateprofile',function(req, res){
  res.render('profile2')
});

router.post('/addprofile',upload.single('picture'),(req, res)=>{
  const newProfile = new profileSchema({name:req.body.name,id:req.file.id,batch:req.body.batch,attendance:req.body.attendance,mentorName:req.body.mentorName,rollNo:req.body.rollNo})
  newProfile.save().then(()=>res.status(201).send('Added Profile to db')).catch((err)=>res.json(err))
});

router.get('/studentprofilepicture',(req,res)=>{
  if(!req.query.rollNo){
    return res.status(400).send("Bad Request.")
  }
  profileSchema.findOne({rollNo:req.query.rollNo}).then(data=>{
    gfs.files.findOne({_id:data.id},(err,file)=>{
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    })
  })})

  router.get('/studentprofiledetails',(req,res)=>{
    if(!req.query.rollNo){
      return res.status(400).send("Bad Request.")
    }
    profileSchema.findOne({rollNo:req.query.rollNo}).then(data=>{
        return res.status(200).json(data)
      })
    })

    router.get('/removestudentprofiledetails',(req,res)=>{
      if(!req.query.rollNo){
        return res.status(400).send("Bad Request.")
      }
      profileSchema.findOneAndDelete({rollNo:req.query.rollNo}).then(data=>{
        gfs.remove({_id:data.id,root:'uploads'})
            }).then(res.status(200).send("Profile removed from db"))
      })



    router.post('/studentprofiledetailsupdation',upload.single('picture'),(req,res)=>{
      if(!req.body.rollNo){
        return res.status(400).send("Bad Request.")
      }
      profileSchema.findOneAndDelete({rollNo:req.body.rollNo}).then(data=>{
        gfs.remove({_id:data.id,root:'uploads'});}).then(()=>{
          const newProfile = new profileSchema({name:req.body.name,batch:req.body.batch,id:req.file.id,attendance:req.body.attendance,mentorName:req.body.mentorName,rollNo:req.body.rollNo})
          newProfile.save()}).then(()=>res.status(201).send('Updated Profile in db')).catch((err)=>res.json(err))
    })
module.exports=router
