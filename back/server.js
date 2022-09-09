import express from 'express'
import morgan from 'morgan'
import colors from 'colors'
import dotenv from 'dotenv'
import path from 'path'

// Config
import { connectDB } from './config/db.js'

// Middleware
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

// Routes
import userRoutes from './routes/userRoutes.js'
import exerciseRoutes from './routes/exerciseRoutes.js'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/exercises', exerciseRoutes) 

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(
  PORT,
  console.log(`server is running on port ${PORT}`.yellow.bold)
)
