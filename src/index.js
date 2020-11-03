import app from 'server'
import process from 'process'
import mongoose from 'mongoose'
import { PORT, connectionString } from 'config'
import { createConnection } from 'typeorm'
// mongoose connection
mongoose.connect(connectionString)
mongoose.connection.on('error', console.error)

createConnection().then(async connection => {
  app.shutdown = () => process.exit()

  process.on('SIGINT', () => app.shutdown())

  process.on('SIGTERM', () => app.shutdown())

  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})

export default app
