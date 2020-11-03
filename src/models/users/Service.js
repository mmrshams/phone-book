import User from '../../models/users/Model'
import userRepo from './Repository'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { templateForgetPassword } from 'utils'
import {
  Unauthorized,
  encryptPassword,
  generateJWTToken,
  sendEmail,
  NotFound
} from 'helpers'

class UserService {

  async create (data) {
    return userRepo.create(data)
  }

  async login (data) {
    const { email } = data
    const user = await userRepo.findByEmail(email)
    const isValid = await bcrypt.compare(data.password, user.password)
    if (!isValid) {
      throw Unauthorized('Unauthorized, password is invalid')
    }
    const parsedUser = user.toJSON()
    console.log(parsedUser._id)
    return {
      ...parsedUser,
      token: generateJWTToken({
        id: parsedUser._id
      })
    }
  }
}
const userService = new UserService()
export default userService
