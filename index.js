var express = require('express');
var cors= require('cors')
var bodyParser = require('body-parser');
var eventRouter = require('./routes/events')
var profileRouter = require('./routes/profiles')
var userRouter = require('./routes/user')
var app = express();


app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  next();
})


const connectDB = require('./config/db');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
app.set('view engine','ejs')
app.use(eventRouter)
app.use(profileRouter)
app.use(userRouter)
app.get('/', function(req, res){
   res.send("GET Login/Home page");
});

app.post('/', function(req, res){
   res.send("POST Login/Home page");
});


app.get('*', function(req, res){
   res.send('Error 404.Page not found');
});


app.listen(3000);
