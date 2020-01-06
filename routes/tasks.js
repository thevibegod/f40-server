const taskSchema = require('../models/taskSchema');
const scoreSchema = require('../models/scoreSchema')
var mongoose = require("mongoose");
var router = require("express").Router();
var formidable = require('formidable');
var fs = require('fs');

var createTimeStamp = ()=> {
  dateObj = new Date();
  dateObj.setMinutes(dateObj.getMinutes());
  return `${(dateObj.getDate())>9?dateObj.getDate():'0'+dateObj.getDate()}/${(dateObj.getMonth()+1)>9?dateObj.getMonth()+1:'0'+(dateObj.getMonth()+1).toString()}/${(dateObj.getFullYear())>9?dateObj.getFullYear():'0'+dateObj.getFullYear()} ${(dateObj.getHours())>9?dateObj.getHours():'0'+dateObj.getHours()}:${(dateObj.getMinutes())>9?dateObj.getMinutes():'0'+dateObj.getMinutes()}:${(dateObj.getSeconds())>9?dateObj.getSeconds():'0'+dateObj.getSeconds()}`
}


var connStr =
  "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});


router.post('/addtask',(req,res)=>{
  if(!req.body.topic || !req.body.taskType ||!req.body.rollNo){
    res.status(400).send("Bad Request");
  }
  new taskSchema({taskType:req.body.taskType,topic:req.body.topic,uploadTime:createTimeStamp(),deadline:req.body.date+' '+req.body.time,rollNo:req.body.rollNo,attachment:null}).save().then((data)=>{
    scoreSchema.findOneAndDelete({rollNo:req.body.rollNo}).then(val=>{
      let arr = val.data;
      let obj = {taskId:data._id,taskTopic:data.taskTopic,uploadTime:data.uploadTime,Score:null};
      arr.push(obj);
      new scoreSchema({rollNo:req.body.rollNo,data:arr}).save().then(()=>res.status(201).send("Task created."))
    })
  .catch(err=>res.status(500).json(err));

})
})

router.get('/alltasks',(req,res)=>{
  if(!req.query.rollNo){
    return res.status(400).json({success:false,message:"Bad Request"})
  }
  taskSchema.find({rollNo:req.query.rollNo}).sort({uploadTime:-1}).then(task=>res.status(200).json(task)).catch(err=>res.status(400).json(err));
})

router.get('/allscores',(req,res)=>{
  scoreSchema.findOne({rollNo:req.query.rollNo}).then(score=>res.status(200).json({data:score.data})).catch(err=>res.status(400).json(err));
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
      var newpath = './public/tasks/' + req.query.rollNo + 'ml' + Date.parse(new Date()) + '.' + ext ;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        taskSchema.findOneAndDelete({id:fields.taskId}).then((data)=>{
          let obj = {feedback:fields.feedback,url:newpath.slice(8),timeStamp:createTimeStamp()};
          new taskSchema({_id:data._id,taskType:fields.taskType,rollNo:req.query.rollNo,topic:fields.topic,attachment:obj,uploadTime:data.uploadTime,deadline:data.deadline,score:null}).save().then(()=>res.status(200).send("Task submitted."))
          .catch(err=>res.status(500).json(err));
          })
        });
      })
    }

    else{
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files){
        taskSchema.findOneAndDelete({topic:fields.taskId}).then(data=>{
          scoreSchema.findOneAndDelete({rollNo:req.query.rollNo}).then(val=>{
            let scoreArray = val.data;
            let ind;
            scoreArray.map((val,index)=>{
              if(val.taskId===fields.taskId){
                ind=index;
              }
            })
            scoreArray.splice(ind,1);
            scoreArray.push({taskId:data._id,taskTopic:data.taskTopic,uploadTime:data.uploadTime,score:null})
            new scoreSchema({_id:val._id,rollNo:req.query.rollNo,data:scoreArray}).save();
          })
          let id = data._id;
          let attachment = data.attachment;
          let ind;
          let uploadedTime = data.uploadTime;
          let setDeadline = data.deadline;
              fs.unlink('./public'+data.attachment.url, function (err) {
                if (err) throw err;
                console.log('File deleted!');
              });

          new taskSchema({_id:data._id,taskType:fields.taskType,topic:fields.topic,attachment:null,uploadTime:uploadedTime,deadline:setDeadline,rollNo:req.query.rollNO}).save().then(()=>res.status(200).send("Task submission cleared"))
          .catch(err=>res.status(500).json(err));
      })
    })
  }
})

router.get('/removetask',(req,res)=>{
  if(!req.query.taskId){
    res.status(400).send("Bad request");
  }
  taskSchema.findOneAndDelete({_id:req.query.taskId}).then(val=>{
      fs.unlink('./public'+val.attachment.url, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
  }).then(()=>res.status(200).send("Task removed")).catch(err=>res.json(err))
})


router.post('/modifytask',(req,res)=>{
  if(!req.query.taskId){
    res.status(400).send("Bad request");
  }
  taskSchema.findOneAndDelete({_id:req.query.taskId}).then(data=>{
    new taskSchema({taskType:req.body.taskType,topic:req.body.topic,uploadTime:createTimeStamp(),deadline:req.body.date+' '+req.body.time,attachment:data.attachment,rollNo:req.body.rollNo}).save().then(()=>res.status(201).send("Task modified."))
    .catch(err=>res.status(500).json(err));
  })
})



router.post('/gradetask',(req,res)=>{
  if(!req.query.taskId || !req.query.rollNo){
    res.status(400).send("Bad request");
  }
  scoreSchema.findOneAndDelete({rollNo:req.query.rollNo}).then(value=>{
    let scoreArray=value.data;
    scoreArray.map((data,index)=>{
          if(data.taskId===req.query.taskId){
            let up = data.uploadTime;
            let tt = data.taskTopic;
            scoreArray.splice(index,1);
          }
        })
      scoreArray.push({uploadTime:up,taskType:tt,score:req.query.score,taskId:req.query.taskId});
    }
  )

  new scoreSchema({_id:value._id,data:scoreArray}).save().then(()=>res.status(200).send("Scores Updated"))
  .catch(err=>res.json(err));

})


module.exports = router;
