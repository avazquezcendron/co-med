import mongoose from 'mongoose';

const DoctorSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalId: { type: Number, required: true, unique: true },
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
    specialities: {
      type: [
        {
          type: String,
          enum: [
            'Cardiología',
            'Dermatología',
            'Clínica Médica',
            'Urología',
            'Endocrinología',
            'Gastroenterología',
            'Medicina del deporte',
            'Nefrología',
            'Neurocirugía',
            'Neurología',
            'Otorrinolaringología',
            'Pediatría',
            'Reumatología',
            'Infectología',
            'Cirugía General',
            'Alergia e Inmunología',
            'Neumonología',
            'Psiquiatría',
            'Ginecología',
            'Obstreticia',
            'Esp. en Diagnóstico por Imágenes',
            'Nutrición',
            'Oftalmología',
            'Traumatología',
            'Hematología',
          ],
        },
      ],
    },
    licenses: [
      {
        licenseId: { type: Number, required: true },
        licenseType: {
          type: [
            {
              type: String,
              enum: ['mp', 'mn'], //matrícula provincial, matrícula nacional, etc.
            },
          ],
        },
      },
    ],
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
    optimisticConcurrency: true,
  }
);

DoctorSchema.set('toJSON', {
  virtuals: true,
});

DoctorSchema.virtual('fullName').get(function () { 
  return `${this.firstName} ${this.lastName}`;
});

DoctorSchema.virtual('age').get(function () { 
  if (this.dateOfBirth) {
    return Math.floor((Date.now() - this.dateOfBirth.getTime()) / (1000 * 3600 * 24 * 365));
  } else {
    return '';
  }
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

export default Doctor;
