import mongoose from 'mongoose';

const emailSchema = mongoose.Schema({
    address: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
    },
    // Change the default to true if you don't need to validate a new user's email address
    validated: { type: Boolean, default: false },
});
  
export default emailSchema;