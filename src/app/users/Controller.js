import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import User from '../../models/users/Model'
import { templateForgetPassword } from 'utils'
import userService from '../../models/users/Service'
import {
  Unauthorized,
  encryptPassword,
  generateJWTToken,
  sendEmail,
  NotFound
} from 'helpers'

const signup = async (ctx) => {
  const { body: data } = ctx.request
  return userService.create(data)
}

export default {
  signup
}
