var  notificationSchema = require('../models/notificationSchema');
var mongoose = require('mongoose')
var router = require('express').Router();

var connStr = "mongodb+srv://adarsh18bec095:Adarsh123@f40cluster-wugpz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

router.get('/notificationuser',(req,res)=>{
  res.render('user')
})

router.post('/createuser',(req,res)=>{
  const testUser = new UserSchema({username:req.body.username,password:req.body.password});

  // save user to database
  testUser.save().then(res.status(201).send("User Created")).catch(err=>res.json(err));
})

router.post('/validateuser',(req,res)=>{
  // fetch user and test password verification
  UserSchema.findOne({ username: req.body.username }, function(err, user) {
     if (err) throw err;
      user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          return res.send(isMatch)
      });
  });
})

router.delete('/user',(req,res)=>{
  if(!req.query.username){
    res.status(400).send("Bad Request")
  }
  UserSchema.findOneAndDelete({username:req.query.username}).then(()=>  res.status(200).send("User deleted."))
})

router.put('/user',(req,res)=>{
  if(!req.query.username){
    res.status(400).send("Bad Request")
  }
  UserSchema.findOneAndDelete({username:req.query.username}).then(()=>{
  const testUser = new UserSchema({username:req.body.username,password:req.body.password});
  testUser.save().then(res.status(201).send("User Updated"));})
})

module.exports = router;
