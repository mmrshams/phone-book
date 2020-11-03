import Joi from '@hapi/joi'

import { validateSchema } from '../../helpers'

const AuthValidator = {
  signup: () =>
    validateSchema({
      body: {
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(1).max(20).required(),
        description: Joi.string().max(400)
      }
    })
}

export default AuthValidator
