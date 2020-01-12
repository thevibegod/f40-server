const jwt = require("jsonwebtoken");
const path = require("path");
const generateToken = user => {
  return jwt.sign({user} , process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
};

const validateMiddleware = (req, res, next) => {
  let token = req.headers["x-access-token"]
  if (!token) res.sendFile(path.join(__dirname,"../public/404.html"));
  else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) res.status(403).json({ success: false, msg: "Invalid Token" });
      else {
        req.loggedInUser = decoded;
        next();
      }
    });
  }
};
module.exports = { generateToken, validateMiddleware };
