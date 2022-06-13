import mongoose from 'mongoose';

import healthInsurancePlanSchema from './healthInsurancePlanSchema.js';
import fileSchema from './fileSchema.js';

const PatientSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalId: { type: Number, required: true, unique: true },
    nationalIdType: { type: String, required: true },
    nationality: { type: String, required: false },
    gender: { type: String, required: false, default: 'm' },
    bloodType: String,
    rhFactor: String, 
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
    avatar: fileSchema,
    bio: String,
    contactPerson: {
      firstName: { type: String },
      lastName: { type: String },
      email: {
        type: String,
        lowercase: true,
      },
      phoneNumber: Number,
      address: String,
      bond: String,
    },
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
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Tag',
      },
    ],
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
    // appointments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     ref: 'Appointment',
    //   },
    // ],
    status: { type: String, default: 'active' },
  },
  {
    timestamps: true,
    optimisticConcurrency: true,
  }
);

PatientSchema.set('toJSON', {
  virtuals: true,
});

PatientSchema.set('toObject', {
  virtuals: true,
});

PatientSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

PatientSchema.virtual('age').get(function () {
  if (this.dateOfBirth) {
    return Math.floor(
      (Date.now() - this.dateOfBirth.getTime()) / (1000 * 3600 * 24 * 365)
    );
  } else {
    return '';
  }
});

PatientSchema.virtual('nextAppointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'patient',
  match: { start: { $gt: new Date() }  }
});


const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;
