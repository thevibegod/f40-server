var express = require("express");
var router = express.Router();

var mongoose = require("mongoose");
var achievementsSchema = require("../models/achievementsSchema");

var connStr =
  "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

router.get("/addachievement", function(req, res) {
  res.render("achievement1");
});
router.get("/updateachievement", function(req, res) {
  res.render("achievement2");
});

router.post("/addachievement", (req, res) => {
  const newachievement = new achievementsSchema({
    achievements: req.body.achievements,
    date: req.body.date
  });
  newachievement
    .save()
    .then(() => res.status(201).send("Added achievement to db"))
    .catch(err => res.json(err));
});

router.get("/achievementdetails", (req, res) => {
  if (!req.query.achievements) {
    return res.status(400).send("Bad Request.");
  }
  achievementsSchema
    .findOne({ achievements: req.query.achievements })
    .then(data => {
      return res.status(200).json(data);
    });
});

router.get("/removeachievement", (req, res) => {
  if (!req.query.achievements) {
    return res.status(400).send("Bad Request.");
  }
  achievementsSchema
    .findOneAndDelete({ achievements: req.query.achievements })
    .then(res.status(200).send("achievement removed from db"));
});

router.post("/achievementupdation", (req, res) => {
  if (!req.body.achievements) {
    return res.status(400).send("Bad Request.");
  }
  achievementsSchema
    .findOneAndDelete({ achievements: req.body.achievements })
    .then(() => {
      const newachievement = new achievementsSchema({
        achievements: req.body.achievements,
        date: req.body.date
      });
      newachievement.save();
    })
    .then(() => res.status(201).send("Updated achievement in db"))
    .catch(err => res.json(err));
});

router.get("/getallachievements", (req, res) => {
  achievementsSchema.find({}).then(function(achievement) {
    res.json(achievement);
  });
});
module.exports = router;
