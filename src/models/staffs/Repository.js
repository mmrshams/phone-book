import BaseMongooseRepo from '../../lib/BaseMongooseRepo'
import Model from './Model'

class StaffRepo extends BaseMongooseRepo {
  constructor (Model) {
    super({ model: Model })
  }

  async create (data) {
    return this.save(data)
  }
}

const staffRepo = new StaffRepo(Model)
export default staffRepo
