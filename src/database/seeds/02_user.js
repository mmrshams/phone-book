import { v4 } from 'uuid'

import { encryptPassword } from '../../helpers/password'

export const seed = async (knex) => {
  await knex('users').del()
  await knex('users').insert([
    {
      id: v4(),
      name: 'omid shams',
      email: 'mmrshams96@gmail.com',
      password: await encryptPassword('teste1'),
      role_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}
