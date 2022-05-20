import nodemailer from 'nodemailer';

const yourEmail = "yourEmail@gmail.com";  // put your email and gmail pass
const yourPass = "yourPass";

const send = () => {
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: false, // use SSL - TLS
          auth: {
              user: yourEmail,
              pass: yourPass,
          },
      });
      let mailOptions = {
          from: yourEmail,
          to: yourEmail,
          subject: 'subject',
          attachments: [{
              filename: 'vac.txt.zip',
              path: './vac.txt.zip'
          }]
      };

      transporter.sendMail(mailOptions)
          .then(function (){
              console.log('Email sent!');
          })
          .catch(function (error){
              console.log(error);
          })
}

export { send };