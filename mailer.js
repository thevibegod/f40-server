const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;



const initializeMailer = () =>{
  const oauth2Client = new OAuth2(
       process.env.clientId,
      process.env.clientSecret,
       "https://developers.google.com/oauthplayground" 
  );

  oauth2Client.setCredentials({
       refresh_token:  process.env.refreshToken
  });
  const accessToken = oauth2Client.getAccessToken()

  const smtpTransport = nodemailer.createTransport({
       service: "gmail",
       auth: {
            type: "OAuth2",
            user: "contact.f40.ece@gmail.com",
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken: accessToken
       }
  });
  return smtpTransport;
}

const sendMail = (mailer,options) =>{
  const mailOptions = {
       from: "F40 LMS <contact.f40.ece@gmail.com>",
       to: options.receiver,
       subject: options.subject,
       text:options.message,
       cc:options.cc,
       bcc:options.bcc
  };
  mailer.sendMail(mailOptions, (error, response) => {
    if(error){
      console.log(error)
    }
      console.log(response);
  });
}

exports.sendMail = sendMail;
exports.initializeMailer = initializeMailer;
