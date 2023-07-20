// import
const nodemailer = require("nodemailer");
require("dotenv").config;

exports.mailSender = async (email,title,body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    
    let info = await transporter.sendMail({
        from:'Learning Ways',
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`,
    })
    console.log(info);
    return info;

  } catch (error) {
    console.log("Fail to send mail ", error.message);
  }
};