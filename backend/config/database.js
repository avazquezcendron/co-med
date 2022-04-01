import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    const conn = await mongoose.connect(mongodbURI, {
      dbName: 'comed'
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
