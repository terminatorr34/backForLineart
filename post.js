import mongoose from 'mongoose'

const Post = new mongoose.Schema ({

  userName: {type: String},
  phone: {type: String},
  mail: {type: String},
  photo: {type: String},
  inputTextArea: {type: String},
  inputCheckbox: {type: String}, 
order: {type: Object} 
})

export default mongoose.model('Post', Post)
