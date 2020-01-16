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
const path = require('path');
const PORT = process.env.PORT || '3000';
const dotenv = require('dotenv')
const result = dotenv.config()
const userSchema = require("./models/UserSchema");
const adminRouter = require("./routes/adminProfiles")



const mailer = require('./mailer').initializeMailer;
const mailerObj = mailer();
const sendMail = require('./mailer').sendMail;

const options ={
   receiver:"contact.f40.ece@kct.ac.in",
   subject:"Hello world",
   message:"The server has begun to run."
 }
 sendMail(mailerObj,options);

var createTimeStamp = () => {
  dateObj = new Date();
  dateObj.setMinutes(dateObj.getMinutes());
  return `${(dateObj.getDate())>9?dateObj.getDate():'0'+dateObj.getDate()}/${(dateObj.getMonth()+1)>9?dateObj.getMonth()+1:'0'+(dateObj.getMonth()+1).toString()}/${(dateObj.getFullYear())>9?dateObj.getFullYear():'0'+dateObj.getFullYear()} ${(dateObj.getHours())>9?dateObj.getHours():'0'+dateObj.getHours()}:${(dateObj.getMinutes())>9?dateObj.getMinutes():'0'+dateObj.getMinutes()}:${(dateObj.getSeconds())>9?dateObj.getSeconds():'0'+dateObj.getSeconds()}`
}
app.options('*', cors())
app.use(cors());
app.use(express.static('public'));
app.use(express.static('public/f40'));
app.use(express.static('public/f40-sm'));
app.use(express.static('public/f40-fm'));
app.use(express.static('public/admin'));
app.get('/f40/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/f40/index.html'));
});
app.get('/f40-sm/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/f40-sm/index.html'));
});
app.get('/f40-fm/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/f40-fm/index.html'));
});
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/admin/index.html'));
});
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const connectDB = require("./config/db");
app.use(bodyParser.json({
  limit: '100mb'
}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '100mb'
}));

connectDB();
app.set('view engine', 'ejs');

app.use(adminRouter);

app.get('/wrongurl', (req, res) => {
  res.render('adm')
})

app.post('/reallywrongurl', (req, res) => {
  if (!req.body.username || !req.body.password || req.body.Auth !== 'IAmSerious') {
    return res.status(400).json({
      success: false,
      msg: "Invalid User"
    })
  }
  userSchema.findOne({
    username: req.body.username
  }).then(user => {
    if (user === null || user.type !== 'super-admin') {
      return res.status(400).json({
        success: false,
        msg: "Invalid User"
      })
    }
    user.comparePassword(req.body.password, function(err, isMatch) {
      if (err) throw err;
      else {
        if (isMatch) {
          return res.render('adm2');
        } else {
          return res.status(400).json({
            success: false,
            msg: "Invalid username or password"
          });
        }
      }
    })
  })
})

app.post('/superadminaccess', (req, res) => {
  if(req.body.Auth!=='WhateverMan'){
    return res.status(400).json({success:false,msg:"Invalid Code"})
  }
  if(!req.body.code){
    return res.status(400).json({success:false,msg:"Invalid Code"})
  }
  if(req.body.code==='show'){
    userSchema.find({type:'admin'}).then(user=>res.status(200).json(user))
  }
  if(req.body.code==='add'){
    return res.render('adm3')
  }
  if(req.body.code==='remove'){
    return res.render('adm4')
  }
})

app.post('/otprequestadmin', (req, res) => {
  if (!req.body.username) {
    return res.status(400).json({
      success: false,
      msg: "Invalid User"
    });
  }
  require("./models/adminProfileSchema").findOne({
    username: req.body.username
  }).then(pData => {
    if (!pData) {
      return res.status(400).json({
        success: false,
        msg: 'Invalid User',
        otp: null
      });
    } else {
      const OTP = auth.generateOTP(process.env.otpSecret);
      userSchema.findOneAndDelete({
        username: req.body.username
      }).then(user => {
        new userSchema({
          username: user.username,
          password: user.password,
          type: user.type,
          otpData: {
            OTP: OTP,
            time: createTimeStamp()
          }
        }).save().then(() => {
          const mailData = {
            receiver: pData.mailId,
            subject: "Password Reset",
            message: `Your OTP for resetting your password is ${OTP} and is valid for 5 minutes.If this request is not done by you, please contact admin immediately.\n\n\n This is an automatically generated mail.Kindly dont reply to this mail.`
          }
          sendMail(mailerObj, mailData);
          return res.status(200).json({
            success: true,
            msg: 'OTP generated'
          });
        })
      })
    }
  })
})

