import Joi from '@hapi/joi'

import { validateSchema } from '../../helpers'

const UsersValidator = {
  create: () =>
    validateSchema({
      body: {
        phoneNumbers: Joi.array().items(Joi.string()).unique(),
        name: Joi.string().required(),
        userId: Joi.string().required(),
        description: Joi.string().max(400)
      }
    }),
  update: () =>
    validateSchema({
      params: {
        id: Joi.string().required()
      },
      body: {
        name: Joi.string(),
        description: Joi.string().max(400),
        phoneNumbers: Joi.array().items(Joi.string()).unique(),
      }
    }),
  details: () =>
    validateSchema({
      params: {
        id: Joi.string().required()
      }
    }),
  remove: () =>
    validateSchema({
      params: {
        id: Joi.string().required()
      }
    }),
  list: () =>
    validateSchema({
      query: {}
    })
}

export default UsersValidator
