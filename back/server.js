import express from 'express'
import morgan from 'morgan'
import colors from 'colors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


import { connectDB } from './config/db.js'

// Routes
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes) 

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(`server is running on port ${PORT}`.yellow.bold)
)