app.post('/otprequestmentor', (req, res) => {
  if (!req.body.username) {
    return res.status(400).json({
      success: false,
      msg: "Invalid User"
    });
  }
  require("./models/mentorProfileSchema").findOne({
    rollNo: req.body.username
  }).then(pData => {
    if (!pData) {
      return res.status(400).json({
        success: false,
        msg: 'Invalid User',
        otp: null
      });
    } else {
      const OTP = auth.generateOTP(process.env.otpSecret);
      userSchema.findOneAndDelete({
        username: req.body.username
      }).then(user => {
        new userSchema({
          username: user.username,
          password: user.password,
          type: user.type,
          otpData: {
            OTP: OTP,
            time: createTimeStamp()
          }
        }).save().then(() => {
          const mailData = {
            receiver: pData.mailId,
            subject: "Password Reset",
            message: `Your OTP for resetting your password is ${OTP} and is valid for 5 minutes.If this request is not done by you, please contact admin immediately.\n\n\n This is an automatically generated mail.Kindly dont reply to this mail.`
          }
          sendMail(mailerObj, mailData);
          return res.status(200).json({
            success: true,
            msg: 'OTP generated'
          });
        })
      })
    }
  })
})

app.post('/otprequest', (req, res) => {
  if (!req.body.username) {
    return res.status(400).json({
      success: false,
      msg: "Invalid User"
    });
  }
  require("./models/profileSchema").findOne({
    rollNo: req.body.username
  }).then(pData => {
    if (!pData) {
      return res.status(400).json({
        success: false,
        msg: 'Invalid User',
        otp: null
      });
    } else {
      const OTP = auth.generateOTP(process.env.otpSecret);
      userSchema.findOneAndDelete({
        username: req.body.username
      }).then(user => {
        new userSchema({
          username: user.username,
          password: user.password,
          type: user.type,
          otpData: {
            OTP: OTP,
            time: createTimeStamp()
          }
        }).save().then(() => {
          const mailData = {
            receiver: pData.mailId,
            subject: "Password Reset",
            message: `Your OTP for resetting your password is ${OTP} and is valid for 5 minutes.If this request is not done by you, please contact admin immediately.\n\n\n This is an automatically generated mail.Kindly dont reply to this mail.`
          }
          sendMail(mailerObj, mailData);
          return res.status(200).json({
            success: true,
            msg: 'OTP generated'
          });
        })
      })
    }
  })
})

app.post('/passwordchange', (req, res) => {
  if (!req.body.OTP) {
    return res.status(400).json({
      success: false,
      msg: "No OTP"
    })
  } else {
    userSchema.findOne({
      username: req.body.username
    }).then(u => {
      const OTP_valid = u.otpData.OTP === req.body.OTP;
      const timestamp = u.otpData.time;
      let dateObj = new Date();
      dateObj.setDate(timestamp.slice(0, 2));
      dateObj.setMonth(parseInt(timestamp.slice(3, 5)) - 1);
      dateObj.setFullYear(timestamp.slice(6, 10));
      dateObj.setHours(timestamp.slice(11, 13));
      dateObj.setMinutes(timestamp.slice(14, 16));
      dateObj.setSeconds(timestamp.slice(17, 19));
      const seconds = Math.floor((new Date().getTime() - dateObj.getTime()) / 1000);
      const time_check = seconds <= 300;
      if (OTP_valid && time_check) {
        userSchema.findOneAndDelete({
          username: req.body.username
        }).then(user => {
          new userSchema({
            username: user.username,
            password: req.body.password,
            type: user.type
          }).save().then(() =>
            res.status(200).json({
              success: true,
              msg: "Password Changed"
            })
          )
        })
      } else {
        return res.status(400).json({
          success: false,
          msg: "Invalid OTP"
        });
      }

    })
  }
})

app.post("/validateuser", (req, res) => {
  require("./models/UserSchema").findOne({
      username: req.body.username
    },

    function(err, user) {
      if (err) throw err;

      if (user === null) {
        res.status(400).json({
          success: false,
          msg: "Invalid username or password"
        });
      } else {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (err) throw err;
          else {
            if (isMatch) {
              res.json({
                success: true,
                msg: "Login Successful",
                token: auth.generateToken(user),
                type: user.type
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
app.listen(PORT);
