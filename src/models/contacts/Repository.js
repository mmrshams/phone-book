import BaseMongooseRepo from '../../lib/BaseMongooseRepo'
import Model from './Model'

class ContactRepo extends BaseMongooseRepo {
  constructor (Model) {
    super({ model: Model, tableName: Model.tableName })
  }

  async create (data) {
    return this.save(data)
  }
}

const contactRep = new ContactRepo(Model)
export default contactRep
