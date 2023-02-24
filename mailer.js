import nodeMailer from 'nodemailer'


  const transporter = nodeMailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'samson.dare35@ethereal.email',
      pass: 'HWXnRCnD4QgSwVpf32'
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

