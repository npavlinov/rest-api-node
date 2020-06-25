import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './config/config.json'
import userSeed from './database/seeds/user'
import routes from './routes'
import { signToken } from './utils/auth'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(
  config.mongoUrl,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) console.log('Error connecting to MongoDB')
    console.log('Connected to MongoDB')
    userSeed()
  }
)

app.use('/', routes)
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message,
    },
  })
})

export default app
