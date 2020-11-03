import module from '../helpers/knex'
import { v4 as uuidv4 } from 'uuid'
import baseRepo from './base/BaseRepo'
import { AppError, dbUtils } from '../utils'
const { knex } = module

class BaseObjectionRepo extends baseRepo {
  constructor ({ model, tableName }) {
    super()
    if (!model) throw Error('model must be provided')
    this.model = model
  }

  async save ({ entityData, returnFields = '*' }) {
    try {
      return this.model.query().insert(entityData).returning(returnFields)
    } catch (err) {
      switch (err.code) {
        // we will implement error handler class that we manage all status together
        case '23505':
          throw AppError().DUPLICATED_KEY
        case '23503':
          throw AppError().FOREIGN_KEY
      }
      throw err
    }
  }

  async findBy ({ by, key, withGraphFetched }) {
    return this.model.query()
      .findOne({ [`${by}`]: key })
      .withGraphFetched(withGraphFetched)
  }
}

export default BaseObjectionRepo
