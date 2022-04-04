import mongoose from 'mongoose';

const DoctorSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalId: { type: Number, required: true },
    nationalIdType: { type: String, required: true },
    nationality: { type: String, required: true },
    gender: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      // Change the default to true if you don't need to validate a new user's email address
      validated: { type: Boolean, default: false },
    },
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
    visits: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Visit',
      },
    ],
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Appointment',
      },
    ],
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Patient',
      },
    ],
  },
  {
    timestamps: true,
    optimisticConcurrency: true
  }
);

const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;
