var UserSchema = require("../models/UserSchema");
var mongoose = require("mongoose");
var router = require("express").Router();
var connStr =
  "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
  if (err) throw err;
  console.log("Successfully connected to MongoDB");
});

router.get("/createuser", (req, res) => {
  if (req.loggedInUser.user.type === "admin") res.render("user");
  else res.status(403).send("No permission to access this page");
});

router.post("/createuser", (req, res) => {
  if (req.loggedInUser.user.type !== "admin")
    return res
      .status(403)
      .send({ success: false, msg: "No permission to access this page" });
  const testUser = new UserSchema({
    username: req.body.username,
    password: req.body.password,
    type:req.body.type
  });

  // save user to database
  testUser
    .save()
    .then(()=>res.status(201).json({ success: true, msg: "User Created" }))
    .catch(err => res.json(err));
});

router.delete("/user", (req, res) => {
  if (req.loggedInUser.user.type !== "admin")
    return res
      .status(403)
      .json({ success: false, msg: "No permission to access this page" });
  if (!req.query.username) {
    res.status(400).json({ success: false, msg: "Bad request" });
  }
  UserSchema.findOneAndDelete({ username: req.query.username }).then(() =>
    res.status(200).json({ success: true, msg: "User deleted" })
  );
});

router.put("/user", (req, res) => {
  if (!req.query.username) {
    res.status(400).json({ success: false, msg: "Bad request" });
  }
  UserSchema.findOneAndDelete({ username: req.query.username }).then(() => {
    const testUser = new UserSchema({
      username: req.body.username,
      password: req.body.password,
      type: req.body.type
    });
    testUser
      .save()
      .then(res.status(201).json({ success: true, msg: "User updated" }));
  });
});

router.get("/students",(req,res)=>{
  let arr = [];
  UserSchema.find({type:"student"}).sort({rollNo:1}).then((data)=>data.map(user=>{
    arr.push(user.username);
  })).then(()=>res.json(arr)).catch(err=>res.json(err))
})

module.exports = router;
