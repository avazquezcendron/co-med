import mongoose from 'mongoose'

import healthInsurancePlanSchema from './healthInsurancePlanSchema.js';

const healthInsuranceCompanySchema = mongoose.Schema(
  {
    code: { type: String, required: true, index: true, unique: true },
    description: { type: String, required: true },
    plans: [ healthInsurancePlanSchema ],
  },
  {
    timestamps: true,
  }
)
  
healthInsuranceCompanySchema.set('toJSON', {
  virtuals: true
});

const HealthInsuranceCompany = mongoose.model('HealthInsuranceCompany', healthInsuranceCompanySchema)

export default HealthInsuranceCompany