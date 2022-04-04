import mongoose from 'mongoose';

const healthInsurancePlanSchema = mongoose.Schema(
  {
    // code: { type: String, required: true },
    description: { type: String, required: true, unique: true, index: true },
  }
)
  
export default healthInsurancePlanSchema;