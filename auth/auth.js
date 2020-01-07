const jwt = require("jsonwebtoken");
const config = require("../config/token.js");
const generateToken = user => {
  return jwt.sign({user} , config.secret, {
    expiresIn: "24h"
  });
};

const validateMiddleware = (req, res, next) => {
  let token = req.headers["x-access-token"]
  if (!token) res.status(403).json({ success: false, msg: "Not logged in" });
  else {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) res.status(403).json({ success: false, msg: "Invalid Token" });
      else {
        req.loggedInUser = decoded;
        next();
      }
    });
  }
};
module.exports = { generateToken, validateMiddleware };
