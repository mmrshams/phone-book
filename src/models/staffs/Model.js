import mongoose from 'mongoose'
const { Schema } = mongoose

// To fix https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise

const staffSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: String,
  updated: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Staff', staffSchema)
