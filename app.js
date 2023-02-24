import express from 'express'
import multer from 'multer'
import mongoose from 'mongoose'
import Post from '../back/post.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import fileService from './fileService.js'
import {mailer} from '../back/mailer.js'

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// export fre from 'NODE_TLS_REJECT_UNAUTHORIZED=0'


console.log('hello')
const PORT = 5501
const DB_URL = 'mongodb+srv://terminatorr34:Successfull1179!@cluster0.yw45um6.mongodb.net/?retryWrites=true&w=majority'
const upload = multer({ dest: '/' })
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload({}))
app.set("view engine", "ejs")
mongoose.set('strictQuery', false)
async function startUP() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('SERVER WORKS on ' + PORT))
  }
  catch (e) {
    console.log(e, 'connection error to BD or PORT')
  }
}
startUP()

app.post('/', async (req, res) => {
  if (!req.body) return res.status(400).json('нет данных')
  try {
    const { userName, phone, mail, photo, inputTextArea, inputCheckbox, order } = req.body
    const message = {
      from: 'Test NodeMailer',
      to: req.body.mail,
      subject: 'testing 1234',
      text: 'userName: ' + req.body.userName + 'phone: ' + req.body.phone + 'comments: ' + req.body.inputTextArea + 'thank you. we contact you ASAP'
    }
    mailer(message)

    console.log(req.body.mail)
    const fileName = fileService.saveFile(req.files.photo)
    const post = await Post.create({ userName, phone, mail, photo, inputTextArea, inputCheckbox, order, photo: fileName })
    console.log("---", post);
    // console.log(req.files);
    res.json(post)
    
    // res.json(req.files)
  }

  catch (e) {
    res.status(500).json(e)
  }
})
// const html = `
// <h1> hello
// <p> sent using nodemailer </p>
// </h1>
// `
    

app.get('/', (req, res) => {
  res.status(200)
})


