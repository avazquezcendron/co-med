import mongoose from 'mongoose';

const appointmentConfigSchema = mongoose.Schema(
  {
    date: { type: Date, required: false },
    slotHours: { type: Number, required: true, default: 0 },
    slotMinutes: { type: Number, required: true, default: 30 },
    slotPreparation: { type: Number, required: true, default: 0 },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Doctor',
    },
    sessions: [
      {
        sessionType: String,
        startTime: String,
        endTime: String,
        daysOfWeek: [Number],
      },
    ],
  },
  {
    timestamps: true,
  }
);

appointmentConfigSchema.set('toJSON', {
  virtuals: true,
});

appointmentConfigSchema.path('sessions').schema.virtual('name').get(function () { 
  return this.sessionType === 'morning' ? 'Mañana' : 'Tarde';
});

const AppointmentConfig = mongoose.model(
  'AppointmentConfig',
  appointmentConfigSchema
);

export default AppointmentConfig;
