import express from 'express'
import multer from 'multer'
import mongoose from 'mongoose'
import Post from '../back/post.js'
import cors from 'cors'



console.log('hello')
const PORT = 5501
const DB_URL = 'mongodb+srv://terminatorr34:Successfull1179!@cluster0.yw45um6.mongodb.net/?retryWrites=true&w=majority'
const upload = multer({ dest: '/' })
const app = express()
app.use(express.json())
// app.use(express.text())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
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

app.post('/', upload.single('photo'), async (req, res) => {
  if (!req.body) return res.status(400).json('нет данных')
  try {
    const { userName, phone, mail, photo, inputTextArea, inputCheckbox, order } = req.body
    const post = await Post.create({ userName, phone, mail, photo, inputTextArea, inputCheckbox, order })
    console.log("---", req.body);
    res.json(req.body)
  }

  catch (e) {
    res.status(500).json(e)
  }
})

app.get('/', (req, res) => {
  res.status(200)
})

