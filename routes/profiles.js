var express = require("express");
var router = express.Router();
var scoreSchema = require("../models/scoreSchema");
var mongoose = require("mongoose");
var profileSchema = require("../models/profileSchema");
var attendanceSchema = require('../models/attendanceSchema');
var userSchema = require("../models/UserSchema");
var formidable = require('formidable');
var fs = require('fs');
var connStr =
  "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});


router.get("/addprofile", function(req, res) {
  res.render("profile");
});
router.get("/updateprofile", function(req, res) {
  res.render("profile2");
});

router.post("/addprofile", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.attachment.path;
    var ext = files.attachment.name.split('.')[1];
    var newpath = './public/profiles/' + fields.rollNo + '.' + ext ;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      new userSchema({username:fields.rollNo,password:fields.rollNo,type:"student"}).save();
      const newProfile = new profileSchema({
        name: fields.name,
        mailId:fields.mailId,
        id: newpath.slice(8),
        batch: fields.batch,
        studentMentorName:fields.studentMentorName,
        studentMentorMail:fields.studentMentorMail,
        studentMentorPhone:fields.studentMentorPhone,
        facultyMentorName: fields.facultyMentorName,
        facultyMentorMail: fields.facultyMentorMail,
        facultyMentorPhone:fields.facultyMentorPhone,
        rollNo:fields.rollNo
      });
      newProfile
        .save()
        .then(()=>new scoreSchema({rollNo:fields.rollNo}).save().then(()=>new attendanceSchema({rollNo:fields.rollNo,dates:[]}).save()).then(() =>
          res.status(201).json({ success: true, msg: "Added Profile to db" })
        ).catch(err => res.json({ sucess: false, err })));



      });
    })

});

router.post("/addachievement", (req, res) => {
  if (!req.query.rollNo) {
    return res.status(400).json({ success: false, msg: "Bad request" });
  }
  profileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
    profileSchema
      .findOneAndDelete({ rollNo: req.query.rollNo })
      .then(() => {
        data.achievements.push(req.body.achievement);
        const prof = new profileSchema({
          name: data.name,
          mailId:data.mailId,
          id: data.id,
          batch: data.batch,
          studentMentorName: data.studentMentorName,
          studentMentorMail: data.studentMentorMail,
          studentMentorPhone: data.studentMentorPhone,
          facultyMentorName: data.facultyMentorName,
          facultyMentorMail: data.facultyMentorMail,
          facultyMentorPhone: data.facultyMentorPhone,
          rollNo: data.rollNo,
          achievements: data.achievements
        });
        prof.save();
      })
      .then(() =>
        res.status(200).json({ success: true, msg: "Achievement added" })
      )
      .catch(err => res.json(err));
  });
});

router.post("/removeachievement", (req, res) => {
  if (!req.query.rollNo || req.body.id===null) {
    return res.status(400).json({ success: false, msg: "Bad request" });
  }
  profileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
    profileSchema
      .findOneAndDelete({ rollNo: req.query.rollNo })
      .then(() => {
        data.achievements.splice(req.body.id, 1);
        const prof = new profileSchema({
          name: data.name,
          mailId:data.mailId,
          id: data.id,
          batch: data.batch,
          studentMentorName: data.studentMentorName,
          studentMentorMail: data.studentMentorMail,
          studentMentorPhone: data.studentMentorPhone,
          facultyMentorName: data.facultyMentorName,
          facultyMentorMail: data.facultyMentorMail,
          facultyMentorPhone: data.facultyMentorPhone,
          rollNo: data.rollNo,
          achievements: data.achievements
        });
        prof.save();
      })
      .then(() =>
        res.status(200).json({ success: true, msg: "Removed achievement" })
      )
      .catch(err => res.json(err));
  });
});

// router.get("/studentprofilepicture", (req, res) => {
//   if (!req.query.rollNo) {
//     return res.status(400).json({ success: false, msg: "Bad request" });
//   }
//   profileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
//     gfs.files.findOne({ _id: data.id }, (err, file) => {
//       const readStream = gfs.createReadStream(file.filename);
//       readStream.pipe(res);
//     });
//   });
// });

router.get("/studentprofiledetails", (req, res) => {
  if (!req.query.rollNo) {
    return res.status(400).json({ success: false, msg: "Bad Request." });
  }
  profileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
    return res.status(200).json(data);
  });
});

router.get("/removestudentprofiledetails", (req, res) => {
  if (!req.query.rollNo) {
    return res.status(400).json({ success: false, msg: "Bad Request." });
  }
  scoreSchema.findOneAndDelete({rollNo:req.query.rollNo})
  profileSchema
    .findOneAndDelete({ rollNo: req.query.rollNo })
    .then(data => {
      fs.unlink('./public'+data.id, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
    })
    .then(
      res.status(200).json({ success: true, msg: "Profile removed from db" })
    );
});

router.post("/studentprofiledetailsupdation",(req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    if (!fields.rollNo) {
      return res.status(400).json({ success: false, msg: "Bad Request" });
    }
    profileSchema
      .findOne({ rollNo: fields.rollNo })
      .then(data => {
        fs.unlink('./public'+data.id, function (err) {
          if (err) throw err;
          console.log('File deleted!');
        });
      })
      .then(() => {
        var oldpath = files.attachment.path;
        var ext = files.attachment.name.split('.')[1];
        var newpath = './public/profiles/' + fields.rollNo + '.' + ext ;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
        const newProfile = new profileSchema({
          name: fields.name,
          mailId:fields.mailId,
          id: newpath.slice(8),
          batch: fields.batch,
          studentMentorName: fields.studentMentorName,
          studentMentorMail: fields.studentMentorMail,
          studentMentorPhone: fields.studentMentorPhone,
          facultyMentorName: fields.facultyMentorName,
          facultyMentorMail: fields.facultyMentorMail,
          facultyMentorPhone: fields.facultyMentorPhone,
          rollNo: fields.rollNo
        });
        newProfile.save();
      })
    })
      .then(() =>
        res.status(201).json({ success: true, msg: "Profile updated" })
      )
      .catch(err => res.ststus(400).json({ success: false}));
  })
    })
module.exports = router;
