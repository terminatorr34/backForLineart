import nodeMailer from 'nodemailer'


  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: false,
    auth: {
      user: 'olimpprint7@gmail.com',
      pass: 'qkjetlhbeowaxgra'
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    }
  })

  const mailer = (message) =>

    transporter.sendMail(message, (err, info)=>{
if(err) return console.log (err.message)
console.log('mail sent', info.messageId)
    })
  
    export {mailer}

