import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcryptjs';


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
    roles: {
      type: [
        {
          type: String,
          enum: ['external', 'patient', 'admin', 'receptionist', 'doctor'],
        },
      ],
      default: ['receptionist'],
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Doctor',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Patient',
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
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
    avatarUrl: String,
    bio: String,
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      zip: String,
    },
    status: { type: String, default: 'active' },
  },
  {
    timestamps: true,
    optimisticConcurrency: true
  }
);

UserSchema.set('toJSON', {
  virtuals: true
});

UserSchema.virtual('isAdmin').get(function () { 
  return this.roles.includes('admin');
});

UserSchema.virtual('isDoctor').get(function () { 
  return this.roles.includes('doctor');
});

UserSchema.virtual('isPatient').get(function () { 
  return this.roles.includes('patient');
});

UserSchema.virtual('isReceptionist').get(function () { 
  return this.roles.includes('receptionist');
});

// UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

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
