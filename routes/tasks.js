const taskSchema = require('../models/taskSchema');
const scoreSchema = require('../models/scoreSchema')
var mongoose = require("mongoose");
var router = require("express").Router();
var formidable = require('formidable');
var fs = require('fs');
var sortArray = require('../sort');

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
      let obj = {taskId:data._id,taskTopic:data.topic,uploadTime:data.uploadTime,Score:null};
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
  scoreSchema.findOne({rollNo:req.query.rollNo}).then(score=>{
    sortArray(score.data);
    console.log(score.data)
    return res.status(200).json({data:score.data})
  }).catch(err=>res.status(500).json(err));
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
        taskSchema.findOneAndDelete({_id:mongoose.Types.ObjectId(fields.taskId)}).then((data)=>{
          let obj = {feedback:fields.feedback,url:newpath.slice(8),timeStamp:createTimeStamp(),Score:null};
          new taskSchema({_id:data._id,taskType:fields.taskType,rollNo:req.query.rollNo,topic:fields.topic,attachment:obj,uploadTime:data.uploadTime,deadline:data.deadline}).save().then(()=>res.status(200).send("Task submitted."))
          .catch(err=>res.status(500).json(err));
          })
        });
      })
    }

    else{
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files){
        taskSchema.findOneAndDelete({_id:mongoose.Types.ObjectId(fields.taskId)}).then(data=>{
            let ind,scoreArray,score,att;
            scoreSchema.findOne({rollNo:req.query.rollNo}).then(d=>{
              scoreArray = d.data;
              scoreArray.map((dt,i)=>{
                if(dt.taskId == fields.taskId)
                {
                  ind = i;
                  score = dt;
                }
              })
            }).then(()=>{

              scoreArray.splice(ind,1);
              scoreArray.push({taskId:score.taskId,taskTopic:score.taskTopic,uploadTime:score.uploadTime, Score:null});
              scoreSchema.findOneAndUpdate({rollNo:req.query.rollNo},
                {'data':scoreArray},
                {new : true}
              ).then(()=>{return;})
            });

          let id = data._id;
          let attachment = data.attachment;
          let uploadedTime = data.uploadTime;
          let setDeadline = data.deadline;
            fs.unlink('./public'+data.attachment.url, function (err) {
              if (err) throw err;
              console.log('File deleted!');
            });

          new taskSchema({_id:mongoose.Types.ObjectId(fields.taskId),taskType:fields.taskType,topic:fields.topic,attachment:null,uploadTime:uploadedTime,deadline:setDeadline,rollNo:req.query.rollNo}).save().then(()=>res.status(200).send("Task submission cleared"))
          .catch(err=>res.status(500).json(err));
      })
    })
  }
})

router.get('/removetask',(req,res)=>{
  if(!mongoose.Types.ObjectId(req.query.taskId)){
    res.status(400).send("Bad request");
  }
  taskSchema.findOneAndDelete({_id:mongoose.Types.ObjectId(req.query.taskId)}).then(val=>{
    if(!val.attachment || val.attachment === null)
      {
        fs.unlink('./public'+val.attachment.url, function (err) {
          if (err) throw err;
          console.log('File deleted!');
        });
      }
  }).then(()=>res.status(200).send("Task removed")).catch(err=>res.json(err))
})


router.post('/modifytask',(req,res)=>{
  if(!req.query.taskId){
    res.status(400).send("Bad request");
  }
  taskSchema.findOneAndDelete({_id:mongoose.Types.ObjectId(req.query.taskId)}).then(data=>{
    new taskSchema({taskType:req.body.taskType,topic:req.body.topic,uploadTime:createTimeStamp(),deadline:req.body.date+' '+req.body.time,attachment:data.attachment,rollNo:req.body.rollNo}).save().then(()=>res.status(201).send("Task modified."))
    .catch(err=>res.status(500).json(err));
  })
})

router.post('/gradetask',(req,res)=>{
  if(!req.query.taskId || !req.query.rollNo){
    res.status(400).send("Bad request");
  }
    let ind,scoreArray,score,att;
    scoreSchema.findOne({rollNo:req.query.rollNo}).then(d=>{
      scoreArray = d.data;
      scoreArray.map((dt,i)=>{
        if(dt.taskId == req.query.taskId)
        {
          ind = i;
          score = dt;
        }
      })
    }).then(()=>{

      scoreArray.splice(ind,1);
      scoreArray.push({taskId:score.taskId,taskTopic:score.taskTopic,uploadTime:score.uploadTime, Score:req.body.Score});
      scoreSchema.findOneAndUpdate({rollNo:req.query.rollNo},
        {'data':scoreArray},
        {new : true}
      ).then(()=>{
        taskSchema.findOne({_id:score.taskId}).then(v=>{
          v.attachment.Score=req.body.Score;
          att = v.attachment;
        }).then(()=>{

          taskSchema.findOneAndUpdate({_id:score.taskId},
            {'attachment':att},
            {new : true}
          ).then(res=>{return;})
        })
      })

    }).then(()=>res.status(200).json({success:true,msg:"Graded task"}))
    .catch((err) => res.status(500).json(err))



})


module.exports = router;
