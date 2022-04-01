import mongoose from 'mongoose';

import emailSchema from './emailSchema.js';
import healthInsurancePlanSchema from './healthInsurancePlanSchema.js';

const PatientSchema = mongoose.Schema(
  {
    profile: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      nationalId: { type: Number, required: true, unique: true },
      nationalIdType: { type: String, required: true },
      nationality: { type: String, required: false },
      gender: { type: String, required: false },
      email: { type: emailSchema, required: false, unique: true },
      biologicalSex: { type: String, required: false },
      dateOfBirth: { type: Date, required: false },
      phoneNumber: Number,
      avatar: String,
      bio: String,
      address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String,
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    healthRecord: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'HealthRecord',
    },
    healthInsurances: [
      {
        admissionDate: Date,
        plan: { type: healthInsurancePlanSchema },
        cardNumber: Number,
        healthInsuranceCompany: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'HealthInsuranceCompany',
        },
      },
    ],
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Appointment',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;
