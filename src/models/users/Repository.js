import BaseMongooseRepo from '../../lib/BaseMongooseRepo'
import Model from './Model'

class UserRepo extends BaseMongooseRepo {
  constructor (Model) {
    super({ model: Model, tableName: Model.tableName })
  }

  async create (data) {
    return this.save(data)
  }

  // async findByEmail ({ email }) {
  //   return this.findBy({ by: 'email', key: email, withGraphFetched })
  // }
}

const userRepo = new UserRepo(Model)
export default userRepo
