const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const sendEmailEtheral = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jerod.williamson@ethereal.email",
      pass: "S41PZkz9NevG3GMQrV",
    },
  });
  let info = await transporter.sendMail({
    from: '"mukesh Thakur" <mukesh060519@gmail.com>',
    to: "mukesh12cse@gmail.com",
    subject: "Hello",
    html: "<h2> Sending EMail from Node</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "mukesh12cse@gmail.com",
    from: "mukesh060519@gmail.com",
    subject: "Mail sending with SendGrid",
    text: "and easy to do anywhere,even with node js",
    html: ",<strong> and easy to do anywhere</strong>",
  };
  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
