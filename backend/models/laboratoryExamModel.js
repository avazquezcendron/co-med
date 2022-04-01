import mongoose from 'mongoose'

const laboratoryExamSchema = mongoose.Schema(
  {
    value: { type: String, required: true },    
    laboratoryType: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'LaboratoryType',
    },
    healthRecord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'HealthRecord',
    },
  },
  {
    timestamps: true,
  }
)
  
const LaboratoryExam = mongoose.model('LaboratoryExam', laboratoryExamSchema)

export default LaboratoryExam