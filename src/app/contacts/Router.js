import Router from 'koa-router'
import ContactController from './Controller'
import ContactValidator from './Validator'

const v1 = new Router({ prefix: '/v1' })

v1.post('/contacts', ContactValidator.create(), ContactController.create)
  .get('/contacts', ContactValidator.list(), ContactController.list)
  .patch('/contacts/:id', ContactValidator.update(), ContactController.update)
  .get('/contacts/:id', ContactValidator.details(), ContactController.details)
  .delete('/contacts/:id', ContactValidator.remove(), ContactController.remove)

export default v1.routes()
