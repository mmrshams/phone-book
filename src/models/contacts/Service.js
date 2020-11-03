
import userRepo from './Repository'

class ContactService {
  async create (data) {
    return userRepo.create(data)
  }
}
const contactService = new ContactService()
export default contactService
