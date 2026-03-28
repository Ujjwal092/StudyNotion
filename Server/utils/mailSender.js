const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "StudyNotion",
          email: "us581318@gmail.com", // verified sender
        },
        to: [{ email }],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.MAIL_PASS,
          "Content-Type": "application/json",
        },
      },
    );
    console.log("API KEY:", process.env.MAIL_PASS);
    console.log("MAIL SENT:", response.data);
    return response.data;
  } catch (error) {
    console.log("MAIL ERROR:", error.response?.data || error.message);
  }
};

module.exports = mailSender;
