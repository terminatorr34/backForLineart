import mongoose from 'mongoose'

const Post = new mongoose.Schema ({

  "userName": {type: String, required: true},
  "phone": {type: Number, required: true},
  "mail": {type: String},
  "photo": {type: String},
  "inputTextArea": {type: String},
  "inputCheckbox": {type: String}, 
"order": {type: Object} 
})

export default mongoose.model('Post', Post)
