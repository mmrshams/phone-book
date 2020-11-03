import Joi from '@hapi/joi'

import { validateSchema } from '../../helpers'

const AuthValidator = {
  login: () =>
    validateSchema({
      body: {
        email: Joi.string().email().required(),
        password: Joi.string().min(1).max(100).required()
      }
    })
}

export default AuthValidator
