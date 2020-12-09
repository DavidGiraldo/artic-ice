import Mongoose from 'mongoose'
import Logger from '@ioc:Adonis/Core/Logger'
import Env from '@ioc:Adonis/Core/Env'

const connectionString: string = Env.getOrFail('DB_CONNECTION_STRING') as string
const db = Mongoose.connection

db.on('error', () => {
  Logger.error('Database connection FAIL')
})

db.once('open', () => {
  Logger.info('Database connection READY')
})

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}

Mongoose.connect(connectionString, options)
