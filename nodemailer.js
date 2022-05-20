import nodemailer from 'nodemailer';

const yourEmail = "arnika200@gmail.com";
const yourPass = "yourEmailPassword";
const mailHost = "gmail.com";
const mailPort = 587;
const senderEmail = "arnika200@gmail.com"
/**
 * Send mail
 * @param {string} to
 * @param {string} subject
 * @param {string[html]} htmlContent
 * @returns
 */
const sendMail = (to, subject, htmlContent) => {
    let transporter = nodemailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // use SSL - TLS
        auth: {
            user: yourEmail,
            pass: yourPass,
        },
    });
    let mailOptions = {
        from: senderEmail,
        to: to,
        subject: subject,
        html: htmlContent,
        attachments: [{
            filename: 'vac.txt.zip',
            path: './'
        }]
    };

    return transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Mail was sended');
        }
    }); // promise

};

export {sendMail};