import mongoose from 'mongoose';

const NurseSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalId: { type: Number, required: true, unique: true },
    nationalIdType: { type: String, required: true },
    nationality: { type: String, required: false },
    biologicalSex: { type: String, required: false },
    room: { type: String, required: false },
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
    bio: String,
    status: { type: String, default: 'active' },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
  },
  {
    timestamps: true,
  }
);

NurseSchema.set('toJSON', {
  virtuals: true,
});

NurseSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

NurseSchema.virtual('age').get(function () {
  if (this.dateOfBirth) {
    return Math.floor(
      (Date.now() - this.dateOfBirth.getTime()) / (1000 * 3600 * 24 * 365)
    );
  } else {
    return '';
  }
});

const Nurse = mongoose.model('Nurse', NurseSchema);

export default Nurse;
