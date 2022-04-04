import mongoose from 'mongoose'

const drugSchema = mongoose.Schema(
  {
    // code: { type: String, required: true },
    description: { type: String, required: true, unique: true, index: true },
  },
  {
    timestamps: true,
  }
)
  
const Drug = mongoose.model('Drug', drugSchema)

export default Drug