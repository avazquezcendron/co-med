import mongoose from 'mongoose'

const drugSchema = mongoose.Schema(
  {
    // code: { type: String, required: true },
    description: { type: String, required: true, unique: true, index: true },
    drugName: String,
    format: String,
    composition: String,
    requiresPrescription: Boolean
  },
  {
    timestamps: true,
  }
)
  
drugSchema.set('toJSON', {
  virtuals: true
});

const Drug = mongoose.model('Drug', drugSchema)

export default Drug