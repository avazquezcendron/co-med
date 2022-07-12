import mongoose from 'mongoose'

const nursingServiceSchema = mongoose.Schema(
  {
    description: { type: String, required: false },
    date: { type: Date, required: true, default: new Date() },
    nurseFee: { type: Number, required: true, default: 0 },
    nurse: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Nurse',
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Service',
    },
    healthInsuranceCompany: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'HealthInsuranceCompany',
    },
  },
  {
    timestamps: true,
  }
)
  
nursingServiceSchema.set('toJSON', {
  virtuals: true
});

const NursingService = mongoose.model('NursingService', nursingServiceSchema)

export default NursingService