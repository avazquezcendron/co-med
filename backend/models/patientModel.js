import mongoose from 'mongoose';

import healthInsurancePlanSchema from './healthInsurancePlanSchema.js';

const PatientSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalId: { type: Number, required: true, unique: true },
    nationalIdType: { type: String, required: true },
    nationality: { type: String, required: false },
    gender: { type: String, required: false },
    email: {
      type: String,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      // Change the default to true if you don't need to validate a new user's email address
      validated: { type: Boolean, default: false },
    },
    biologicalSex: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
    phoneNumber: Number,
    avatarUrl: String,
    bio: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
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
    optimisticConcurrency: true
  }
);

const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;
