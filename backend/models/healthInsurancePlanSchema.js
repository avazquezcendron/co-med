import mongoose from 'mongoose';

const healthInsurancePlanSchema = mongoose.Schema(
  {
    code: { type: String, required: true },
    description: { type: String, required: true },
  }
)
  
export default healthInsurancePlanSchema;