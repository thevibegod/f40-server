var express = require("express");
var router = express.Router();
var userSchema = require("../models/UserSchema")
var mongoose = require("mongoose");
var adminProfileSchema = require("../models/adminProfileSchema");
var connStr =
process.env.DB_URL;
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

router.post("/addadmin", (req, res) => {
  if(req.body.Auth!=='GiveHimAccess'){
    res.status(403).json({success:false,msg:"Unauthorised Access"})
  }
  new userSchema({username:req.body.username,password:req.body.password,type:'admin'}).save()
  .then(()=>{
    const newProfile = new adminProfileSchema({
      username:req.body.username,
      mailId:req.body.mailId,
    });
    newProfile
      .save()
      .then(() =>
        res.status(201).json({ success: true, msg: "Added Profile to db" })
      )
  }).catch(err => res.json({ sucess: false, err }));
  });

router.post("/removeadmin", (req, res) => {
  if(req.body.Auth!=='GiveHimAccess'){
    res.status(403).json({success:false,msg:"Unauthorised Access"})
  }
  if (!req.body.username) {
    return res.status(400).json({ success: false, msg: "Bad Request." });
  }
  adminProfileSchema
    .findOneAndDelete({ username: req.body.username })
    .then(data => {
      userSchema.findOneAndDelete({ username: req.body.username }).then(
        res.status(200).json({ success: true, msg: "Profile removed from db" })
      );
    })
    .catch(err=>res.json(err));
});


module.exports = router;
