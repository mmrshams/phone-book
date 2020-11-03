import Router from 'koa-router'

import users from './app/users/Router'
import auth from './app/auth/Router'
import contacts from './app/contacts/Router'

const router = new Router()
const api = new Router()

// need to add routes there
api.use(auth)
api.use(users)
api.use(contacts)
router.use(api.routes())

export default router
