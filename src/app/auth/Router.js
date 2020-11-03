import Router from 'koa-router'

import AuthController from './Controller'
import AuthValidator from './Validator'

const v1 = new Router({ prefix: '/v1' })

v1.post('/auth/login', AuthValidator.login(), AuthController.login)

export default v1.routes()
