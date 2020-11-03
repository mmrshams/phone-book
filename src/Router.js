import Router from 'koa-router'

import users from './app/users/Router'
import staffs from './app/staffs/Router'
import posts from './app/posts/Router'

const router = new Router()
const api = new Router()

// need to add routes there
router.use(api.routes())

export default router
