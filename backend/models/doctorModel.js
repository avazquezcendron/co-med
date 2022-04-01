import mongoose from 'mongoose';

const DoctorSchema = mongoose.Schema(
  {
    profile: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      nationalId: { type: Number, required: true },
      nationalIdType: { type: String, required: true },
      nationality: { type: String, required: true },
      gender: { type: String, required: true },
      email: { type: emailSchema, required: true, unique: true },
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
  }
);

const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;
