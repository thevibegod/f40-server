const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const clientId = "26591115980-v4atfgfhdh23oit3l4f5orifajauua3l.apps.googleusercontent.com";
const clientSecret =  "DQlq7gysDK2EFWTaK-fcSnpt";
const refreshToken = "1//04GAU0FiIfBcECgYIARAAGAQSNwF-L9Ir2zxqyjgBhBYPU_aNrwyE3jCK4rSllhuoszw6SfGX4ZHHLhXRYW-i8S1kp7TqJ6pytKM";


const initializeMailer = () =>{
  const oauth2Client = new OAuth2(
       clientId, // ClientID
      clientSecret, // Client Secret
       "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
       refresh_token:  refreshToken
  });
  const accessToken = oauth2Client.getAccessToken()

  const smtpTransport = nodemailer.createTransport({
       service: "gmail",
       auth: {
            type: "OAuth2",
            user: "contact.f40.ece@gmail.com",
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken: refreshToken,
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
