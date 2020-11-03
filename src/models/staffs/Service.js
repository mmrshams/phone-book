import User from '../../models/users/Model'
import staffRepo from './Repository'
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

class StaffService {
  async create (data) {
    return staffRepo.create(data)
  }
}
const staffService = new StaffService()
export default staffService
