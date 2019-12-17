const taskSchema = require('../models/taskSchema');
const scoreSchema = require('../models/scoreSchema')
var mongoose = require("mongoose");
var router = require("express").Router();
var multer=require('multer');
var crypto = require('crypto');
var path = require('path');
var GridFsStorage = require('multer-gridfs-storage');
var Grid = require('gridfs-stream');
var bson=require('bson');
var formidable = require('formidable');
var fs = require('fs');

var createTimeStamp = ()=>{
  let dateObj = new Date();
  let time = dateObj.toTimeString().slice(0,8);
  var date = dateObj.getDate()+'/'+(dateObj.getMonth()+1)+'/'+dateObj.getFullYear();
  return date + ' ' + time;
}

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

router.post('/addtask',(req,res)=>{
  if(!req.body.topic || !req.body.taskType){
    res.status(400).send("Bad Request");
  }
  new taskSchema({taskType:req.body.taskType,topic:req.body.topic,uploadTime:createTimeStamp(),deadline:req.body.date+' '+req.body.time}).save().then((data)=>{new scoreSchema({taskId:data._id}).save()}).then(()=>res.status(201).send("Task created."))
  .catch(err=>res.status(500).json(err));

})

router.get('/alltasks',(req,res)=>{
  taskSchema.find({}).sort({uploadTime:-1}).then(task=>res.status(200).json(task)).catch(err=>res.status(400).json(err));
})

router.get('/allscores',(req,res)=>{
  scoreSchema.find({}).then(score=>res.status(200).json(score)).catch(err=>res.status(400).json(err));
})


router.post('/uploadtask',(req,res)=>{

  if(!req.query.rollNo){
    res.status(400).send("Bad Request");
  }

  if(!req.query.clear){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.attachment.path;
      var ext = files.attachment.name.split('.')[1];
      var newpath = './tasks/' + req.query.rollNo + 'ml' + Date.parse(new Date()) + '.' + ext ;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        taskSchema.findOneAndDelete({topic:fields.topic}).then((data)=>{
          let attachmentArray = data.attachments;
          let obj = {rollNo:req.query.rollNo,feedback:fields.feedback,attachmentId:newpath,timeStamp:createTimeStamp()};
          attachmentArray.push(obj);
          new taskSchema({_id:data._id,taskType:fields.taskType,topic:fields.topic,attachments:attachmentArray,uploadTime:data.uploadTime,deadline:data.deadline}).save().then(()=>res.status(200).send("Task submitted."))
          .catch(err=>res.status(500).json(err));
          })
        });
      })
    }

    else{
      //this is for deleting a file in folder
      // fs.unlink(attachmentId, function (err) {
      //   if (err) throw err;
      //   console.log('File deleted!');
      // });


      taskSchema.findOneAndDelete({topic:req.body.topic}).then(data=>{
        scoreSchema.findOneAndDelete({taskId:data._id}).then(val=>{
          let scoreArray = val.scores;
          let ind;
          scoreArray.map((val,index)=>{
            if(val.rollNo===req.query.rollNo){
              ind=index;
            }
          })
          scoreArray.splice(ind,1);
          new scoreSchema({_id:val._id,taskId:data._id,scores:scoreArray}).save();
        })
        let id = data._id;
        let attachmentArray = data.attachments;
        let ind;
        let uploadedTime = data.uploadTime;
        let setDeadline = data.deadline;
        attachmentArray.map((data,index)=>{
          if(data.rollNo===req.query.rollNo){
            ind = index;
          }
        });
        attachmentArray.splice(ind,1);
        gfs.remove({_id:data.attachmentId,root:'uploads'});
        new taskSchema({_id:data._id,taskType:req.body.taskType,topic:req.body.topic,attachments:attachmentArray,uploadTime:uploadedTime,deadline:setDeadline}).save().then(()=>res.status(200).send("Task submission cleared"))
        .catch(err=>res.status(500).json(err));
    })
  }
})

router.get('/removetask',(req,res)=>{
  if(!req.query.topic){
    res.status(400).send("Bad request");
  }
  taskSchema.findOneAndDelete({topic:req.query.topic}).then(data=>{

    let attachmentArray = data.attachments;
    attachmentArray.map(val=>{
      gfs.remove({_id:val.attachmentId,root:'uploads'});
    })
  }).then(()=>res.status(200).send("Task removed")).catch(err=>res.json(err))
})


router.post('/modifytask',(req,res)=>{
  if(!req.query.id){
    res.status(400).send("Bad request");
  }
  taskSchema.findOneAndDelete({_id:req.query.id}).then(data=>{
    new taskSchema({taskType:req.body.taskType,topic:req.body.topic,uploadTime:createTimeStamp(),deadline:req.body.date+' '+req.body.time,attachments:data.attachments}).save().then(()=>res.status(201).send("Task modified."))
    .catch(err=>res.status(500).json(err));
  })
})

router.get('/attachment',(req,res)=>{
  if(!req.query.topic || !req.query.rollNo){
    res.status(400).send("Bad request");
  }
  taskSchema.findOne({topic:req.query.topic}).then(data=>{
    data.attachments.map(obj=>{
      if(obj.rollNo===req.query.rollNo){
      gfs.files.findOne({ _id: obj.attachmentId }, (err, file) => {
        const readStream = gfs.createReadStream(file.filename);
        res.setHeader('Content-type','application/pdf');
        readStream.pipe(res);
    })
    }
  })})

})

router.post('/gradetask',(req,res)=>{
  if(!req.query.taskId){
    res.status(400).send("Bad request");
  }
  let arr=Object.keys(req.body);
  scoreSchema.findOneAndDelete({taskId:req.query.taskId}).then(value=>{
    let scoreArray=value.scores;
    arr.map((data,index)=>{
        scoreArray.map((d,i)=>{
          if(d.rollNo===data){
            scoreArray.splice(i,1);
          }
        })
      scoreArray.push({rollNo:data,score:req.body[data]});
    }
  )

  new scoreSchema({_id:value._id,taskId:req.query.taskId,scores:scoreArray}).save().then(()=>res.status(200).send("Scores Updated"))
  .catch(err=>res.json(err));

})

})


module.exports = router;
