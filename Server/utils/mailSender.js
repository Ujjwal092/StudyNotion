const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, //  important
      secure: false, //  important
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    console.log("MAIL HOST:", process.env.MAIL_HOST);
    console.log("MAIL USER:", process.env.MAIL_USER);

    let info = await transporter.sendMail({
      from: `"StudyNotion" <${process.env.MAIL_USER}>`, // better format
      to: email,
      subject: title,
      html: body,
    });

    console.log("MAIL SENT:", info.response);
    return info;
  } catch (error) {
    console.log("MAIL ERROR:", error.message);
  }
};

module.exports = mailSender;
