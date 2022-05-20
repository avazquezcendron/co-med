import mongoose from 'mongoose';

const clinicDataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    acronym: { type: String, required: true },
    email: {
      type: String,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      unique: true,
      // Change the default to true if you don't need to validate a new user's email address
      validated: { type: Boolean, default: false },
    },
    phoneNumber: { type: Number },
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
    city: String,
    facebookAccountName: String,
    instagramAccountName: String,
    webSiteUrl: String,
  },
  {
    timestamps: true,
  }
);

clinicDataSchema.set('toJSON', {
  virtuals: true,
});

const ClinicData = mongoose.model('ClinicData', clinicDataSchema);

export default ClinicData;
