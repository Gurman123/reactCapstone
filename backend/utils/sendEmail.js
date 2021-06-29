const nodemailer = require('nodemailer');

const sendEmail = async options =>{

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2e4572b975e4a2",
          pass: "1d9e7a3c61735c"
        }
      });

}


module.exports = sendEmail;