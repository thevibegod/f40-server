const express = require("express");
const bodyParser = require("body-parser");
const profileRouter = require("./routes/profiles");
const userRouter = require("./routes/user");
var eventRouter = require("./routes/events");
const auth = require("./auth/auth");
const app = express();

const connectDB = require("./config/db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
app.set("view engine", "ejs");

app.post("/validateuser", (req, res) => {
  // fetch user and test password verification
  require("./models/UserSchema").findOne(
    { username: req.body.username },
    function(err, user) {
      if (err) throw err;
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (err) throw err;
        else {
          if (isMatch) {
            res.json({
              success: true,
              msg: "Login Successful",
              token: auth.generateToken(user.username)
            });
          } else {
            res.json({
              success: false,
              msg: "Invalid username or password"
            });
          }
        }
      });
    }
  );
});

app.use(auth.validateMiddleware);
app.use(userRouter);
app.use(eventRouter);
app.use(profileRouter);
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
