import mongoose from 'mongoose';

const emailTemplateSchema = mongoose.Schema({
  name: String,
  fileUrl: String,
});

const emailSettingsSchema = mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      unique: true,
      // Change the default to true if you don't need to validate a new user's email address
      validated: { type: Boolean, default: false },
    },
    private: {
      uername: String,
      password: String,
    },
    templates: [emailTemplateSchema]
  },
  {
    timestamps: true,
  }
);

emailSettingsSchema.set('toJSON', {
  virtuals: true,
});

const EmailSettings = mongoose.model('EmailSettings', emailSettingsSchema);

export default EmailSettings;
