import Router from 'koa-router'

import AuthController from './Controller'
import AuthValidator from './Validator'

const v1 = new Router({ prefix: '/v1' })

v1.post('/users/signup', AuthValidator.signup(), AuthController.signup)
export default v1.routes()
