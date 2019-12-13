var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var notificationSchema = require("../models/notificationSchema");

var connStr =
  "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

router.get("/addnotification", function(req, res) {
  res.render("notification1");
});
router.get("/updatenotification", function(req, res) {
  res.render("notification2");
});

router.post("/addnotification", (req, res) => {
  const newnotification = new notificationSchema({
    title: req.body.title,
    desc: req.body.desc
  });
  newnotification
    .save()
    .then(() =>
      res.status(201).json({ success: false, msg: "Added Notification to db" })
    )
    .catch(err => res.json({ success: false, err }));
});

router.get("/notificationdetails", (req, res) => {
  if (!req.query.title) {
    return res.status(400).json({ success: false, msg: "Bad Request" });
  }
  notificationSchema.findOne({ title: req.query.title }).then(data => {
    return res.status(200).json(data);
  });
});

router.get("/removenotification", (req, res) => {
  if (!req.query.title) {
    return res.status(400).json({ success: false, msg: "Bad Request" });
  }
  notificationSchema
    .findOneAndDelete({ title: req.query.title })
    .then(() =>
      res
        .status(200)
        .json({ success: true, msg: "Notificication removed from DB" })
    );
});

router.post("/notificationupdation", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ success: false, msg: "Bad Request" });
  }
  notificationSchema
    .findOneAndDelete({ title: req.body.title })
    .then(() => {
      const newnotification = new notificationSchema({
        title: req.body.title,
        desc: req.body.desc
      });
      newnotification.save();
    })
    .then(() =>
      res
        .status(201)
        .json({ success: true, msg: "Notificication updated in DB" })
    )
    .catch(err => res.json({ success: false, err }));
});

router.get("/getallnotifications", (req, res) => {
  notificationSchema.find({}).then(function(notifications) {
    res.json(notifications);
  });
});
module.exports = router;
