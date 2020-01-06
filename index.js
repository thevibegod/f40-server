const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const profileRouter = require("./routes/profiles");
const userRouter = require("./routes/user");
var eventRouter = require("./routes/events");
var notificationRouter = require("./routes/notification");
var courseRouter = require("./routes/course");
const attendanceRouter = require("./routes/attendance");
const assessmentRouter = require("./routes/assessment");
const taskRouter = require("./routes/tasks");
const menteeProfileRouter = require("./routes/menteeProfiles");
const auth = require("./auth/auth");
const app = express();

app.options('*', cors())
app.use(cors());
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
  res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const connectDB = require("./config/db");
app.use(bodyParser.json({limit: '100mb'} ));
app.use(bodyParser.urlencoded({extended: true, limit: '100mb' }));

connectDB();
app.set("view engine", "ejs");

// fetch user and test password verification
app.post("/validateuser", (req, res) => {

  require("./models/UserSchema").findOne(
    { username: req.body.username },

    function(err, user) {
      if (err) throw err;

      if(user === null) {
        res.status(400).json({
          success: false,
          msg: "Invalid username or password"
        });
      }
      else {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          else {
            if (isMatch) {
              res.json({
                success: true,
                msg: "Login Successful",
                token: auth.generateToken(user),
                type:user.type
              });
            } else {
              res.status(400).json({
                success: false,
                msg: "Invalid username or password"
              });
            }
          }
        });
      }
    }
  );
});

app.use(auth.validateMiddleware);
app.use(userRouter);
app.use(eventRouter);
app.use(profileRouter);
app.use(notificationRouter);
app.use(courseRouter);
app.use(attendanceRouter);
app.use(assessmentRouter);
app.use(menteeProfileRouter);
app.use(taskRouter);

app.get("/", function(req, res) {
  res.send("GET Login/Home page");
});

app.post("/", function(req, res) {
  res.send("POST Login/Home page");
});

app.get("*", function(req, res) {
  res.send("Error 404.Page not found");
});

app.listen(3000);
