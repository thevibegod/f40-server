var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var mentorProfileSchema = require("../models/mentorProfileSchema");
var formidable = require('formidable');
var fs = require('fs');
var connStr =
  "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});


router.post("/addmentorprofile", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.attachment.path;
    var ext = files.attachment.name.split('.')[1];
    var newpath = './public/profiles/' + fields.rollNo + '.' + ext ;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      const newProfile = new mentorProfileSchema({
        name: fields.name,
        mailId:fields.mailId,
        id: newpath.slice(8),
        batch: fields.batch,
        rollNo:fields.rollNo,
        mentees:[]
      });
      newProfile
        .save()
        .then(() =>
          res.status(201).json({ success: true, msg: "Added Profile to db" })
        )
        .catch(err => res.json({ sucess: false, err }));
      });
    })

});

router.post("/addmentee", (req, res) => {
  if (!req.query.rollNo) {
    return res.status(400).json({ success: false, msg: "Bad request" });
  }
  mentorProfileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
    mentorProfileSchema
      .findOneAndDelete({ rollNo: req.query.rollNo })
      .then(() => {
        data.mentees.push(req.body.rollNo);
        const prof = new mentorProfileSchema({
          name: data.name,
          mailId:data.mailId,
          id: data.id,
          batch: data.batch,
          rollNo: data.rollNo,
          mentees: data.mentees
        });
        prof.save();
      })
      .then(() =>
        res.status(200).json({ success: true, msg: "Mentee added" })
      )
      .catch(err => res.json(err));
  });
});

router.post("/removementee", (req, res) => {
  if (!req.query.rollNo || !req.body.id) {
    return res.status(400).json({ success: false, msg: "Bad request" });
  }
  mentorProfileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
    mentorProfileSchema
      .findOneAndDelete({ rollNo: req.query.rollNo })
      .then(() => {
        data.mentees.splice(req.body.id, 1);
        const prof = new mentorProfileSchema({
          name: data.name,
          mailId:data.mailId,
          id: data.id,
          batch: data.batch,
          rollNo: data.rollNo,
          mentees: data.mentees
        });
        prof.save();
      })
      .then(() =>
        res.status(200).json({ success: true, msg: "Removed mentor" })
      )
      .catch(err => res.json(err));
  });
});

router.get("/mentorprofiledetails", (req, res) => {
  if (!req.query.rollNo) {
    return res.status(400).json({ success: false, msg: "Bad Request." });
  }
  mentorProfileSchema.findOne({ rollNo: req.query.rollNo }).then(data => {
    return res.status(200).json(data);
  });
});

router.get("/removementorprofiledetails", (req, res) => {
  if (!req.query.rollNo) {
    return res.status(400).json({ success: false, msg: "Bad Request." });
  }
  mentorProfileSchema
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

router.post("/mentorprofiledetailsupdation",(req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    if (!fields.rollNo) {
      return res.status(400).json({ success: false, msg: "Bad Request" });
    }
    mentorProfileSchema
      .findOneAndDelete({ rollNo: fields.rollNo })
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
        const newProfile = new mentorProfileSchema({
          name: fields.name,
          mailId:fields.mailId,
          id: files.id,
          batch: fields.batch,
          rollNo: fields.rollNo,
          mentees:data.mentees
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
