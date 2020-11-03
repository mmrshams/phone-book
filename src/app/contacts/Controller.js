
import contactService from '../../models/contacts/Service'
import contactRepo from  '../../models/contacts/Repository'

const create = async (ctx) => {
  const { body: data } = ctx.request
  return contactService.create(data)
}

const update = async (ctx) => {
  const { id } = ctx.params
  const { body: data } = ctx.request
  return contactRepo.updateById(id, data)
}

const remove = async (ctx) => {
  const { id } = ctx.params
  await contactRepo.deleteById(id)
  ctx.status = 204
}

const list = async (ctx) => {
  const { query } = ctx
  const { id: userId } = ctx.state.user
  return contactRepo.aggregateWithPagination([
            { $match: { userId } }
        ])
}

const details = async (ctx) => {
  const { id } = ctx.params
  return contactRepo.findById(id)
}

export default {
  create,
  update,
  remove,
  list,
  details
}
