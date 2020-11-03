
import baseRepo from './base/BaseRepo'

class BaseMongooseRepo extends baseRepo {
  constructor ({ model, schema }) {
    super()
    if (!model) throw Error('model must be provided')
    this.model = model
  }

  async save (data) {
    return this.model.create(data)
  }

  async findById (id, { populate, select } = {}) {
    let result = this.model.findById(id)
    if (populate) result = result.populate(populate)
    if (select) result = result.select(select)
    result = await result.exec()
    if (!result) return null
    return result.isDeleted ? null : result
  }

  async findByEmail(email) {
    return this.model.findOne({ email }).exec()
  }

  async findOneByQuery (query, { select } = {}, checkDeleted = false) {
    if (checkDeleted) query.isDeleted = false
    let result = this.model.findOne(query)
    if (select) result = result.select(select)
    result = await result.exec()
    return result
  }

  async findByQuery (query, { select } = {}, checkDeleted = false) {
    if (checkDeleted) query.isDeleted = false
    let result = this.model.find(query)
    if (select) result = result.select(select)
    result = await result.exec()
    return result
  }

  async updateById (id, fields, { select } = {}) {
    let result = this.model.findByIdAndUpdate(id, fields, { new: true })
    if (select) result = result.select(select)
    result = await result.exec()
    return result
  }

  async updateOneByQuery (query, fields, { select } = {}) {
    let result = this.model.findOneAndUpdate(query, fields, { new: true })
    if (select) result = result.select(select)
    result = await result.exec()
    return result
  }

  async updateByQuery (query, fields, { select } = {}) {
    let result = this.model.updateMany(query, fields)
    if (select) result = result.select(select)
    result = await result.exec()
    return result
  }

  async softDeleteById (id) {
    const result = await this.model.findByIdAndUpdate(id, { isDeleted: true })
    return result
  }

  async softDeleteOneByQuery (query) {
    const result = await this.model.findOneAndUpdate(query, { isDeleted: true })
    return result
  }

  async softDeleteByQuery (query) {
    const result = await this.model.updateMany(query, { isDeleted: true })
    return result
  }

  async deleteById (id) {
    const result = await this.model.findByIdAndDelete(id)
    return result
  }

  async deleteOneByQuery (query) {
    const result = await this.model.findOneAndDelete(query)
    return result
  }

  async deleteByQuery (query) {
    const result = await this.model.deleteMany(query)
    return result
  }

  async aggregate (query) {
    const result = await this.model.aggregate(query)
    return result
  }

  async aggregateWithPagination (pipeline = [], pageSize = 30, pageNumber = 1) {
    pageSize = parseInt(pageSize) || 30
    pageSize <= 0 && (pageSize = 30)
    pageNumber = parseInt(pageNumber) || 1
    pageNumber <= 0 && (pageNumber = 1)
    pipeline.push(
      {
        $facet: {
          pagination: [{ $count: 'totalRecords' }, { $addFields: { pageSize, pageNumber } }],
          records: [
            { $skip: (pageNumber - 1) * pageSize },
            { $limit: pageSize }
          ]
        }
      },
      {
        $unwind: '$pagination'
      }
    )
    const result = await this.model.aggregate(pipeline)
    return result.length ? result[0] : {
      pagination: {
        totalRecords: 0,
        pageSize,
        pageNumber
      },
      records: []
    }
  }
}

export default BaseMongooseRepo
