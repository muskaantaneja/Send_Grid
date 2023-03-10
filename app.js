const sgMail = require('@sendgrid/mail');
const API_KEY = process.env.SEND_GRID
sgMail.setApiKey(API_KEY);

const msg = {
    to : 'ravi149185@gmail.com',
    from : 'sakshamkhandelwal2001@gmail.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)

    console.log("Sending mail is successful", response)
  })
  .catch((error) => {
    console.error(error)
  })
