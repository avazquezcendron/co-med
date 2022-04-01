import mongoose from 'mongoose'

const laboratoryTypeSchema = mongoose.Schema(
  {
    code: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)
  
const LaboratoryType = mongoose.model('LaboratoryType', laboratoryTypeSchema)

export default LaboratoryType