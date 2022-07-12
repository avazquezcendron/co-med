import mongoose from 'mongoose'

const serviceSchema = mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    cost: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
)
  
serviceSchema.set('toJSON', {
  virtuals: true
});

const Service = mongoose.model('Service', serviceSchema)

export default Service