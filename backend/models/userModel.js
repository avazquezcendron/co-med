import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcryptjs';

import emailSchema from './emailSchema.js';

const SALT_WORK_FACTOR = 10;



const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    password: { type: String, required: true },
    email: { type: emailSchema, required: true},
    roles: {
      type: [
        {
          type: String,
          enum: ['external', 'patient', 'admin', 'receptionist', 'doctor'],
        },
      ],
      default: ['receptionist'],
    },
    phoneNumber: { type: Number },
    profile: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
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
    status: { type: String, default: 'active' },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
  this.password = await bcrypt.hash(this.password, salt);
  // next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// UserSchema.methods.comparePassword = function (plaintext, callback) {
//   return callback(null, bcrypt.compareSync(plaintext, this.password));
// };

const User = mongoose.model('User', UserSchema);

export default User;
