
import { encryptPassword } from 'helpers'
import mongoose from 'mongoose'
const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  email: {
    type: String,
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

// add another filed named user email with email as id

userSchema.pre("save", async function(next) {
    this.password = await encryptPassword(this.password.toString())
    next();
});
export default mongoose.model('User', userSchema)
