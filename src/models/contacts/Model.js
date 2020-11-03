
import { encryptPassword } from 'helpers'
import mongoose from 'mongoose'
const { Schema } = mongoose

mongoose.Promise = global.Promise

const contactSchema = new Schema({
  description: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  phoneNumbers: {
    type: [String],
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


export default mongoose.model('Contact', contactSchema)
