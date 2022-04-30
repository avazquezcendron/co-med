import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'
import connectDB from './config/database.js'
import { errorHandler, notFoundHandler } from './middleware/errorMiddleware.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import patientRoutes from './routes/patientRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import hospitalRoutes from './routes/hospitalRoutes.js'
import healthInsuranceCompanyRoutes from './routes/healthInsuranceCompanyRoutes.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import appointmentConfigRoutes from './routes/appointmentConfigRoutes.js'
import baseEntityRoutes from './routes/baseEntityRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/patient', patientRoutes)
app.use('/api/doctor', doctorRoutes)
app.use('/api/hospital', hospitalRoutes)
app.use('/api/healthInsurance', healthInsuranceCompanyRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/appointment', appointmentRoutes)
app.use('/api/appointmentConfig', appointmentConfigRoutes)
app.use('/api', baseEntityRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFoundHandler)
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode at PORT:${PORT}`)
)
