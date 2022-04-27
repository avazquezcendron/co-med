import mongoose from 'mongoose'

const laboratoryTypeSchema = mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)
  
laboratoryTypeSchema.set('toJSON', {
  virtuals: true
});

const LaboratoryType = mongoose.model('LaboratoryType', laboratoryTypeSchema)

export default LaboratoryType